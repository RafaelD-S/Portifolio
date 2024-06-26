import { useState } from "react"
import Git from '../../assets/icons/git.png'
import Github from '../../assets/icons/github.png'
import Html from '../../assets/icons/html.png'
import Css from '../../assets/icons/css.png'
import Js from '../../assets/icons/js.png'
import React from '../../assets/icons/react.png'
import Sass from '../../assets/icons/sass.png'
import Figma from '../../assets/icons/figma.png'
import StyledImg from '../../assets/icons/styled-components.png'

import {Fade} from 'react-awesome-reveal'

import * as S from './conhecimentoStyle'

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
        <S.ConhecimentoSection className="conhecimento" id="conhecimento">
            <article>
                <Fade cascade direction="up" duration={500} damping={.25} triggerOnce fraction={.1}>
                <h2>
                    Tecnologias e Ferramentas
                </h2>
                <p>
                    Saiba todas as tecnologias e ferramentas nas quais eu tenho conhecimento!
                </p>
                    <S.AreaCards className='area-cards'>
                            {cards.map((e) => (
                                <div className="card">
                                    <img src={e.imagem} alt="" />   
                                    <h3>{e.nome}</h3>
                                </div>
                            ))}
                    </S.AreaCards>
                </Fade>
            </article>
        </S.ConhecimentoSection>
    )
}
