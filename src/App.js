import GLobalStyle from "./styles/GlobalStyle"
import Zap from "./components/ZapMain"
import card from "./mock"
export default function App() {
  return (
    <>
    <GLobalStyle/>
    <Zap card={card}/>
    </>
  );
}

