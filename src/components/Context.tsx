import React, { createContext, useEffect, useState } from 'react';




// Define the initial context state
interface ContextState {
    guardaIdCartaSelecionada(id: number, idDoPar: number): Boolean | { id: number, idDoPar: number }[],
    cartasSelecionadas: { id: number, idDoPar: number, classe: '' | 'virar' }[],
    pontos: number,
    cartasViradas: number,
    cartasCertas: { id: number, idDoPar: number, classe: 'virar' }[],
    resultado: number,
    limpaDados(): void,
}

// Create the context
export const MyContext = createContext<ContextState | undefined>(undefined);

// Create a provider component to wrap your app
export const MyContextProvider: React.FC = ({ children }) => {
    const [cartasSelecionadas, setCartasSelecionadas] = useState<{ id: number, idDoPar: number, classe: '' | 'virar' }[]>([])
    const [pontos, setPontos] = useState<number>(0)
    const [cartasViradas, setCartasViradas] = useState<number>(0)
    const [cartasCertas, setCartasCertas] = useState<{ id: number, idDoPar: number, classe: 'virar' }[]>([])
    const [resultado, setResultado] = useState<number>(0)

    function limpaDados() {
        setCartasCertas([])
        setCartasSelecionadas([])
        setCartasViradas(0)
        setPontos(0)
        setResultado(0)
    }

    function guardaIdCartaSelecionada(id: number, idDoPar: number) {
        if (cartasSelecionadas.length >= 2) {
            setCartasSelecionadas([])
            return false
        } else {
            const novaCarta = [...cartasSelecionadas, { id, idDoPar, classe: 'virar' }]
            setCartasSelecionadas(novaCarta)
            return true
        }
    }

    useEffect(() => {
        if (cartasSelecionadas.length > 1 && cartasSelecionadas[0].idDoPar === cartasSelecionadas[1].idDoPar) {

            const novosPontos = pontos + 25
            setPontos(novosPontos)

            const novasCartasCertas = [...cartasCertas, ...cartasSelecionadas]
            setCartasCertas(novasCartasCertas)
            setTimeout(() => setCartasSelecionadas([]), 1200)
        }
        else if (cartasSelecionadas.length == 2) {
            const novosPontos = pontos - 10
            setPontos(novosPontos)
            setTimeout(() => setCartasSelecionadas([]), 1200)

        }
        else if (cartasSelecionadas.length > 0) {

            const novasCartasViradas = cartasViradas + 1
            setCartasViradas(novasCartasViradas)
        }

    }, [cartasSelecionadas])

    useEffect(() => {
        if (cartasCertas.length == 12) {
            setResultado(pontos)
        }
    }, [cartasCertas])

    const contextValue: ContextState = {
        guardaIdCartaSelecionada,
        cartasSelecionadas,
        pontos,
        cartasViradas,
        cartasCertas,
        resultado,
        limpaDados,
    };

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
};
