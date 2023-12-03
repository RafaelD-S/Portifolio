import {createGlobalStyle, styled} from 'styled-components'
import Pt from '../assets/brasil.png'
import Eng from '../assets/estados-unidos.png'
import GitHub from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'
import Instagram from '../assets/instagram.png'
import { useState } from 'react'

const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Raleway, sans-serif;
        color: #212529;
    }
    body {
        background-color: #fff;
    }
    a {
        text-decoration: none;
    }
`
const HeaderEstilo = styled.header `

`

export default function Header() {

    const [mudar, SetMudar] = useState(false)
    return (
        <>
        <GlobalStyle/>
        <HeaderEstilo>
            <section className='header-container'>
                <div>
                    <h2 onClick={() => window.scrollTo({top:0})}>
                        &lt; Rafael D-S <span>/</span>&gt;
                    </h2>
                </div>
                <nav className='navegacao'>
                    <ul>
                        <a href="#sobre">
                            <li>
                                Sobre
                            </li>
                        </a>
                        <a href="#conhecimento">
                            <li>
                                Conhecimento
                            </li>
                        </a>
                        <a href="#projetos">
                            <li>
                                Projetos
                            </li>
                        </a>
                        <a href="#contato">
                            <li>
                                Contato
                            </li>
                        </a>
                    </ul>
                </nav>
                <div>
                    <figure>
                        <img src={Pt} alt="português" />
                        <img src={Eng} alt="english" />
                    </figure>
                    <a href="../public/CURRÍCULO_RAFAEL_DANTAS_SILVA.pdf" className='curriculo' target='blank_'>
                        Currículo
                    </a>
                </div>
                <button onClick={() => SetMudar(!mudar) }>
                    ≡
                </button>
            </section>
        {mudar && <Navegacao SetMudar={SetMudar} mudar={mudar}/>}
        </HeaderEstilo>
    </>
    )
}
function Navegacao({SetMudar, mudar}) {

    // onClick={() => SetMudar(!mudar)}
    return (
        <nav className='gaveta-navegacao'>
                    <ul>
                        <a href="#sobre" onClick={() => SetMudar(!mudar)}>
                            <li>
                                Sobre
                            </li>
                        </a>
                        <a href="#conhecimento" onClick={() => SetMudar(!mudar)}>
                            <li>
                                Conhecimento
                            </li>
                        </a>
                        <a href="#projetos" onClick={() => SetMudar(!mudar)}>
                            <li>
                                Projetos
                            </li>
                        </a>
                        <a href="#contato" onClick={() => SetMudar(!mudar)}>
                            <li>
                                Contato
                            </li>
                        </a>
                    </ul>
            <section>
                <figure>
                        <img src={Pt} alt="português" />
                        <img src={Eng} alt="english" />
                </figure>
                <a a href="../../public/CURRÍCULO_RAFAEL_DANTAS_SILVA.pdf" className='curriculo' target='blank_'>
                    Curriculo
                </a>
                <figure className='separar'>
                    <a href="https://github.com/RafaelD-S" target='_blank'>
                        <img src={GitHub} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/rafaeld-s/" target='_blank'>
                        <img src={Linkedin} alt="linkedin" />
                    </a>
                    <a href="https://www.instagram.com/skellybur/" target='blank_'>
                        <img src={Instagram} alt="instagram" />
                    </a>
                </figure>
            </section>
        </nav>
    )
}