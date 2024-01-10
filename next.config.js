const withMDX = require("@next/mdx")();
module.exports = withMDX({
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "md"],
  experimental: {
    mdxRs: true,
  },
});
