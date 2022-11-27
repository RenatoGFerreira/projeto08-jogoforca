import styled from "styled-components"
import GlobalStyle from "./css/GlobalStyle"
import Jogo from "./Jogo"
import Letras from "./Letras"
import letras from "./components/letras"
import Chute from "./Chutes"
import { useState } from "react"
import palavras from "./components/palavras"

export default function App() {

  const [desativaInputs, setDesativaInputs] = useState(true)
  const [errou, setErrou] = useState(0)
  const [letrasUsadas, setLetrasUsadas] = useState(letras)
  const [palavraEscondida, setPalavraEscondida] = useState([]) 
  const [palavraDoJogo, setPalavraDoJogo] = useState("")


    function iniciaOJogo(){
      sortearPalavra()
      setDesativaInputs(false)
      setLetrasUsadas([])

      console.log("Iniciou o JOGO")
    }



    function letraEscolhida(letra){                                 //<------ Letra Escolhida
        setLetrasUsadas([...letrasUsadas, letra])
      
        if(palavraDoJogo.includes(letra)){
          acertouLetra(letra)
        }else{
          errouLetra(letra)
        }
    }

    function acertouLetra(letrinha){                              //<----- Se acertar letra
      const palavraDinamica = [...palavraEscondida]
      console.log( + "acertoumizera")
  

    }



    function errouLetra(letrinha){                                  //<----- Se errar a letra
      const totalErros = errou + 1
      setErrou(totalErros)
      console.log("erro mizeravel")

      if(totalErros === 6){
        fimDeJogo()
      }
    }


    
    function sortearPalavra(){
        const numeroAleatorio = Math.floor(Math.random() * palavras.length)
        const palavraSelecionada = palavras[numeroAleatorio]
        const arrayPalavra = palavraSelecionada.split("")

        let tracos = []
        arrayPalavra.forEach(letra => (tracos.push(' _ ')))
        setPalavraEscondida(tracos)
        setPalavraDoJogo(palavraSelecionada)

        console.log(`palavraEscondida: ${palavraEscondida}`)
        console.log(`palavraSelecionada: ${palavraSelecionada}`)
        console.log(`arrayPalavra: ${arrayPalavra}`)
        console.log(`palavraDoJogo: ${palavraDoJogo}`)

    }

    function fimDeJogo(){
      setDesativaInputs(true)
      setLetrasUsadas(letras)
      console.log("FIM DE JOGO")
    }

  return ( 
    <ScreenContainer>
      <GlobalStyle/>
      <Jogo errou={errou} sortearPalavra={iniciaOJogo} palavraEscondida={palavraEscondida}/>
      <Letras letraEscolhida={letraEscolhida} letrasUsadas={letrasUsadas} />
      <Chute desativaInputs={desativaInputs}/>
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

