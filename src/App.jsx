import { MyContext, MyContextProvider } from "./components/Context"
import { JogoDaMemoria } from "./components/JogoDaMemoria"

function App() {
  return (
    <div className="App">
      <MyContextProvider >
        <JogoDaMemoria />
      </MyContextProvider>
    </div>
  )
}

export default App
