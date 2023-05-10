import React from "react";
import { cartasMocadas } from "../constants/cartas";
import { Carta } from "./Carta";
import { Placar } from "./Placar";
import { Resultado } from "./Resultado";

export const JogoDaMemoria = () => {
  return (
    <div className="jogo-da-memoria">
      <div className="jogo-da-memoria__conteudo">
        <h1>Jogo da Memória</h1>
        <Placar />
        <div className="cartas">
          {cartasMocadas.map((info) => (
            <Carta key={info.id} cartasInfo={info} />
          ))}
        </div>
      </div>
      <Resultado />
    </div>
  );
};
