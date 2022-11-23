import styled from "styled-components"
import Jogo from "./Jogo"

function App() {
  return (
    <ScreenContainer>
      <Jogo/>
    </ScreenContainer>
  );
}

export default App;


const ScreenContainer = styled.div`


  html, body{
      font-family: Arial, Helvetica, sans-serif;
      box-sizing: border-box;
  }
  width: 50vw;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid red;
`

