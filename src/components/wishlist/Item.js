import React from "react";

const Item = props => {
  console.log(props);
  return (
    <li>
      {`${props.item.donative} - Qtd.: ${props.item.quantity}`}
      <button onClick={() => props.removeItem(props.item.id)}>Deletar</button>
    </li>
  );
};

export default Item;
