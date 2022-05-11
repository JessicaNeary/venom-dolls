const getShipping = (lineItems) => {
  // contains a hoodie
  if (
    lineItems.find((item) => {
      return item.name.match(/(Hoodie)/);
    })
  ) {
    return "shr_1KaWd3KtGQ4ZHKav4Zr4Ih38";
  }
  // contains more than one tee shirt
  let teeCount = 0;
  lineItems.forEach((item) => {
    if (item.name.match(/(T-Shirt)/)) {
      teeCount = teeCount + item.quantity;
    }
  });
  if (teeCount > 1) {
    return "shr_1KaWd3KtGQ4ZHKav4Zr4Ih38";
  } else return "shr_1KaWdNKtGQ4ZHKav4g0p9r6i";
};

export default getShipping;
