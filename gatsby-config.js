module.exports = {
  siteMetadata: {
    title: 'Johann SERVOIRE',
    siteUrl: 'https://www.johann-servoire.fr',
    description: 'Web developer and open-sourcerer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        ignore: ['src/css/'],
        whitelist: [
          'collapsing',
          'fade',
          'collapse',
          'show'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-25767197-1',
      },
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/i18n`,
        languages: ['fr', 'en'],
        defaultLanguage: 'en',
        redirect: true
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt'
  ]
}
