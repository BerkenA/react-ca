import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCartStore from "../components/Cart";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        if (!res.ok) {
          throw new Error("Product not found");
        }
        const data = await res.json();
        setProduct(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchProduct();
  }, [id]);

  function handleAddToCart() {
    addToCart(product);
    setMessage(`${product.title} has been added to your cart!`);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  if (!product) {
    return <p className="text-center text-lg">Loading product...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">{product.title}</h1>
      <div className="border p-4 rounded-lg bg-blue-100">
        {product.image && (
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="w-full h-64 object-cover mb-4 rounded"
          />
        )}
        <p className="text-lg">{product.description}</p>

        <p className="text-lg font-bold mt-2">
          {product.discountedPrice < product.price ? (
            <span className="line-through text-red-500">${product.price}</span>
          ) : (
            `$${product.price}`
          )}
        </p>

        {product.discountedPrice < product.price && (
          <p className="text-black font-bold">${product.discountedPrice}</p>
        )}

        {message && <p className="mt-2 text-green-600 font-bold">{message}</p>}

        <div className="mt-6">
          <h2 className="text-xl font-bold">Reviews</h2>
          {product.reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            product.reviews.map((review) => (
              <div key={review.id} className="border-b p-2 mt-2">
                <p className="font-bold">{review.username}</p>
                <p>Rating: {review.rating}⭐</p>
                <p>{review.description}</p>
              </div>
            ))
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
