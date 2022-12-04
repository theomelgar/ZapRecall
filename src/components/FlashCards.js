import styled from "styled-components"
import Card from "./Card"
export default function FlashCards(props){
  const {card} = props
    return(
    <Cards>
    {card.map((card) => <Card key={card.question} question={card.question} answer={card.answer}/>)}
    </Cards>
    )
}
const Cards = styled.div`
  
  `