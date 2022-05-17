import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51KSsb9KtGQ4ZHKavaUdMdbZwgsjNGTjPvuCxYJN0vBGvjQBix4P59RlP3SqeEK3f5yNPGDGJWZlv4HinwSq2Nh4r005rU3QLqp"
    );
  }
  return stripePromise;
};

export default getStripe;
