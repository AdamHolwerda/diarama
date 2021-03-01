import "./styles.css";

import Diarama from "./Diarama";

export default function App() {
  return (
    <div className="App">
      <div style={{ width: "50vw", height: "50vh", float: "left" }}>
        <Diarama />
      </div>
      <div style={{ width: "50vw", height: "50vh", float: "left" }}>
        <Diarama />
      </div>
      <div style={{ width: "50vw", height: "50vh", float: "left" }}>
        <Diarama />
      </div>
      <div style={{ width: "50vw", height: "50vh", float: "left" }}>
        <Diarama />
      </div>
    </div>
  );
}
