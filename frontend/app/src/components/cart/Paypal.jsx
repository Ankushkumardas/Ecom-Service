import {PayPalButtons,PayPalScriptProvider} from '@paypal/react-paypal-js'
const Paypal = ({ amount, onsuccess }) => {
  return (
    <PayPalScriptProvider options={{ "client-id": "AUwqxiIx6fMe1C9VoYyBPaPII9cTrG1QoE8QdsKmArjzU4Ga6YK4-1jZtS16UqRlDc3S4cMmho8ryfF-" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(_, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }]
          });
        }}
        onApprove={(_, actions) => {
          return actions.order.capture().then(onsuccess);
        }}
        
      />
    </PayPalScriptProvider>
  );
};

export default Paypal;
