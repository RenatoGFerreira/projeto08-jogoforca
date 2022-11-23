import styled from "styled-components"
export default function Chutes() {
    return (
        <Tentativas>
            <span>Já sei a palavra! &#128540;</span>
            <input className="input-tentativas"/>
            <button className="clique-letras">Chutar</button>
        </Tentativas>
    )
}

const Tentativas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    .input-tentativas{
        width: 300px;
        height: 30px;
        color: blue;
        margin: 0 10px;
    }

    .clique-letras{
        min-width: 80px;
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
