import React from "react";
import Badge from "react-bootstrap/Badge";

const Contador = (props) => {
  const { todasLasTareas } = props;
  return <Badge bg="secondary">1/{todasLasTareas.length}</Badge>;
};

export default Contador;
