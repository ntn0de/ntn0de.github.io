const withMDX = require("@next/mdx")();

module.exports = withMDX({
  output: 'export',
  pageExtensions: ["js", "jsx", "mdx", "md"],
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  // experimental: {
  //   mdxRs: true,
  // },
});
