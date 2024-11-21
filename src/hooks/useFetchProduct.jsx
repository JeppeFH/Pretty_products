import { useEffect, useState } from "react";

/* Hooks der skal fetche til products.jsx */
const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/category/furniture/"
      );
      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  /* Filter variable */
  let sofas = products.filter((e) => e.tags.includes("sofas"));
  console.log(sofas);
  let officeChairs = products.filter((e) => e.tags.includes("office chairs"));
  let beds = products.filter((e) => e.tags.includes("beds"));
  let bedsideTables = products.filter((e) => e.tags.includes("bedside tables"));

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
