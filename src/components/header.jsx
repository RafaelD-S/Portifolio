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
    html {
        scroll-behavior: smooth;
    }
    body {
        background-color: #fff;
    }
    a {
        text-decoration: none;
    }
    h2 {
        font-size: 1.85rem;
    }

    @media(max-width: 935px) {
        h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 1.25rem;
          }
          p, h3{
            font-size: 1rem;
          }
    }
`
const HeaderEstilo = styled.header `
    background-color: #fff;
    margin: 1rem;
    border-radius: 28px;
    position: fixed;
    padding: 0 1.75rem;
    box-shadow: 0 0 3px #212529;
    left: 0;
    right: 0;
    z-index: +2;
    font-weight: 600;

    section {
        height: 11vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h2 {
        cursor: pointer;
    }
    span {
        color: rgb(255, 140, 0);
    }


    @media(max-width: 935px) {
        position: sticky;
        top: 0;
        margin: 0 0;
        padding: 0 1.5rem;
        border-radius: 0;
    }
`
const Nav = styled.nav `

    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding: .65rem 1.25rem;
        cursor: pointer;
        transition: background-color .1s ease, border-radius 260ms ease;

        &:hover {
            background-color: #ff8c002b;
            border-radius: 50px;
        }
    }

    @media(max-width: 935px) {
        display: none;
    }
`

const AreaCurriculo = styled.article `
    justify-content: end;
    display: flex;
    align-items: center;

    figure {
        display: flex;
        width: 5rem;
        justify-content: space-around;
        padding-right: .5rem;
    }
    
    @media(max-width: 935px) {
        display: none;
    }
`
const Curriculo = styled.a `

    background-color: #FF8c00;
    border-radius: 50px;
    color: #fff;
    padding: .65rem 1.25rem;
    font-weight: 600;
    letter-spacing: 1px;
`

const Icone = styled.img `
    cursor: pointer;

    &:hover {
    transform: translate(0, -1px);
    }
`
const MenuHamburger = styled.button `
    background-color: transparent;
    border: none;
    font-size: 2rem;
    display: none;
    width: 2rem;

    @media(max-width: 935px) {
        display: block;
        color: #212529;
        cursor: pointer;
    }
`

const GavetaNavegacao = styled.nav `

    height: 89vh;

    ul {
        height: 35vh;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border-block: 1px solid #2125291e;
        list-style: none;
    }
    section {
        display: flex;
        height: 40vh;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        gap: 15px 0;
    }
    figure {
        display: flex;
        gap: 0 15px;
    }
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
                <Nav className='navegacao'>
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
                </Nav>
                <AreaCurriculo>
                    <figure>
                        <Icone src={Pt} alt="português" />
                        <Icone src={Eng} alt="english" />
                    </figure>
                    <Curriculo href="../public/CURRÍCULO_RAFAEL_DANTAS_SILVA.pdf" className='curriculo' target='blank_'>
                        Currículo
                    </Curriculo>
                </AreaCurriculo>
                <MenuHamburger onClick={() => SetMudar(!mudar) }>
                    ≡
                </MenuHamburger>
            </section>
        {mudar && <Navegacao SetMudar={SetMudar} mudar={mudar}/>}
        </HeaderEstilo>
    </>
    )
}
function Navegacao({SetMudar, mudar}) {

    // onClick={() => SetMudar(!mudar)}
    return (
        <GavetaNavegacao>
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
                        <Icone src={Pt} alt="português" />
                        <Icone src={Eng} alt="english" />
                </figure>
                <Curriculo a href="../../public/CURRÍCULO_RAFAEL_DANTAS_SILVA.pdf" className='curriculo' target='blank_'>
                    Curriculo
                </Curriculo>
                <figure>
                    <a href="https://github.com/RafaelD-S" target='_blank'>
                        <Icone src={GitHub} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/rafaeld-s/" target='_blank'>
                        <Icone src={Linkedin} alt="linkedin" />
                    </a>
                    <a href="https://www.instagram.com/skellybur/" target='blank_'>
                        <Icone src={Instagram} alt="instagram" />
                    </a>
                </figure>
            </section>
        </GavetaNavegacao>
    )
}