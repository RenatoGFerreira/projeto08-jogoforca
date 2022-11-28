import GlobalStyle from "./estiloGLobal/GlobalStyle"
import styled from "styled-components"
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
  const [palavraChave, setPalavraChave] = useState([])
  const [corPalavra, setCorPalavra] = useState("normal-palavra")
  const [jaSei, setJaSei] = useState("")


    function iniciaOJogo(){
      console.log("INICIO DO JOGO")
      setErrou(0)
      sortearPalavra()
      setDesativaInputs(false)
      setLetrasUsadas([])
      setCorPalavra("normal-palavra")
    }



    function letraEscolhida(letra){                  
        setLetrasUsadas([...letrasUsadas, letra])
      
        if(palavraDoJogo.includes(letra)){
          acertouLetra(letra)
        }else{
          errouLetra(letra)
        }
    }

    function acertouLetra(letrinha){                    
      const palavraDinamica = [...palavraEscondida]

      palavraChave.forEach((l, i)=>{
        if(palavraDoJogo[i] === letrinha){
          palavraDinamica[i] = l
        }
      })

      setPalavraEscondida(palavraDinamica)

      if(!palavraDinamica.includes(' _ ')){
        setCorPalavra("acertou-palavra")
        fimDeJogo()
      }

    }

    function errouLetra(letrinha){
      const totalErros = errou + 1
      setErrou(totalErros)

      if(totalErros === 6){
        setCorPalavra("errou-palavra")
        fimDeJogo()
      }
    }

    function sortearPalavra(){
        const numeroAleatorio = Math.floor(Math.random() * palavras.length)
        const palavraSelecionada = palavras[numeroAleatorio]
        const arrayPalavra = palavraSelecionada.split("")

        setPalavraChave(arrayPalavra)

        let tracos = []
        arrayPalavra.forEach(letra => (tracos.push(' _ ')))
        setPalavraEscondida(tracos)

        const palavraFormatada = palavraSelecionada.normalize("NFD").replace(/[^a-z\s]/g, "");
        setPalavraDoJogo(palavraFormatada)


        console.log(`Palavra Chave: ${palavraSelecionada}`)

    }

    function jaSeiPalavra(){
      let palavraChute = ""
      palavraChave.forEach((l)=> palavraChute += l)

      if(palavraChute === jaSei){
        setCorPalavra("acertou-palavra")
        fimDeJogo()
      }else{
        setErrou(6)
        setCorPalavra("errou-palavra")
        fimDeJogo()
      }
    }

    function fimDeJogo(){
      setPalavraEscondida(palavraChave)
      setDesativaInputs(true)
      setLetrasUsadas(letras)
      setJaSei("")
      console.log("FIM DE JOGO")
    }



  return ( 
    <ScreenContainer>
      <GlobalStyle/>
      <Jogo 
        errou={errou} 
        sortearPalavra={iniciaOJogo} 
        palavraEscondida={palavraEscondida} 
        corPalavra={corPalavra} 
        palavraDoJogo={palavraDoJogo}
      />
      <Letras 
        letraEscolhida={letraEscolhida} 
        letrasUsadas={letrasUsadas} 
      />
      <Chute 
        jaSei={jaSei} 
        jaSeiPalavra={jaSeiPalavra} 
        setJaSei={setJaSei} 
        desativaInputs={desativaInputs}
      />
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


  .normal-palavra{
    color: default;
    font-size: 30pt;
    font-weight: 600;
    text-transform: lowercase;
  }

  .acertou-palavra{
      color: green;
      font-size: 30pt;
      font-weight: 900;
      text-transform: uppercase;

  }

  .errou-palavra{
      color: red;
      font-size: 30pt;
      font-weight: 900;
      text-transform: uppercase;
  }
`

