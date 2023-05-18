function createWatchPaths(dirname) {
  const { workspaceLayout, workspaceRoot, offsetFromRoot } = require('@nx/devkit');
  const { relative, join } = require('path');
  const offset = offsetFromRoot(relative(workspaceRoot, dirname));
  const { libsDir } = workspaceLayout();
  return libsDir === 'packages'
    ? [join(offset, libsDir)]
    : [join(offset, libsDir), join(offset, 'packages')];

}
/**

 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  watchPaths: createWatchPaths(__dirname),
};

console.log(module.exports.watchPaths);
