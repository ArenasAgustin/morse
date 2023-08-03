import "./App.css";
import { useState } from "react";
import toMorse from "./utils/toMorse";
import fromMorse from "./utils/fromMorse";
import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";

function App() {
  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");
  const [show, setShow] = useState(null);

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

  const copy = (textOrMorse = "text") => {
    navigator.clipboard.writeText(textOrMorse === "text" ? text : morse);
  };

  return (
    <div className="App">
      <div>
        <Button onClick={() => setShow("toMorse")}>Combertir a morse</Button>
        <Button onClick={() => setShow("fromMorse")}>Combertir de morse</Button>
      </div>

      {show === "toMorse" ? (
        <Card
          placeholder="Escribe tu texto aquí"
          onChange={toMorseChange}
          value={text}
          text={morse}
          onClick={() => copy("morse")}
          btnText="Copiar morse"
        />
      ) : null}

      {show === "fromMorse" ? (
        <Card
          placeholder="Escribe tu morse aquí"
          onChange={fromMorseChange}
          value={morse}
          text={text}
          onClick={() => copy("text")}
          btnText="Copiar texto"
        />
      ) : null}
    </div>
  );
}

export default App;
