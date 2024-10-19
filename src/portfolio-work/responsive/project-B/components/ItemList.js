import React from "react";
import { v4 as uuidv4 } from "uuid";

const ItemList = ({ data }) => {
  return (
    <div className="item-container">
      {data.map((item) => (
        <div className="item-wrap" key={uuidv4()}>
          <div className={`img ${item.imgClass}`}></div>
          <div className="item_btm">
            <h4 className="title">{item.title}</h4>
            <span className="category">{item.category.join(", ")}</span>
            <div className="badge_wrap">
              <div className="badge year">{item.year}</div>
              <div className="badge runtime">{item.runtime}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
