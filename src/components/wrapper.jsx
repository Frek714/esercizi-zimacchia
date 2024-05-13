import React, { Fragment, useState } from "react";
import Card from "./Card";

const configArr = [
  {
    id: 0,
    title: "title",
    description: "description",
    price: 1,
  },
  {
    id: 1,
    title: "title1",
    description: "description1",
    price: 1,
  },
  {
    id: 2,
    title: "title2",
    description: "description2",
    price: 1,
  },
  {
    id: 3,
    title: "title3",
    description: "description3",
    price: 1,
  },
];

const Wrapper = () => {
  const [counter, setCounter] = useState(0);
  const [cardSelected, setCardSelected] = useState([]);
  const [itemsShow, setItemsShow] = useState(false);

  const handleCounter = (data) => {
    const newCardSelected = [...cardSelected];
    const card = cardSelected.find((el) => el.id === data.id);
    if (card || card === 0) {
      setCounter(counter - 1);
      const index = newCardSelected.indexOf(data);
      newCardSelected.splice(index, 1);
      setCardSelected(newCardSelected);
      console.log(newCardSelected);
    } else {
      setCounter(counter + 1);
      newCardSelected.push(data);
      setCardSelected(newCardSelected);
      console.log(newCardSelected);
    }
  };

  const handleReset = () => {
    const newCardSelected = [...cardSelected];
    setCounter(0);
    newCardSelected.splice(0);
    setCardSelected(newCardSelected);
  };

  const handleDeleteItem = (id) => {
    const newCardSelected = [...cardSelected];
    const index = newCardSelected.indexOf(
      newCardSelected.find((el) => el.id === id)
    );
    newCardSelected.splice(index, 1);
    setCardSelected(newCardSelected);
    setCounter(newCardSelected.length);
  };

  return (
    <Fragment>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {configArr.map((el) => {
          return (
            <Card data={el} handleCounter={(data) => handleCounter(data)} itemsShow={itemsShow}/>
          );
        })}
      </div>
      <p>Counter: {counter}</p>
      <div>
        <button
          className="rounded-md bg-red-600 text-white px-4 py-2 mx-2"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="rounded-md bg-green-500 text-white px-4 py-2 mx-2"
          onClick={() => setItemsShow(!itemsShow)}
        >
          {!itemsShow ? 'Mostra elementi' : 'Nascondi elementi'}
        </button>
      </div>
      <div>
        <p>Items selected</p>
        {itemsShow &&
          cardSelected.map((el) => {
            return (
              <div className="flex">
                <p>{el.title}</p>
                <span
                  className="text-red-600"
                  onClick={() => handleDeleteItem(el.id)}
                >
                  X
                </span>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

export default Wrapper;
