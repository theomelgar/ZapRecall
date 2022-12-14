import styled from "styled-components"
import Footer from "./Footer"
import FlashCards from "./FlashCards"
import logo from "../assets/img/logo.png"

import { useState } from "react"

export default function ZapMain(props) {
  const cores = {
    VERDE: "#2FBE34",
    AMARELO: "#FF922E",
    VERMELHO: "#FF3030",
    CINZA: "#333333"
  }
  const { card , museu} = props
  const [ deck, setDeck] = useState(museu)
  const [ deckNome, setDeckNome] = useState("Museu")
  const [respondido, setRespondido] = useState(false)
  const [selecionado, setSelecionado] = useState(false)
  const [virado, setVirado] = useState(false)
  const [concluidos, setConcluidos] = useState(0)
  const [inicio, setInicio] = useState(false)
  const [ima, setIma] = useState([])


  const conteudos = {
    respondido, setRespondido,
    selecionado, setSelecionado,
    virado, setVirado,
    concluidos, setConcluidos,
    ima, setIma
  }

  const conclusao = concluidos

  function selecionarReact(){
    setDeck(card) 
    setDeckNome("React")
  }
  function selecionarMuseu(){
    setDeck(museu) 
    setDeckNome("Museu")
  }

  if (inicio === false) {
    return (
      <ZapAntes>
        <LogoAntes>
          <img src={logo} alt="logo" />
          <h1>ZapRecall</h1>
        </LogoAntes>
        <Start data-test="start-btn" onClick={() => setInicio(true)}>Iniciar Recall!</Start>
        <Decks>
          <p>Escolha o deck: {deckNome}</p>
          <Deck>
            <button onClick={()=>selecionarReact()}>React</button>
            <button onClick={()=>selecionarMuseu()}>Museu</button>
          </Deck>
        </Decks>
      </ZapAntes>
    )
  }
  return (
    <Zap>
      <Logo>
        <img src={logo} alt="logo" />
        <h1>ZapRecall</h1>
      </Logo>
      <FlashCards cores={cores} card={deck} conteudos={conteudos}></FlashCards>
      <Footer card={deck} conclusao={conclusao} ima={ima}></Footer>
    </Zap>
  )
}
const Zap = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;

`
const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
  }
`
const LogoAntes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  img{
    width: 136px;
    height: 161px;
  }
  h1{
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;
  }
`

const ZapAntes = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  gap: 20px;
`
const Start = styled.button`
  width: 246px;
  height: 54px;
  background: #FFFFFF;
  border: 1px solid #D70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #D70900;
  &:hover{
    cursor: pointer;
  }
`
const Decks = styled.div`
  width: 246px;
  height: 80px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
  background-color: #D70900;
  border: 1px solid #D70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  p{
    text-align: center;
    color: azure;
  }
 
`
const Deck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    background-color: blanchedalmond;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 100px;
    height: 40px;
    margin-right: 4px;
    font-size: 20px;
    &:hover{
      cursor: pointer;
      transform: scale(109%);
    }
  }
`