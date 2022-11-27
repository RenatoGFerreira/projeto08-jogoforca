import styled from "styled-components"
import GlobalStyle from "./css/GlobalStyle"
import Jogo from "./Jogo"
import Letras from "./Letras"
import Chute from "./Chutes"
import { useState } from "react"
import palavras from "./components/palavras"

export default function App() {

  const [errou, setErrou] = useState(0)
  const [letrasUsadas, setLetrasUsadas] = useState([])
  const [palavraEscondida, setPalavraEscondida] = useState([]) 


    function letraEscolhida(letra){
        setLetrasUsadas([...letrasUsadas, letra])
    }
    
    function sortearPalavra(){
        const numeroAleatorio = Math.floor(Math.random() * palavras.length)
        const palavraSelecionada = palavras[numeroAleatorio]
        const arrayPalavra = palavraSelecionada.split("")

        let tracos = []
        arrayPalavra.forEach(letra => (tracos.push(' _ ')))
        setPalavraEscondida(tracos)
        console.log(palavraEscondida)
        

        console.log(palavraSelecionada)
        console.log(arrayPalavra)

    }

  return ( 
    <ScreenContainer>
      <GlobalStyle/>
      <Jogo errou={errou} sortearPalavra={sortearPalavra} palavraEscondida={palavraEscondida}/>
      <Letras letraEscolhida={letraEscolhida} letrasUsadas={letrasUsadas}/>
      <Chute/>
    </ScreenContainer>
  );
}



const ScreenContainer = styled.div`
  html, body{
      font-family: Arial, Helvetica, sans-serif;
      box-sizing: border-box;
  }
  width: 50vw;
  height: 100vh;
  margin: 0 auto;
`

