import styled from "styled-components"
import Card from "./Card"

export default function FlashCards(props){
  const {card,conteudos,
    cores} = props
    
    return(
    <Cards>
    {card.map((card,index) => <Card key={index} index={index+1} question={card.question} answer={card.answer} 
    conteudos={conteudos}
    cores={cores}/>)}
    </Cards>
    )
}
const Cards = styled.div`
  
  `