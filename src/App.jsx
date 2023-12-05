import Header from "./components/header/header"
import Main from "./components/main/main.jsx"
import Sobre from "./components/sobre/sobre"
import Conhecimento from "./components/conhecimento/conhecimento.jsx"
import Projetos from "./components/projetos/projetos.jsx"
import Footer from "./components/footer/footer.jsx"

import { GlobalStyle } from "./components/globalStyle"

function App() {

  return (
    <>
    <GlobalStyle />
    
    <Header/>
    <Main/>
    <Sobre/>    
    <Conhecimento/>
    <Projetos/>
    <Footer/>
    </>
  )
}

export default App
