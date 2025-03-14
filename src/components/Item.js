import React, { useState } from "react";

function Item({ name, category }) {
  // State for whether the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Toggle cart status
  const toggleCartStatus = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartStatus}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;