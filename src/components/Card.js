import styled from "styled-components"
import seta from "../assets/img/seta_play.png"
import virar from "../assets/img/seta_virar.png"
import correto from "../assets/img/icone_certo.png"
import errado from "../assets/img/icone_erro.png"
import quase from "../assets/img/icone_quase.png"

import { useState } from "react"

export default function Card(props) {
    const { question, answer, index, conteudos,
        cores } = props
    const { concluidos, setConcluidos, ima, setIma } = conteudos

    const [traco, setTraco] = useState("none")
    const [selecionado, setSelecionado] = useState(false)
    const [virado, setVirado] = useState(false)
    const [respondido, setRespondido] = useState(false)
    const [resultado, setResultado] = useState(cores.CINZA)
    const [icon, setIcon] = useState(seta)

    function fechar() {
        setRespondido(true)
    }
    function Verm() {
        setResultado(cores.VERMELHO)
        setConcluidos(concluidos + 1)
        setTraco("line-through")
        fechar()
        setIcon(errado)
        setIma([...ima, errado])
    }
    function Verd() {
        setResultado(cores.VERDE)
        setConcluidos(concluidos + 1)
        setTraco("line-through")
        fechar()
        setIcon(correto)
        setIma([...ima, correto])
    }
    function Amar() {
        setResultado(cores.AMARELO)
        setConcluidos(concluidos + 1)
        setTraco("line-through")
        fechar()
        setIcon(quase)
        setIma([...ima, quase])
    }
    if (selecionado) {
        if (virado) {
            if (respondido) {
                return (
                    <CartaFechada color={resultado} feito={traco}>
                        <p>
                            Pergunta {index}
                        </p>
                        <img src={icon} alt="icon" />
                    </CartaFechada>
                )
            }
            else {
                return (
                    <CartaAberta>
                        <p>{answer}</p>
                        <Botoes>
                            <Vermelho
                                onClick={Verm}>Não lembrei</Vermelho>
                            <Amarelo onClick={Amar}>Quase não lembrei</Amarelo>
                            <Verde onClick={Verd}>Zap!</Verde>
                        </Botoes>
                    </CartaAberta>
                )
            }
        }
        else {
            return (
                <CartaAberta>
                    <p>{question}</p>
                    <img src={virar} alt="virar" onClick={() => setVirado(true)}></img>
                </CartaAberta>
            )
        }

    }



    else {
        return (
            <>
                <CartaFechada color={resultado} feito={traco}>
                    <p>
                        Pergunta {index}
                    </p>
                    <img src={seta} alt="seta" onClick={() => setSelecionado(true)} />
                </CartaFechada>
            </>
        )
    }

}

const CartaFechada = styled.div`
     width: 300px;
     height: 35px;
     background-color: #FFFFFF;
     margin: 12px;
     padding: 15px;
     box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
     border-radius: 5px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     
img{cursor: pointer; }
p {
     font-family: 'Recursive';
     font-style: normal;
     font-weight: 700;
     font-size: 16px;
     line-height: 19px;
     color: ${resultado => resultado.color};
     text-decoration: ${traco => traco.feito};
   }
`
const Botoes = styled.div`
    display: flex;
    flex-direction: wrap;
    gap: 7px;
`
const CartaAberta = styled.div`
     width: 300px;
     margin: 12px;
     padding: 15px;
     min-height: 100px;
     background: #FFFFD5;
     box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
     border-radius: 5px;
     font-family: 'Recursive';
     font-style: normal;
     font-weight: 400;
     font-size: 18px;
     line-height: 22px;
     color: #333333;
     position: relative;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
img{
     position: absolute;
     bottom: 10px;
     right: 10px;
     cursor: pointer;   
   }
button {
    width: 90px;
    height: 37.17px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    border-radius: 5px;
    padding:5px;
  }
`
const Verde = styled.button`
    background: #2FBE34;
    border: 1px solid #2FBE34; 
    &:hover{
        cursor: pointer; 
    }
`
const Amarelo = styled.button`
    background: #FF922E;
    border: 1px solid #FF922E; 
    &:hover{
        cursor: pointer; 
    }
`
const Vermelho = styled.button`
    background: #FF3030;
    border: 1px solid #FF3030; 
    &:hover{
        cursor: pointer; 
    }
`