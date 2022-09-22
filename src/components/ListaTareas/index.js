import React from "react";
import Tarea from "../Tarea";

const ListaTareas = (props) => {
  const { todasLasTareas, eliminarTarea } = props;
  return (
    <div>
      <h2>Lista de Tareas</h2>
      {todasLasTareas.map((tarea, index) => {
        return (
          <Tarea
            posicion={index}
            key={index}
            {...tarea}
            eliminarTarea={eliminarTarea}
          />
        );
      })}
    </div>
  );
};

export default ListaTareas;
