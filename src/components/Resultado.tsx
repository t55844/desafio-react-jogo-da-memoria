import React from "react";
import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "./Context";
import { resultados } from "../constants/resultados";


export const Resultado = () => {
  const [aberto, setAberto] = useState<boolean>(false)
  const { resultado, limpaDados } = useContext(MyContext)
  const [dadosResultado, setDadosResultado] = useState({ titulo: '', imagem: '', min: '0%' })


  const cn = classNames("resultado", {
    "resultado--aberto": aberto,
  })

  function defineResultado(resultado) {
    setDadosResultado(resultado)
    setAberto(!aberto)
    limpaDados()

  }

  useEffect(() => {
    if (resultado != 0) {
      if (resultados[0].min >= resultado) { defineResultado(resultados[0]) }
      else if (resultados[1].min >= resultado) { defineResultado(resultados[1]) }
      else if (resultados[2].min >= resultado) { defineResultado(resultados[2]) }
      else { defineResultado(resultados[3]) }
    }
  }, [resultado])
  return (
    <div className={cn}>
      <div className="resultado__box">
        <p>Seu nível de memória é:</p>
        <h1>{dadosResultado.titulo}</h1>
        <img
          src={dadosResultado.imagem}
          height={150}
          alt="Imagem de nível de memória"
        />
        <p>
          <strong>Taxa de acertos:</strong> {dadosResultado.min}
        </p>
        <button onClick={() => setAberto(!aberto)}>Nova partida</button>
        <p>
          <small>
            * Essa análise é ilustrativa e não possui base científica.
          </small>
        </p>
      </div>
    </div>
  );
};
