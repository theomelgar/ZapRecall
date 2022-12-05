import styled from "styled-components"
import seta from "../assets/img/seta_play.png"
import virar from "../assets/img/seta_virar.png"
export default function Card(props) {
    const {question,answer} = props
    return (
        <>
            <CartaFechada>
                <p>
                    Pergunta
                </p>
                <img src={seta} alt="seta" />
            </CartaFechada>
            <CartaAberta>
                <p>{question}</p>
                <img src={virar} alt="virar"></img>
            </CartaAberta>
            <CartaAberta>
                <p>{answer}</p>
                <Botoes>
                    <Vermelho>Não lembrei</Vermelho>
                    <Amarelo>Quase não lembrei</Amarelo>
                    <Verde>Zap!</Verde>
                </Botoes>
            </CartaAberta>
        </>
    )
    
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
p {
     font-family: 'Recursive';
     font-style: normal;
     font-weight: 700;
     font-size: 16px;
     line-height: 19px;
     color: #333333;
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
`
const Amarelo = styled.button`
    background: #FF922E;
    border: 1px solid #FF922E; 
`
const Vermelho = styled.button`
    background: #FF3030;
    border: 1px solid #FF3030; 
`