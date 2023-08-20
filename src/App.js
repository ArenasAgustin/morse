import "./App.css";
import { useState } from "react";
import toMorse from "./utils/toMorse";
import fromMorse from "./utils/fromMorse";
import { Card } from "./components/Card/Card";
import { Button } from "./components/Button/Button";

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
    <div className="bg-black-500 flex flex-col justify-center items-center min-h-screen">
      <Button onClick={toggleShow}>Cambiar</Button>

      <div className="flex justify-center items-center w-full flex-wrap">
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
