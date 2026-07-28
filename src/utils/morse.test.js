import { describe, it, expect } from "vitest";
import toMorse from "./toMorse";
import fromMorse from "./fromMorse";

// Los dos mapas se escribieron a mano y por separado, asi que nada garantiza
// que sean simetricos. Esta es la prueba que lo garantiza.
const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITOS = "0123456789";

describe("ida y vuelta", () => {
  it.each([...ALFABETO, ...DIGITOS])(
    "%s sobrevive a codificar y decodificar",
    (caracter) => {
      expect(fromMorse(toMorse(caracter))).toBe(caracter);
    }
  );

  it("el espacio sobrevive a codificar y decodificar", () => {
    expect(fromMorse(toMorse(" "))).toBe(" ");
  });

  it("una frase completa sobrevive a codificar y decodificar", () => {
    const frase = "EL VELOZ MURCIELAGO 123";
    expect(fromMorse(toMorse(frase))).toBe(frase);
  });
});
