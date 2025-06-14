const TarjetaPersona = ({ persona }) => {
  return (
    <div style={{
      backgroundColor: "#1f1f1f",
      padding: "1.5rem",
      borderRadius: "12px",
      width: "220px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.4)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
    }}
    >
      <h3 style={{ marginBottom: "0.75rem" }}>{persona.nombre} {persona.apellido}</h3>
      <p><strong>Edad:</strong> {persona.edad}</p>
      <p><strong>Email:</strong> {persona.email}</p>
    </div>
  );
};

export default TarjetaPersona;