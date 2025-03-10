import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./components/SearchBar";

function App() {
  const url = "https://v2.api.noroff.dev/online-shop";
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(url);
        const fetchedData = await res.json();

        if (Array.isArray(fetchedData.data)) {
          setData(fetchedData.data);
        } else {
          console.error("Fetched data is not an Array");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, [url]);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <h1 className="text-lg flex justify-center font-bold p-4">Online-Shop</h1>

      <SearchBar products={data} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 pt-4">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg bg-blue-100">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <img
                src={item.image.url}
                alt={item.image.alt}
                className="w-full h-48 object-cover mb-4"
              />
              <p className="text-lg">{item.description}</p>

              <p className="text-lg font-bold">
                {item.discountedPrice < item.price ? (
                  <span className="line-through text-red-500 ">
                    {item.price} $
                  </span>
                ) : (
                  item.price
                )}
              </p>

              {item.discountedPrice < item.price && (
                <p className="text-black font-bold">{item.discountedPrice} $</p>
              )}

              <button
                onClick={() => handleClick(item.id)}
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
              >
                View Product
              </button>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default App;
