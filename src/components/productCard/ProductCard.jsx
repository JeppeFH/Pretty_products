import { FcLike, FcDislike } from "react-icons/fc";
import styles from "./productCard.module.css";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

const ProductCard = ({ product }) => {
  const [favorites, setfavorites] = useLocalStorage("Favorites", []);
  const isFavorite = favorites.includes(product.id);

  const handleLike = () => {
    /*Tilføjer eller sletter isFavorites fra localstorage*/
    /*  ? = if     : = else*/
    setfavorites((prevFavorites) =>
      isFavorite
        ? prevFavorites.filter((fav) => fav !== recipe.id)
        : [...prevFavorites, recipe.id]
    );
  };

  return (
    <figure className={styles.productCard}>
      <Link to={`/product/${product.id}`}>
        <img src={product.images} alt={product.title} />
        <h3 className={styles.productName}>{product.title}</h3>
      </Link>

      {isFavorite ? (
        <FcDislike className="favoriteDislike" size={30} onClick={handleLike} />
      ) : (
        <FcLike className="favoriteLike" size={30} onClick={handleLike} />
      )}
    </figure>
  );
};

export default ProductCard;
