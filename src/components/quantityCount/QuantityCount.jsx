import { useState } from "react";
import styles from "./quantityCount.module.css";

const QuantityCount = () => {
  /* UseState der tracker mængden startende fra 1 */
  const [quantity, setQuantity] = useState(1);

  /* Øger antallet */
  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  /* Sikre at den ikke går under 1 */
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <figure>
      <p>-</p>
      <p>1</p>
      <p>+</p>
    </figure>
  );
};

export default QuantityCount;
