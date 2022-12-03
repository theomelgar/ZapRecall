import styled from "styled-components"
import Footer from "./Footer"
import FlashCards from "./FlashCards"
import logo from "../assets/img/logo.png"

export default function ZapMain(){
    return(
        <Zap>
            <Logo>
              <img src={logo}/>
              <h1>ZapRecall</h1>
            </Logo>
        <FlashCards></FlashCards>
        <Footer></Footer>
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