import GLobalStyle from "./styles/GlobalStyle"
import Zap from "./components/ZapMain"
import cards from "./mock"
export default function App() {
  return (
    <>
    <GLobalStyle/>
    <Zap  cards={cards}/>
    </>
  );
}

