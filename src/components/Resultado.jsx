import classNames from "classnames";
import { useMemo } from "react";
import { resultados } from "../constants/resultados";
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria";

export const Resultado = () => {
  const {
    cartas,
    idsDosParesEncontrados,
    quantidadeDeCartasViradas,
    iniciarJogo,
  } = useJogoDaMemoria();

  const aberto = useMemo(
    () => cartas.length === idsDosParesEncontrados.length * 2,
    [idsDosParesEncontrados.length]
  );

  const taxaDeAcertos = (cartas.length / quantidadeDeCartasViradas) * 100;

  const resultado = useMemo(
    () => resultados.find(({ min }) => min < taxaDeAcertos),
    [aberto]
  );

  const cn = classNames("resultado", {
    "resultado--aberto": aberto,
  });

  return (
    <div className={cn}>
      <div className="resultado__box">
        <p>Seu nível de memória é:</p>
        <h1>{resultado?.titulo}</h1>
        <img
          src={resultado?.imagem}
          height={150}
          alt="Imagem de nível de memória"
        />
        <p>
          <strong>Taxa de acertos:</strong> {taxaDeAcertos.toFixed(0)}%
        </p>
        <button className="button" onClick={iniciarJogo}>
          Nova partida
        </button>
        <p>
          <small>
            * Essa análise é ilustrativa e não possui base científica.
          </small>
        </p>
      </div>
    </div>
  );
};
