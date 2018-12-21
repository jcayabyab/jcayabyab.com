module.exports = {
  siteMetadata: {
    title: "Jofred Cayabyab",
    description: "The personal portfolio website of Jofred Cayabyab.",
    author: "@JCayabyab"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogposts`,
        path: `${__dirname}/src/assets/blogposts`
      }
    },
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: "1024px",
              wrapperStyle: `
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
              `,
              quality: 100
            }
          }
        ]
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "JCayabyab.com",
        short_name: "JCayabyab",
        start_url: "/",
        background_color: "#6d72c3",
        theme_color: "#6d72c3",
        display: "minimal-ui",
        icon: "src/assets/images/icon.png" // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
