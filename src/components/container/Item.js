import React, { useState } from "react";
import { Card } from "react-bootstrap";


export const Item = () => {
  
  const [value, setValue] = useState(0);
  
  

  function show () {
    alert(`Agregaste ${value} al carrito`);
  }

  const add = () => {
    value >= 0 ? setValue(value + 1) : setValue(value);
  };

  const remove = () => {
     value > 0 ? setValue(value - 1) : setValue(value);
  };

  return (
    <>
        <p>Cantidad {value}</p>
        <button className="btn btn-primary plusCircle" onClick={add}>
        Agregar
        </button>
         <button onClick={remove} className="btn btn-danger">
        Quitar
        </button>
        <button className="btn btn-warning" onClick={show}>
        {" "}
        Enviar al carrito{" "}
        </button>
    </>
    );
};
