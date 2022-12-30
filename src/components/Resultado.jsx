import classNames from "classnames";

export const Resultado = () => {
  const aberto = false;

  const cn = classNames("resultado", {
    "resultado--aberto": aberto,
  });
  return (
    <div className={cn}>
      <div className="resultado__box">
        <p>Seu nível de memória é:</p>
        <h1>Excelente</h1>
        <img
          src="kitekat-4.png"
          height={150}
          alt="Imagem de nível de memória"
        />
        <p>
          <strong>Taxa de acertos:</strong> 95%
        </p>
        <button>Nova partida</button>
        <p>
          <small>
            * Essa análise é ilustrativa e não possui base científica.
          </small>
        </p>
      </div>
    </div>
  );
};
