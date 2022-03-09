const path = require(`path`);

exports.createPages = async function ({ graphql, actions, reporters }) {
    const { createPage } = actions;
      const { data } = await graphql(`
        query
          {
            allStripePrice {
              edges {
                node {
                  id
                  product {
                    images
                  }
                }
              }
            }
          }
        `  );

        // Handle errors
    if (data.errors) {
        reporters.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

        productTemplate = path.resolve(`./src/templates/ProductCardFull.js`)
        data.allStripePrice.edges.forEach(({ node }) => {
          createPage({
            path: `merch/product/${node.id}`,
            component: productTemplate,
            context: {
              productId: node.id,
              imageLocation: node.product.images[0]
            },
          })
        });
    };