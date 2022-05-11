const stripe = require("stripe")(
  "sk_test_51KSsb9KtGQ4ZHKavVEnA8TdtQs8OpOpVDAJ547QKLH6k5d83QGwEAPXW9SBMcfdgCnj8f8aWhR7WYjfUGIpiL5RX00t1TbI9Sq"
);

function AddImages() {
  stripe.products.update("prod_L9CGqbgkHiF7Wh", {
    images: ["merch/products/mask"],
  });

  stripe.products.update("prod_L9MetSis2sCbTj", {
    images: ["merch/products/white-cartoon-tee"],
  });
  stripe.products.update("prod_L9Mdm2TqN0VjmF", {
    images: ["merch/products/black-succubus-tee"],
  });
  stripe.products.update("prod_L9McNuaIg2Fvf0", {
    images: ["merch/products/black-cartoon-tee"],
  });
  stripe.products.update("prod_L9MPqmDSlmxNBR", {
    images: ["merch/products/black-cartoon-hoodie"],
  });
  stripe.products.update("prod_L9MMQfSzr4mgMT", {
    images: ["merch/products/white-cartoon-hoodie"],
  });
  stripe.products.update("prod_L9MDKTEX89VHuC", {
    images: ["merch/products/black-succubus-hoodie"],
  });
  stripe.products.update("prod_L9GET0mmaesivi", {
    images: ["merch/products/white-succubus-hoodie"],
  });
}
//     stripe.products.update(
//     "prod_L9CGqbgkHiF7Wh",
//     {images: [
//         "merch/products/mask/mask-1.jpg"
//     ]}
//     );

//   stripe.products.update(
//   "prod_L9MetSis2sCbTj",
//   {images: [
//     "merch/products/white-cartoon-tee/white-cartoon-tee-1.jpg",
//     "merch/products/white-cartoon-tee/white-cartoon-tee-2.jpg"
// ]}
// );
// stripe.products.update(
// "prod_L9Mdm2TqN0VjmF",
// {images: [
//     "merch/products/black-succubus-tee/black-succubus-tee-1.jpg"
// ]}
// );
// stripe.products.update(
// "prod_L9McNuaIg2Fvf0",
// {images: [
//     "merch/products/black-cartoon-teeblack-cartoon-tee-1",
//     "merch/products/black-cartoon-teeblack-cartoon-tee-2"
// ]}
// );
// stripe.products.update(
// "prod_L9MPqmDSlmxNBR",
// {images: [
//     "merch/products/black-cartoon-hoodie/black-cartoon-hoodie-1",
//     "merch/products/black-cartoon-hoodie/black-cartoon-hoodie-2"
// ]}
// );
// stripe.products.update(
// "prod_L9MMQfSzr4mgMT",
// {images: [
//     "merch/products/white-cartoon-hoodie/white-cartoon-hoodie-1",
//     "merch/products/white-cartoon-hoodie/white-cartoon-hoodie-2"
// ]}
// );
// stripe.products.update(
// "prod_L9MDKTEX89VHuC",
// {images: [
//     "merch/products/black-succubus-hoodie/black-succubus-hoodie-1",
//     "merch/products/black-succubus-hoodie/black-succubus-hoodie-2"
// ]}
// );
// stripe.products.update(
// "prod_L9GET0mmaesivi",
// {images: [
//     "merch/products/white-succubus-hoodie/white-succubus-hoodie-1"
// ]}
// );
// };

AddImages();
