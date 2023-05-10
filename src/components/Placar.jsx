import { useContext } from "react"
import { MyContext } from "./Context"

export const Placar = () => {

  const { pontos, cartasViradas } = useContext(MyContext)

  return (
    <div className="placar">
      <Pontos titulo="Pontos" valor={pontos} />
      <Pontos titulo="Cartas viradas" valor={cartasViradas} />
    </div>
  )
}

const Pontos = ({ titulo, valor }) => {
  return (
    <div className="pontos">
      <strong className="pontos__titulo">{titulo}: </strong>
      <span className="pontos__valor">{valor}</span>
    </div>
  )
}
