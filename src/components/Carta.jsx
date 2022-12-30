export const Carta = ({ id, idDoPar, imagem }) => {
  return (
    <div id={id} className="carta">
      <div className="carta__conteudo">
        <div className="carta__frente" />
        <div className="carta__costas">
          <img alt={idDoPar} width={300} src={imagem} />
        </div>
      </div>
    </div>
  );
};
