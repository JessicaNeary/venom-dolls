var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });

exports.handler = async (event) => {
  var formatPrice = (amount) => {
    let price = (amount / 100).toFixed(2);
    return "$" + price;
  };
  var params = {
    Destination: {
      ToAddresses: ["jessicafneary@gmail.com"],
    },
    Template: "PurchaseNotificationEmail",
    TemplateData: `{ \"name\":\"${event.shipping.name}\", \"line1\":\"${
      event.shipping.address.line1
    }\", \"line2\":\"${event.shipping.address.line2}\", \"city\":\"${
      event.shipping.address.city
    }\", \"postal_code\":\"${
      event.shipping.address.postal_code
    }\", \"country\":\"${
      event.shipping.address.country
    }\", \"customerEmail\": \"${
      event.customer_details.email
    }\", \"totalPrice\": \"${formatPrice(
      event.amount_total
    )}\", \"shippingCost\": \"${formatPrice(
      event.total_details.amount_shipping
    )}\", \"tax\": \"${formatPrice(
      event.total_details.amount_tax
    )}\", \"subtotal\": \"${formatPrice(
      event.amount_subtotal
    )}\", \"products_purchased\": \"${
      event.metadata.products_purchased
    }\", \"stripeUrl\":\"www.stripe.com\"}`,
    Source: "jessicafneary@gmail.com",
    ConfigurationSetName: "EmailConfigSet",
  };
  return ses.sendTemplatedEmail(params).promise();
};
