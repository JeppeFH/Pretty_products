import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./productsDetails.module.css";
import AddToCartButton from "../../components/addToCartButton/AddToCartButton";
import QuantityCount from "../../components/quantityCount/QuantityCount";
import Footer from "../../components/footer/Footer";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  /* UseState så det store billede vises først som udgangspunkt */
  const [selectedImage, setSelectedImage] = useState("");

  const fetchProductById = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();

    setProduct(data);

    /* Sætter det store billede som standard */
    setSelectedImage(data.images[0]);
  };

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  /* Funktion der opdaterer det store billede */
  const imageSelectHandler = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      {product && (
        <article className={styles.productsDetailsContainer}>
          <div className={styles.imageContainer}>
            {/* Store billede */}
            <img src={selectedImage} alt={product.title} />
            {/* Små billeder */}
            {product.images.map((image, index) => (
              <img
                key={index}
                onClick={() =>
                  imageSelectHandler(image)
                } /* Opdaterer det store billede til det der klikkes på */
                src={image}
                alt={`${product.title} ${index}`}
                className={
                  selectedImage === image ? styles.active : ""
                } /* CSS til highlight af lille aktive billede */
              />
            ))}
          </div>

          <div className={styles.productInfo}>
            <h1>{product.title}</h1>
            <h2>{product.brand}</h2>
            <h3>Stock</h3>
            <p>{product.stock}</p>
            <h3>Price</h3>
            <p className={styles.productPrice}>{product.price} $</p>
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

      <Footer />
    </>
  );
};

export default ProductDetails;
