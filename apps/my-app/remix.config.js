function createWatchPaths() {
  const { workspaceLayout, workspaceRoot } = require('@nx/devkit');
  const { join } = require('path');
  return [
    join(workspaceRoot, workspaceLayout().libsDir),
    join(workspaceRoot, 'packages'),
  ];
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
  watchPaths: createWatchPaths(),
};
