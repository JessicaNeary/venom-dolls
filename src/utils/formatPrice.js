const formatPrice = (amount, currency) => {
    let price = (amount / 100).toFixed(2)
    if (currency) {
      let numberFormat = new Intl.NumberFormat(["en-US"], {
        style: "currency",
        currency: currency,
        currencyDisplay: "symbol",
      })
      return numberFormat.format(price)
    } else return "$" + price;
};

export default formatPrice;