import { useState } from "react";
import styles from "./quantityCount.module.css";

const QuantityCount = () => {
  /* UseState der tracker mængden startende fra 1 */
  const [quantity, setQuantity] = useState(1);

  /* Øger antallet for hvert + klik */
  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  /* Hvis antallet er større end 1 mindskes antallet for hvert - klik */
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <figure className={styles.quantityCount}>
      <p onClick={decrement}>-</p>
      <p>{quantity}</p>
      <p onClick={increment}>+</p>
    </figure>
  );
};

export default QuantityCount;
