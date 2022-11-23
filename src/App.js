import styled from "styled-components"
import GlobalStyle from "./css/GlobalStyle"
import Jogo from "./Jogo"
import Letras from "./Letras"
import Chute from "./Chutes"

export default function App() {
  return ( 
    <ScreenContainer>
      <GlobalStyle/>
      <Jogo/>
      <Letras/>
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

