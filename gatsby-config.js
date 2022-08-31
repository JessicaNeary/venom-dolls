require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Venom Dolls`,
    description: `3 piece queer punk/alt rock band from Auckland, NZ. Fast paced, highly relatable tunes sure to get you dancing/moshing/accidentally injuring your neighbor.`,
    keywords: `girl punk bands, queer bands, queer punk bands, queer rock bands, 2022, auckland bands, new zealand bands, all female bands, girl rock bands`,
    siteUrl: "https://www.venomdolls.co.nz",
    image: "venom-dolls-car.jpg",
  },
  flags: { DEV_SSR: true },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: '"G-LTPBK35FG2"',
      },
    },
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo-black.png",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /.svg$/,
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price", "Product"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },
  ],
};
