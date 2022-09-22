import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./styles.css";

const Formulario = (props) => {
  /*
   * Stateless
   * Stateful
   *
   * Formularios controlados
   *  1. Crear un estado (useState)
   *  2. Vincular el input con el estado --> value
   *  3. Manejar el evento onChange
   *    3.1 Generamos una funcion que reciba el evento
   *    3.2 Vincular el onChange del input con 3.1
   *    3.3 Debemos actualizar el estado accediendo al evento.target.value
   *        usando la funcion que actualiza el estado
   *  4. Cuando tenemos controlados todos los imputs vamos a manejar el evento onSubmit del form
   *    4.1 Generamos una función que reciba el evento
   *    4.2 Vincular el onSubmit del form con el 4.1
   *    4.3 Prevenir el comportamiento por defecto - event.preventDefault()
   */
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  function tituloHandler(event) {
    setTitulo(event.target.value);
  }

  function descripcionHandler(event) {
    setDescripcion(event.target.value);
  }

  function sendData(event) {
    event.preventDefault();
    props.envioDeTarea({
      titulo: titulo,
      descripcion: descripcion,
      completada: false,
    });
    setTitulo("");
    setDescripcion("");
    /**Fetch
     * fetch("url", {method: "POST"})
     *  .then(respuesta => {})
     */
  }

  return (
    <form className="Formulario" onSubmit={sendData}>
      <h2>Agrega tu tarea</h2>
      <input
        placeholder="Ingresa el título"
        value={titulo}
        onChange={tituloHandler}
      />
      <input
        placeholder="Ingresa tu descripción"
        value={descripcion}
        onChange={descripcionHandler}
      />
      <Button variant="primary" type="submit">
        Agregar
      </Button>
    </form>
  );
};

export default Formulario;
