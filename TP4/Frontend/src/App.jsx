import "./App.css";
import TraerPersonas from "./components/TraerPersonas";

function App() {
  return (
    <div className="container">
      <h1>TP4 - Personas</h1>
      <TraerPersonas />
      <footer style={{ marginTop: "4rem", fontSize: "0.9rem", color: "#888" }}>
        Programacion 3 - Trabajo Practico 4. Hecho por Luciano Parrotta.
      </footer>
    </div>
  );  
}

export default App;