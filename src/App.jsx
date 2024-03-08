import { styled } from "styled-components"
import Card from './componentes/Card'
import Container from './componentes/Container'
import Formulario from './componentes/Formulario'
import Logo from './componentes/Logo'

const StyledContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

const StyledTitulo = styled.h2`
    color: #144480;
    font-family: Inter;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.25rem;
`

const StyledSpan = styled.span`
    font-family: Inter;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.25rem;
`

function App() {

  return (
    <Container>
      <Card>
        <StyledContainer>
            <Logo />
          <StyledTitulo>Preencha o formulário e participe do nosso <StyledSpan>Clube de Vantagens!</StyledSpan></StyledTitulo>
          <img src="/banner.png" alt="Desenho de mulher com os braços abertos, com expressão alegre, olhando para caixas de presentes coloridas na sua frente." />
        </StyledContainer>

        <Formulario />
      </Card>
    </Container>
  )
}

export default App
