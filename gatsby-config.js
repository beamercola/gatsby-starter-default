module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    // {
    //   resolve: `gatsby-source-airtable`,
    //   options: {
    //     apiKey: process.env.AIRTABLE_KEY,
    //     tables: [
    //       { tableName: ``, baseId: `` },
    //     ],
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        develop: false,
        purgeOnly: ["..//style.css"],
        tailwind: true,
      },
    },
  ],
}
