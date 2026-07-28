import { describe, it, expect } from "vitest";
import fromMorse from "./fromMorse";

describe("fromMorse", () => {
  it("decodifica una letra", () => {
    expect(fromMorse(".-")).toBe("A");
    expect(fromMorse(".")).toBe("E");
    expect(fromMorse("--..")).toBe("Z");
  });

  it("decodifica una palabra separada por espacios", () => {
    expect(fromMorse("... --- ...")).toBe("SOS");
  });

  it("decodifica / como espacio entre palabras", () => {
    expect(fromMorse(".... --- .-.. .- / -- ..- -. -.. ---")).toBe(
      "HOLA MUNDO"
    );
  });

  it("decodifica digitos", () => {
    expect(fromMorse("..--- ----- ..--- -....")).toBe("2026");
  });

  it("reemplaza los codigos que no conoce por un espacio", () => {
    expect(fromMorse(".- ......")).toBe("A ");
  });

  // Comportamiento actual, no necesariamente el deseado: "".split(" ")
  // devuelve [""], que no esta en el mapa y termina como un espacio.
  it("devuelve un espacio si no recibe texto", () => {
    expect(fromMorse("")).toBe(" ");
  });
});
