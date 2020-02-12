module.exports = {
  pathPrefix: `/Ogura-Hyakunin-Isshu`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ogura Hyakunin Isshu`,
        short_name: `Karuta`,
        start_url: `https://akashmeshram.github.io/Ogura-Hyakunin-Isshu/`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
