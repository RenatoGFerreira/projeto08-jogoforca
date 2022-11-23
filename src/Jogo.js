import styled from "styled-components"

export default function Jogo() {

    return (
        <Cenario>
            <div>
                <img src="/assets/forca0.png" alt="imagem do jogo"/>
            </div>
        </Cenario>
    )
}

const Cenario = styled.div`
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;

`