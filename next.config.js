const path = require("path");
const repo = "developer-portfolio";

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  output: "export",
  assetPrefix: `/${repo}/`,
  basePath: `/${repo}`,
  images: {
    unoptimized: true,
  },
};
