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
  let dinner = products.filter((d) => d.mealType.includes("Dinner"));
  let lunch = products.filter((d) => d.mealType.includes("Lunch"));
  let breakfast = products.filter((d) => d.mealType.includes("Breakfast"));
  let dessert = products.filter((d) => d.mealType.includes("Dessert"));

  useEffect(() => {
    fetchRecipes();
  }, []);

  return { recipes, dinner, lunch, breakfast, dessert };
};

export { useFetchProducts };
