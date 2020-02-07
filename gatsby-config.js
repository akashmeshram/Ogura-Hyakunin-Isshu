module.exports = {
  pathPrefix: "/Ogura-Hyakunin-Isshu",
  siteMetadata: {
    title: `Ogura`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
