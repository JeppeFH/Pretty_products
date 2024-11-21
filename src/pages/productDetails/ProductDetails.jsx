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

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  return (
    <>
      {product && (
        <article className={styles.ProductsDetailsContainer}>
          <img src={product.images} alt={product.title} />
          <div>
            <h1>{product.title}</h1>
            <h2>{product.brand}</h2>
            <h3>Price</h3>
            <p>{product.price}</p>
            <h3>Stock</h3>
            <p>{product.stock}</p>
            <h3>Description</h3>
            <p>{product.description}</p>
            <h3>Details</h3>
            <p>{product.dimensions}</p>
          </div>
        </article>
      )}
    </>
  );
};

export default ProductDetails;
