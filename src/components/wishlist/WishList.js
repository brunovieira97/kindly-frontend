import React, { useState } from "react";
import Item from "./Item";

import "./WishList.css";

const WishList = props => {
  const initialValue = {
    description:
      "Necessidades da semana de 25 a 30 de Novembro. Qualquer doação é bem vinda.",
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
    <div className="WishList">
      <h2>Lista de Necessidades</h2>
      <br />
      <p>{list.description}</p>
      <ul>
        {list.items.map(listItem => (
          <Item item={listItem} />
        ))}
      </ul>
    </div>
  );
};

export default WishList;
