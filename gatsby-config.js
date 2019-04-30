//configure gatsby plugins

module.exports = {
  siteMetadata: {
    title: "HyeSoo's blog ",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "files",
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
