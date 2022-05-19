const getShipping = (lineItems) => {
  // contains a hoodie
  if (
    lineItems.find((item) => {
      return item.name.match(/(Hoodie)/);
    })
  ) {
    return process.env.GATSBY_SHIPPING_LARGE;
  }
  // contains more than one tee shirt
  let teeCount = 0;
  lineItems.forEach((item) => {
    if (item.name.match(/(T-Shirt)/)) {
      teeCount = teeCount + item.quantity;
    }
  });
  if (teeCount > 1) {
    return process.env.GATSBY_SHIPPING_LARGE;
  } else return process.env.GATSBY_SHIPPING_SMALL;
};

export default getShipping;
