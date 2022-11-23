import styled from "styled-components"
import forca from "./assets/forca0.png"

export default function Jogo() {

    return (
        <Cenario>
            <div>
                <img src={forca} className="img-forca" alt="imagem do jogo"/>
            </div>
            <div className="informacoes">
                <div>
                    <button className="palavra-sorteada">Escolher Palavra</button>
                </div>
                <div className="palavra-escondida">
                    <h1>PALAVRA</h1>
                </div>

            </div>
        </Cenario>
    )
}

const Cenario = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;

    .img-forca{
        height: 50vh;
    }

    .informacoes{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    }

    .palavra-sorteada{
        background-color: rgb(36, 169, 36);
        color: #fff;
        width: 200px;
        height: 35px;
        border-radius: 5px;
        margin: 20px 0;
    }

    .palavra-sorteada:hover{
        background-color: rgb(27, 130, 27);
    }

    .palavra-escondida{
        margin: 50px 10px;
        font-size: 20pt;
    }
`