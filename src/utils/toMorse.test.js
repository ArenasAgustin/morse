import { describe, it, expect } from "vitest";
import toMorse from "./toMorse";

describe("toMorse", () => {
  it("codifica una letra", () => {
    expect(toMorse("A")).toBe(".-");
    expect(toMorse("E")).toBe(".");
    expect(toMorse("Z")).toBe("--..");
  });

  it("separa las letras de una palabra con un espacio", () => {
    expect(toMorse("SOS")).toBe("... --- ...");
  });

  it("codifica el espacio entre palabras como /", () => {
    expect(toMorse("HOLA MUNDO")).toBe(".... --- .-.. .- / -- ..- -. -.. ---");
  });

  it("codifica digitos", () => {
    expect(toMorse("2026")).toBe("..--- ----- ..--- -....");
  });

  it("espera mayusculas: App.jsx llama toUpperCase antes de invocarla", () => {
    expect(toMorse("SOS")).not.toBe(toMorse("sos"));
  });

  it("reemplaza los caracteres que no conoce por /", () => {
    expect(toMorse("A!")).toBe(".- /");
  });

  it("devuelve una cadena vacia si no recibe texto", () => {
    expect(toMorse("")).toBe("");
  });
});
