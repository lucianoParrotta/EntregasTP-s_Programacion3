import TarjetaPersona from "./TarjetaPersona";

const ListaTarjetas = ({ personas }) => {
  return (
    <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem",
        justifyContent: "center",
        width: "100%",
        maxWidth: "1000px"
    }}>
      {personas.map(persona => (
        <TarjetaPersona key={persona.id} persona={persona} />
      ))}
    </div>
  );
};

export default ListaTarjetas;
