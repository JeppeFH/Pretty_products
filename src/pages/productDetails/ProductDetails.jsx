import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./productsDetails.module.css";
import AddToCartButton from "../../components/addToCartButton/AddToCartButton";
import QuantityCount from "../../components/quantityCount/QuantityCount";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const fetchProductById = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();

    setProduct(data);
  };

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  const imageSelectHandler = () => {};

  return (
    <>
      {product && (
        <article className={styles.productsDetailsContainer}>
          <div className={styles.imageContainer}>
            <img src={product.images[0]} alt={product.title} />
            <img
              onClick={imageSelectHandler}
              src={product.images[0]}
              alt={product.title}
            />
            <img
              onClick={imageSelectHandler}
              src={product.images[1]}
              alt={product.title}
            />
            <img
              onClick={imageSelectHandler}
              src={product.images[2]}
              alt={product.title}
            />
          </div>

          <div className={styles.productInfo}>
            <h1>{product.title}</h1>
            <h2>{product.brand}</h2>
            <h3>Stock</h3>
            <p>{product.stock}</p>
            <h3>Price</h3>
            <p className={styles.productPrice}> {product.price} $</p>
            <QuantityCount stock={product.stock} />
            <h3>Description</h3>
            <p className={styles.description}>{product.description}</p>
            <h3>Details</h3>
            <p className={styles.details}>{product.dimensions.height} inches</p>
            <p className={styles.details}>{product.dimensions.width} inches</p>
            <p className={styles.details}>{product.dimensions.depth} inches</p>
            <AddToCartButton />
          </div>
        </article>
      )}
    </>
  );
};

export default ProductDetails;
