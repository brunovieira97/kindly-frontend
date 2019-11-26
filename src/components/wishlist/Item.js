import React from "react";

const Item = props => {
  return <li>{`${props.item.name} - Qtd.: ${props.item.quantity}`}</li>;
};

export default Item;
