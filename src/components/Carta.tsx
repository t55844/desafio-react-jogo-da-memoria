import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./Context";
interface CartaProps {
  cartasInfo: {
    id: number,
    idDoPar: number,
    imagem: string
  },
  virarCarta: (id) => {}
}

export const Carta = (props: CartaProps) => {
  const { id, idDoPar, imagem } = props.cartasInfo

  const { guardaIdCartaSelecionada, cartasSelecionadas, cartasCertas } = useContext(MyContext)
  const [classeVirar, setClasseVirar] = useState<'' | 'virar'>('')
  const [buttonDisable, setButtonDisable] = useState<boolean>(false)

  useEffect(() => {

    const cartaEstaCerta = cartasCertas.filter(c => c.idDoPar === idDoPar)
    if (cartaEstaCerta.length == 0) {

      const cartaParaVirar = cartasSelecionadas.length > 0 ?
        cartasSelecionadas.filter(cart => cart.id === id) : []

      const classe = cartaParaVirar.length > 0 ? cartaParaVirar[0].classe : ''

      setClasseVirar(classe)
    }
  }, [cartasSelecionadas])


  function clicarNaCarta(e) {
    setButtonDisable(true)

    const cartaEstaCerta = cartasCertas.filter(c => c.idDoPar === idDoPar)
    if (cartaEstaCerta.length == 0) guardaIdCartaSelecionada(id, idDoPar)
    setTimeout(() => {
      setButtonDisable(false)
    }, 400)
  }

  return (
    <button disabled={buttonDisable} id={id} onClick={clicarNaCarta} className={`carta ${classeVirar}`}>
      <div className="carta__conteudo">
        <div className="carta__frente" />
        <div className="carta__costas">
          <img alt={idDoPar} width={300} src={imagem} />
        </div>
      </div>
    </button>
  );
};
