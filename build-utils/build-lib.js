/* eslint-disable no-console */
const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");
const libConfig = require("../lib");
const _ = require("lodash");

console.info("🚀 Let's build this thing!");

// Update the index file
console.info("📝 Updating index file");
require("./update-index-file");

// Get the names of all components in the src directory
const componentNames = require("./component-names");

// Get the binary for vue-cli-service
const vueCliServicePath = getPath("../node_modules/.bin/vue-cli-service");

fs.emptyDirSync(getPath("../packages"));

// Build the main lib, with all components packaged into a plugin
console.info("🏗 Building main library");
execSync(
  `${vueCliServicePath} build src/index.js --target lib --name index --dest dist/`
);
// Rename the CommonJS build so that it can be imported with
// ${libConfig}/dist
renameIndex();

function renameIndex(componentName) {
  const builds = [
    {
      type: "common",
      dest: "cjs"
    },
    {
      type: "umd"
    },
    {
      type: "umd.min"
    }
  ];

  const packageName = _.compact([
    libConfig.name,
    _.kebabCase(componentName)
  ]).join(".");
  const destPackageFolder = path.resolve(
    __dirname,
    `../packages/${packageName}`
  );

  for (const build of builds) {
    const oldIndexPath = path.resolve(
      __dirname,
      `../dist/${componentName || ""}/index.${build.type}.js`
    );
    const [buildTypeBase, buildModifier] = build.type.split(".");
    const destFolder = path.resolve(
      destPackageFolder,
      build.dest != null ? build.dest : buildTypeBase
    );
    const newIndexPath = path.resolve(
      destFolder,
      `index${buildModifier ? "." + buildModifier : ""}.js`
    );
    if (!fs.existsSync(destPackageFolder)) {
      fs.mkdirSync(destPackageFolder);
    }
    if (!fs.existsSync(destFolder)) {
      fs.mkdirSync(destFolder);
    }
    const oldMapPath = oldIndexPath + ".map";
    const newMapPath = newIndexPath + ".map";

    fs.renameSync(oldIndexPath, newIndexPath);
    fs.renameSync(oldMapPath, newMapPath);
    fs.writeFileSync(
      newIndexPath,
      fs
        .readFileSync(newIndexPath, { encoding: "utf8" })
        .replace(path.basename(oldMapPath), path.basename(newMapPath))
    );
  }

  fs.copySync(getPath("../src"), path.resolve(destPackageFolder, "src"), {
    filter: filePath => {
      return !/\.unit\.js$/.test(filePath);
    }
  });
  fs.writeFileSync(
    path.resolve(destPackageFolder, "index.js"),
    `\
export * from './src${componentName ? "/" + componentName + ".vue" : ""}'
`
  );

  if (componentName) {
    const componentPackageFolder = path.resolve(
      __dirname,
      `../packages/${libConfig.name}/${componentName}`
    );
    fs.copySync(destPackageFolder, componentPackageFolder, {
      filter: filePath => {
        return !/(LICENSE|README\.md|src)$/.test(filePath);
      }
    });
    fs.writeFileSync(
      path.resolve(componentPackageFolder, "index.js"),
      `\
export * from '${path.join("../src", componentName || "")}'
`
    );
  }
}

function getPath(...args) {
  return path.resolve(__dirname, ...args);
}
