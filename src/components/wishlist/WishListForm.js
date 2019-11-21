import React, { useState } from "react";

const WishListForm = ({ addItem }) => {
  const [donative, setDonative] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [priority, setPriority] = useState(1);

  const handleSubmit = evt => {
    evt.preventDefault();
    const newItem = { donative, quantity, priority };
    addItem(newItem);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={donative}
          name="donative"
          onChange={evt => setDonative(evt.target.value)}
        ></input>
        <input
          type="number"
          value={quantity}
          name="quantity"
          onChange={evt => setQuantity(evt.target.value)}
        ></input>
        <input
          type="number"
          value={priority}
          name="priority"
          onChange={evt => setPriority(evt.target.value)}
        ></input>
        <button>Adicionar</button>
      </form>
    </div>
  );
};

export default WishListForm;
