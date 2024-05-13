import React from "react";

const Card = ({data, handleCounter, itemsShow}) => {

  return (
    <div>
      <div
        className="flex flex-col border rounded-md hover:bg-blue-400 hover:cursor-pointer"
        onClick={() => handleCounter(data)}
        style={{pointerEvents: !itemsShow ? 'auto' : 'none'}}
      >
        <h2 className="font-bold text-xl">{data.title}</h2>
        <p>{data.description}</p>
        <p>{data.price}€</p>
      </div>
    </div>
  );
};

export default Card;
