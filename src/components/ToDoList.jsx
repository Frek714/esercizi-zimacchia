import React, { Fragment, useState } from "react";

export const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [toDosDone, setToDosDone] = useState([]);

  const handleChange = (event) => {
    setToDo(event.target.value);
  };

  const handleToDo = () => {
    const newTodos = [...toDos];
    newTodos.push(toDo);
    setToDos(newTodos);
    setToDo("");
  };

  const handleDelete = (index, newTodos, setFun) => {
    newTodos.splice(index, 1)
    setFun(newTodos)
  }

  // const handleDone = (el) => {
  //   const newDone = [...toDosDone];
  //   const newTodos = [...toDos];
  //   newDone.push(el);
  //   setToDosDone(newDone);
  //   newTodos.splice(el, 1);
  //   setToDos(newTodos);
  // };

  const handleDone = (el, arrayStart, arrayEnd, setStart, setEnd) => {
    arrayEnd.push(el);
    setEnd(arrayEnd)
    arrayStart.splice(arrayStart.indexOf(el), 1);
    setStart(arrayStart)
  };

  return (
    <Fragment>
      <h2>To do list</h2>
      <div>
        <input
          type="text"
          placeholder="Cosa devo fare..."
          value={toDo}
          onChange={handleChange}
        />
        <button type="button" onClick={handleToDo}>
          Aggiungi
        </button>
      </div>
      <div>
        <p>Cose da fare...</p>
        {toDos.map((el, index) => {
          return (
            <div
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <p>{el}</p>
              <button type='button' onClick={() => handleDelete(index, [...toDos], setToDos)}>Elimina</button>
              {/* <button type="button" onClick={() => handleDelete(index, true)}>Elimina</button> */}
              {/* <button type="button" onClick={() => handleDone(el)}>Fatto</button> */}
              <button type="button" onClick={() => handleDone(el, [...toDos], [...toDosDone], setToDos, setToDosDone)}>Fatto</button>
            </div>
          );
        })}
      </div>
      <div>
        <p>Cosa ho fatto</p>
        {toDosDone.map((el, index) => {
          return (
            <div key={index}>
              <p>{el}</p>
              <button type='button' onClick={() => handleDelete(index, [...toDosDone], setToDosDone)}>Elimina</button>
              {/* <button type="button" onClick={() => handleRestore()}>Ripristina</button> */}
              <button type="button" onClick={() => handleDone(el, [...toDosDone], [...toDos], setToDosDone, setToDos)}>Ripristina</button>
              {/* <button type="button" onClick={() => handleDelete(index, false)}>Elimina</button> */}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
