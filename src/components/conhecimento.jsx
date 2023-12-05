import { styled } from "styled-components"
import { useState } from "react"
import Git from '../assets/git.png'
import Github from '../assets/github.png'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Js from '../assets/js.png'
import React from '../assets/react.png'
import Sass from '../assets/sass.png'
import Figma from '../assets/figma.png'
import StyledImg from '../assets/styled-components.png'

import {Fade} from 'react-awesome-reveal'

const ConhecimentoSection = styled.section `

    background-color: #ff8c002b;
    border-block: 3px solid #2125291e;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 1.5rem;
    color: #212529;
    text-align: center;

    article {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 5px;
        max-width: 65rem;
        width: 100%;
    }
`
const AreaCards = styled.section `

    padding-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px 0;

    img {
        width: 24px;
    }
    div {
        background-color: #fff;
        display: flex;
        padding: 1rem;
        gap: 0 10px;
        box-shadow: 0 0 5px gray;
        border-radius: 5px;
        max-width: 30rem;
        width: 100%;
        margin: auto;
    }
`


export default function Conhecimento() {

    const [cards, SetCards] = useState([
        {
            nome: 'HTML',
            imagem: Html
        },
        {
            nome: 'CSS',
            imagem: Css
        },
        {
            nome: 'Java Script',
            imagem: Js
        },
        {
            nome: 'React Js',
            imagem: React
        },
        {
            nome: 'Git',
            imagem: Git
        },
        {
            nome: 'GitHub',
            imagem: Github
        },
        {
            nome: 'Sass',
            imagem: Sass
        },
        {
            nome: 'Styled Components',
            imagem: StyledImg
        },
        {
            nome: 'Figma',
            imagem: Figma
        }
    ])
    return (
        <ConhecimentoSection className="conhecimento" id="conhecimento">
            <article>
                <Fade cascade direction="up" duration={500} damping={.25} triggerOnce fraction={.1}>
                <h2>
                    Tecnologias e Ferramentas
                </h2>
                <p>
                    Saiba todas as tecnologias e ferramentas nas quais eu tenho conhecimento!
                </p>
                    <AreaCards className='area-cards'>
                            {cards.map((e) => (
                                <div className="card">
                                    <img src={e.imagem} alt="" />   
                                    <h3>{e.nome}</h3>
                                </div>
                            ))}
                    </AreaCards>
                </Fade>
            </article>
        </ConhecimentoSection>
    )
}
