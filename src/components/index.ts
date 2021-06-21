// const req = require.context(".", true, /\.\/[^/]+\/[^/]+\/index\.(tsx|js|ts)$/);

// req.keys().forEach((key) => {
//   const componentName = key.replace(/^.+\/([^/]+)\/index\.(tsx|js|ts)/, "$1");
//   module.exports[componentName] = req(key).default;
// });
export * from "./atoms";
export * from "./molecules";
export * from "./organisms";
export * from './templates';
// export * from "./templates/FormList";
// export * from "./templates/LayoutBuilder";
export { reversedTheme, theme } from "./themes/inedx";

