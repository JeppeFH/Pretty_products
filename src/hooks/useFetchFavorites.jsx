import { useEffect, useState } from "react";

/* Hooks der skal fetche til Favorites.jsx */
const useFetchFavorites = () => {
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

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
};

export { useFetchFavorites };
