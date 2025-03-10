import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ products }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative max-w-2xl mx-auto my-4">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 border border-gray-300 rounded-md"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-40 overflow-auto shadow-md">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="p-2 cursor-pointer hover:bg-blue-100 flex items-center"
              >
                <img
                  src={product.image.url}
                  alt={product.image.alt}
                  className="w-12 h-12 object-cover mr-3"
                />
                <p>{product.title}</p>
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No products found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
