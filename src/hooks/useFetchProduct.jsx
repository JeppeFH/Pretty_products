import { useEffect, useState } from "react";

/* Hooks der skal fetche til Recipes.jsx */
const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/category/furniture/"
      );
      const data = await response.json();
      console.log("Fetched Data:", data);

      setProducts(data.products);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  /* Filter variable */
  let sofas = products.filter((d) => d.tags.includes("sofas"));
  let officeChairs = products.filter((d) => d.tags.includes("office chairs"));
  let beds = products.filter((d) => d.tags.includes("beds"));
  let bedsideTables = products.filter((d) => d.tags.includes("bedside tables"));

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    sofas,
    officeChairs,
    beds,
    bedsideTables,
  };
};

export { useFetchProducts };
