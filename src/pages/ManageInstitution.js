import React, { useState, useEffect } from "react";

import WishList from "../components/wishlist/WishList";
import WishListForm from "../components/wishlist/WishListForm";

const ManageInstitution = props => {
  const list = {
    name: "Lista de Necessidades",
    description: "Aceitamos items fora da lista",
    beginDate: new Date(),
    endDate: new Date(),
    wishListItems: [
      { donative: "Papel Higienico", quantity: 20, priority: 1 },
      {
        donative: "Pacote de fraldas (todos os tamanhos)",
        quantity: 10,
        priority: 2
      },
      { donative: "Cobertores", quantity: 5, priority: 2 }
    ]
  };

  const [wishlist, setWishList] = useState(list);

  const addItem = item => {
    const newList = { ...wishlist };
    newList["wishListItems"] = [...newList.wishListItems, item];
    setWishList(newList);
  };

  const removeItem = item => {
    const newList = { ...wishlist };
    newList["wishListItems"] = wishlist.wishListItems.filter(
      i => i.id !== item.id
    );
    setWishList(newList);
  };

  return (
    <div>
      <WishListForm addItem={addItem}></WishListForm>
      <WishList list={wishlist} removeItem={removeItem}></WishList>
    </div>
  );
};

export default ManageInstitution;
