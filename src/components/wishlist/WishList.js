import React from "react";

import Item from "./Item";

const WishList = props => {
  return (
    <div>
      {props.list.name}
      <br />
      {props.list.description}
      <ul>
        {props.list.wishListItems.map(listItem => (
          <Item item={listItem} removeItem={props.removeItem} />
        ))}
      </ul>
    </div>
  );
};

export default WishList;
