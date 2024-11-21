import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import styles from "./favorites.module.css";
import { useFetchFavorites } from "../../hooks/useFetchFavorites";

const Favorites = () => {
  const { products } = useFetchFavorites();

  let ratings = products.filter((r) => r.rating > 4.5);

  return (
    <section>
      {ratings.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Favorites;
