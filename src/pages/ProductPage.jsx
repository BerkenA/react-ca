import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        if (!res.ok) {
          throw new Error("Product not found");
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchProduct();
  }, [id]);


  return (
    <div className="product-page">
      {product ? (
        <>
          <h1>{product.title}</h1>
          {product.image && (
            <img
              src={product.image.url}
              alt={product.image.alt}
              className="product-image"
            />
          )}
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {product.discountedPrice && (
            <>
              <p>
                <span className="line-through">${product.discountedPrice}</span>
              </p>
              <p>Discounted Price: ${product.price}</p>
            </>
          )}
          <button className="add-to-cart">Add to Cart</button>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductPage;
