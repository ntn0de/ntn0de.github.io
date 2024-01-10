const withMDX = require("@next/mdx")();
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx", "md"],
  experimental: {
    mdxRs: true,
  },
});
