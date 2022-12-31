import { createContext, useState } from "react";
import { cartasMocadas } from "../constants/cartas";
import { PONTOS, TEMPO_EM_MS } from "../constants/configuracoes";

export const LogicaJogoDaMemoriaContext = createContext();

export const LogicaJogoDaMemoriaProvider = ({ children }) => {
  const [cartas, definirCartas] = useState([]);
  const [idsDosParesEncontrados, definirIdsDosParesEncontrados] = useState([]);
  const [idsDasCartasViradas, definirIdsDasCartasViradas] = useState([]);

  const [quantidadeDeCartasViradas, definirQuantidadeDeCartasViradas] =
    useState(0);
  const [quantidadeDePontos, definirQuantidadeDePontos] = useState(0);

  const iniciarJogo = () => {
    definirIdsDosParesEncontrados([]);
    definirIdsDasCartasViradas([]);

    definirQuantidadeDeCartasViradas(0);

    definirCartas(cartasMocadas);
  };

  const novaRodada = () => {
    definirIdsDasCartasViradas([]);
  };

  const contarCartaVirada = () =>
    definirQuantidadeDeCartasViradas((quantidade) => quantidade + 1);

  const marcarPonto = () =>
    definirQuantidadeDePontos((pontos) => pontos + PONTOS.PAR_ENCONTRADO);

  const registrarParEncontrado = (idDoPar) =>
    definirIdsDosParesEncontrados((ids) => [...ids, idDoPar]);

  const virarCarta = ({ id, idDoPar }) => {
    contarCartaVirada();

    if (idsDasCartasViradas.length === 0) {
      return definirIdsDasCartasViradas([id]);
    }

    const primeiroId = idsDasCartasViradas[0];
    const segundoId = id;
    definirIdsDasCartasViradas([primeiroId, segundoId]);

    const cartasIguais = cartas[segundoId]?.idDoPar === cartas[primeiroId]?.idDoPar;

    if (cartasIguais) {
      marcarPonto();
      registrarParEncontrado(idDoPar);
    }

    const tempo = cartasIguais ? 0 : TEMPO_EM_MS.VIRAR_CARTA;
    setTimeout(novaRodada, tempo);
  };

  const valor = {
    cartas,
    idsDosParesEncontrados,
    idsDasCartasViradas,

    quantidadeDeCartasViradas,
    quantidadeDePontos,

    iniciarJogo,
    virarCarta,
  };

  return (
    <LogicaJogoDaMemoriaContext.Provider value={valor}>
      {children}
    </LogicaJogoDaMemoriaContext.Provider>
  );
};
