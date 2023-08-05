import "./App.css";
import { useState } from "react";
import toMorse from "./utils/toMorse";
import fromMorse from "./utils/fromMorse";
import { Card } from "./components/Card/Card";

function App() {
  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");
  const [show, setShow] = useState("toMorse");

  const toMorseChange = (e) => {
    const aux = e.target.value.toUpperCase();

    setText(aux);
    setMorse(toMorse(aux));
  };

  const fromMorseChange = (e) => {
    const aux = e.target.value;

    setMorse(aux);
    setText(fromMorse(aux));
  };

  const copy = (copy) => {
    navigator.clipboard.writeText(copy);
  };

  const toggleShow = () => {
    setShow(show === "toMorse" ? "fromMorse" : "toMorse");
  };

  return (
    <div className="bg-amber-200 flex-col justify-center items-center h-screen">
      <button onClick={toggleShow}>Cambiar</button>

      <div className="flex justify-center items-center">
        <Card
          placeholder={
            show === "toMorse"
              ? "Escribe tu texto aquí"
              : "Escribe tu morse aquí"
          }
          onChange={show === "toMorse" ? toMorseChange : fromMorseChange}
          value={show === "toMorse" ? text : morse}
          text={show !== "toMorse" ? morse : text}
          onClick={copy}
          btnText={show === "toMorse" ? "Copiar morse" : "Copiar texto"}
          title={show === "toMorse" ? "Texto a morse" : "Morse a texto"}
          textArea={true}
          id="card1"
          show={show}
        />

        <Card
          placeholder={
            show !== "toMorse"
              ? "Escribe tu texto aquí"
              : "Escribe tu morse aquí"
          }
          onChange={show !== "toMorse" ? toMorseChange : fromMorseChange}
          value={show !== "toMorse" ? text : morse}
          text={show === "toMorse" ? morse : text}
          onClick={copy}
          btnText={show !== "toMorse" ? "Copiar morse" : "Copiar texto"}
          title={show !== "toMorse" ? "Texto a morse" : "Morse a texto"}
          textArea={false}
          id="card2"
          show={show}
        />
      </div>
    </div>
  );
}

export default App;
