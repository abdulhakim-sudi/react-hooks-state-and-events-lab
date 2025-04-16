import React, { useState } from 'react';

function Item({ item }) {
  // 7. State for cart status
  const [inCart, setInCart] = useState(false);

  // 8. Toggle cart status
  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button onClick={toggleCart}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
