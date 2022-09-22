import React from "react";
import "./styles.css";
import Button from "react-bootstrap/Button";

const Tarea = (props) => {
  const { titulo, descripcion, posicion, eliminarTarea } = props;
  return (
    <div className="Tarea">
      <div>
        <input type="checkbox" />
        <span>{posicion + 1} - </span>
        <span>{titulo}</span>
        <Button
          variant="danger"
          style={{ borderRadius: "50%" }}
          onClick={() => {
            eliminarTarea(posicion);
          }}
        >
          X
        </Button>
      </div>
      <p>{descripcion}</p>
    </div>
  );
};

export default Tarea;
