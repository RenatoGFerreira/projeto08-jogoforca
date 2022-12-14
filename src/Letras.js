import GlobalStyle from "./estiloGLobal/GlobalStyle"
import styled from "styled-components"
import letras from "./components/letras"

export default function Letras(props){
    return(
        <BotoesLetras>
            <GlobalStyle/>
            {letras.map((letra, index)=>
            <button 
                onClick={() => props.letraEscolhida(letra)}
                className="clique-letras" 
                key={index}
                disabled={props.letrasUsadas.includes(letra)}
                data-test="letter"
            >
            {letra.toUpperCase()}</button>)}

        </BotoesLetras>
    )
}

const BotoesLetras = styled.div`
    width: 80%;
    margin: 5px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: space-around;

    .clique-letras{
        min-width: 40px;
        height: 40px;
        background-color:aqua;
        color: blue;
        margin: 3px;
        font-weight: 400;
        border-radius: 3px;
        cursor: pointer;
    }

    .clique-letras:disabled{
        min-width: 40px;
        height: 40px;
        background-color:rgb(0, 171, 171);
        color: rgb(0, 0, 172);
        margin: 3px;
        font-weight: 400;
        border-radius: 3px;
        cursor: default;
    }

`