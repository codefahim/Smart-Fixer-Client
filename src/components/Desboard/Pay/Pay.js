import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51IeA1PJfWzgyoKMBGDz2bxTScIuj3xgV44bwbVfuiN8FWHSg8J4SbGYzyPNyY99RhdxNBL3zCeRIolga7vr5MAyn00E0pMXJNQ'
);

const Pay = () => {
  return (
    <Elements stripe={stripePromise}>
      this payment
      <CardElement />
    </Elements>
  );
};
export default Pay;
