require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
      title: `Venom Dolls`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "\"ADD TRACKING ID\""
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/logo-black.png"
    }
  }, 
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /.svg$/
      }
    }
  },
  "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-stripe`,
    options: {
      objects: ["Price", "Product"],
      secretKey: process.env.STRIPE_SECRET_KEY,
      downloadFiles: true,
    },
  }]
};