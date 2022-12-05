import feliz from "../assets/img/party.png"
import sad from "../assets/img/sad.png"
import styled from "styled-components"

export default function Result(props) {
  const { conclusao, card, ima } = props
  const erro = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFrSURBVHgBrZWBccIwDEXlTJAR0gmaEZIJSDZINigT9JiAZoKWCcIG0A28ARmhnYBKjtS6HJYD+N8JX3z2ky1LwoCic1lWODRoK7ScjWTZdsbaY2i/UaDvaAXENaFt0MlHFI7gLQ4vcLve0ME6CEfwAYcK7tcRHdTykXng7YNgUsUcJ8PgDuYYp1JNDy0nf4W0cgc1nBmHwKKeR7pq7s1/obUwZ1PoxjWdvIOwJk6xmoECrrX8ZjUEf1YWjHizEkGWHUwMtjQP841CWlFYzqBLTmplgsEUylzbl0FcBBgv5kbQwW5fBn+xDJ4A5sfz1S7Y54roOwL+jTHa6eINNAeW4Htlwdp7PIpxQaPnoH0EDl4dSIxzdtCAHvedlP8JlrXXpaL6eJJs6SGtNvTj4FxtA6TRIH8cqfv5J4Ir+fhXRNzo773B4IMd79oq7u/UhguIa0LrrzUyo+3iNOzQKM+lwVHhUOFRCu+17vgD6dGNVn3jh2QAAAAASUVORK5CYII="

  if (conclusao >= card.length) {
    if (ima.includes(erro)) {
      return (
        <>
          <Footer data-test="footer">
            <p><img src={sad} alt={sad} />Putz...!</p>
            <p>Ainda faltam alguns...
              Mas não desanime!</p>
            {conclusao}/{card.length} CONCLUÍDOS
            <Resultado>
              {ima.map((i) => <img key={i} src={i} alt={i} />)}
            </Resultado>
          </Footer>
        </>
      )
    }
    else {
      return (
        <>
          <Footer data-test="footer">
            <p><img src={feliz} alt={feliz} />Parabéns!</p>
            <p>Você não esqueceu de nenhum flashcard!</p>
            {conclusao}/{card.length} CONCLUÍDOS
            <Resultado>
              {ima.map((i) => <img key={i} src={i} alt={i} />)}
            </Resultado>
          </Footer>
        </>)
    }
  }
  return (
    <Footer data-test="footer">
      {conclusao}/{card.length} CONCLUÍDOS
      <Resultado>
        {ima.map((i) => <img key={i} src={i} alt={i} />)}
      </Resultado>
    </Footer>
  )
}
const Footer = styled.div`
      width: 100%;
      min-height: 50px;
      background-color: #FFFFFF;
      position: fixed;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: 'Recursive';
      font-weight: 400;
      font-size: 18px;
      color: #333333;
      padding: 10px;
    
    
    & > .container-botoes {
      display: flex;
      width: 80%;
      justify-content: space-between;
      margin: 20px;
    }
`
const Resultado = styled.div`
  display: flex;
`