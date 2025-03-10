import { Link } from "react-router-dom";

function CheckoutSuccessPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Order Successful!</h1>
      <p>Your order has been placed. Thank you for shopping with us!</p>
      <Link to="/" className="mt-4 block text-blue-500">
        Back to Store
      </Link>
    </div>
  );
}

export default CheckoutSuccessPage;
