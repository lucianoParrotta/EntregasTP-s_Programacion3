import { useEffect, useState } from "react";
import axios from "axios";
import ListaTarjetas from "./ListaTarjetas";

const TraerPersonas = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/personas")
      .then(response => setPersonas(response.data))
      .catch(error => console.error("Error al traer personas:", error));
  }, []);

  return (
    <div>
      <h2>Listado de Personas</h2>
      <ListaTarjetas personas={personas} />
    </div>
  );
};

export default TraerPersonas;