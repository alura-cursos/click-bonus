import Card from './componentes/Card'
import Container from './componentes/Container'
import Formulario from './componentes/Formulario'
import Logo from './componentes/Logo'

function App() {

  return (
    <Container>
      <Card>
        <div>
          <Logo />
          <h2>Preencha o formulário e participe do nosso Clube de Vantagens!</h2>
          <img src="/banner.png" alt="" />
        </div>
        <Formulario />
      </Card>
    </Container>
  )
}

export default App
