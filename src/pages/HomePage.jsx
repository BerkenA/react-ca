import { useEffect, useState } from "react";

function HomePage() {
  const [url, setUrl] = useState("https://v2.api.noroff.dev/online-shop");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, [url]);

  return (
    <>
      <h1>HELLO! I AM THE HOMEPAGE</h1>
    </>
  );
}

export default HomePage;
