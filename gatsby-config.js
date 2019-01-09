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
        ignore: ['src/css/']
      }
    }
  ]
}
