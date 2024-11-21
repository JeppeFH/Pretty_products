import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./productsDetails.module.css";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const fetchproductById = async (id) => {
    const response = await fetch(
      `https://dummyjson.com/products/category/furniture/${id}`
    );
    const data = await response.json();
    setProduct(data);
  };
  console.log(data);

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  return (
    <>
      {product && (
        <article className={styles.ProductsDetailsContainer}>
          <div>
            <h1>{product.title}</h1>
            <h2>{product.mealType}</h2>
            <figure>
              <h4>Forberedelsestid (minutter) :</h4>
              <p>{product.prepTimeMinutes}</p>
              <h4>Sværhedsgrad:</h4>
              <p>{product.difficulty}</p>
              <h4>Antal serveringer:</h4>
              <p>{product.servings}</p>
            </figure>
            <h3>Fremgangsmåde:</h3>
            <p>{product.instructions}</p>
            <h3>Ingredienser:</h3>
            <p>{product.ingredients}</p>
          </div>
          <img src={product.image} alt={product.name} />
        </article>
      )}
    </>
  );
};

export default ProductDetails;
