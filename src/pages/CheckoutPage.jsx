import useCartStore from "../components/Cart";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const { cart, removeFromCart, getTotalPrice, clearCart } = useCartStore();
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Shopping Cart</h1>
      {Object.keys(cart).length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul className="border p-4 rounded-lg bg-blue-100">
            {Object.entries(cart).map(([id, product]) => (
              <li key={id} className="flex justify-between p-2 border-b">
                <div className="flex items-center">
                  {product.image && (
                    <img
                      src={product.image.url}
                      alt={product.image.alt}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  <div className="ml-4">
                    <span className="mr-2">{product.title}</span>
                    <span>
                      {product.quantity}x ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(id)}
                  className="text-red-500 font-bold cursor-pointer"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <p className="text-lg font-bold mt-4">
            Total: ${getTotalPrice().toFixed(2)}
          </p>
          <button
            onClick={() => {
              clearCart();
              navigate("/checkoutsucces");
            }}
            className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 cursor-pointer"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;
