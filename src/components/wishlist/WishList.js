import React, { useState } from "react";
import Item from "./Item";

const WishList = props => {
  const initialValue = {
    description: "Necessidades da semana. Qualquer doação é bem vinda.",
    items: [
      { name: "Papel Higiênico", quantity: "40 rolos" },
      { name: "Sabote", quantity: "10 pacotes" },
      { name: "Sabão em Pó", quantity: "10 caixas" },
      { name: "Alimentos não perecíveis", quantity: "10 kgs" },
      { name: "Lençóis", quantity: "20 unidades" }
    ]
  };
  const [list, setList] = useState(initialValue);

  return (
    <div>
      <h2>Lista de Necessidades</h2>
      <br />
      {list.description}
      <ul>
        {list.items.map(listItem => (
          <Item item={listItem} />
        ))}
      </ul>
    </div>
  );
};

export default WishList;
