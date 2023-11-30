import {createGlobalStyle, styled} from 'styled-components'
import Pt from '../assets/brasil.png'
import Eng from '../assets/estados-unidos.png'
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
                    <h2>
                        &lt; Rafael D-S <span>/</span>&gt;
                    </h2>
                </div>
                <nav className='navegacao'>
                    <ul>
                        <li>
                            Sobre
                        </li>
                        <li>
                            Conhecimento
                        </li>
                        <li>
                            Projetos
                        </li>
                        <li>
                            Contato
                        </li>
                    </ul>
                </nav>
                <div>
                    <figure>
                        <img src={Pt} alt="" />
                        <img src={Eng} alt="" />
                    </figure>
                    <a href="">
                        Currículo
                    </a>
                </div>
                <button onClick={() => SetMudar(!mudar)}>
                    ≡
                </button>
            </section>
        {mudar && <Navegacao/>}
        </HeaderEstilo>
    </>
    )
}
function Navegacao(fecharGaveta) {
    return (
        <nav className='gaveta-navegacao'>
            <ul>
                <li>
                    Sobre
                </li>
                <li>
                    Conhecimento
                </li>
                <li>
                    Projetos
                </li>
                <li>
                    Contato
                </li>
            </ul>
            <section>
                <figure>
                    <img src={Pt} alt="" />
                    <img src={Eng} alt="" />
                </figure>
                <a href="">
                    Curriculo
                </a>
            </section>
        </nav>
    )
}