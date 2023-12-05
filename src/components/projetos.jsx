import { styled } from 'styled-components'
import { useState } from 'react'
import Naruto from '../assets/Projetos/naruto.png'
import Calculadora from '../assets/Projetos/calculadora.png'
import Rpg from '../assets/Projetos/rpg.png'
import Contador from '../assets/Projetos/contador.png'
import Fantastika from '../assets/Projetos/fantastika.png'
import Blogames from '../assets/Projetos/blogames.png'
import Link from '../assets/external-link.png'

import {Fade} from 'react-awesome-reveal'

const ProjetosSection = styled.section `

    padding: 4rem 1.5rem;
    text-align: center;

    article {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`
const AreaCards = styled.div `

    padding-top: 3rem;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 2rem 0;

    img {
        height: 16rem;
        opacity: .4;
        border-bottom: none;
        transition: opacity .3s ease, transform .3s ease;
        transform: scale(1.3);

        &:hover {
            opacity: .9;
            transform: scale(1.1);
        }
    }

`

const CardProjetos = styled.div `

    max-width: 28rem;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 3px black;
    
    figure {
        display: flex;
        justify-content: center;
        background-color: black;
        border-radius: 5px 5px 0 0;
        overflow: hidden;
        cursor: pointer;
        position: relative;
    }
    figure:after {
        content: '';
        width: 2rem;
        height: 2rem;
        background-color: #FF8c00;
        box-shadow: 0 0 5px #212529;
        border-radius: 50%;
        background-image: url(${Link});
        background-size: .75rem;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        top: .75rem;
        right: .75rem;
      }
`

const CardAreaTexto = styled.div `

    padding: .75rem 1rem;
    text-align: left;
    background-color: #212529;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    * {
        color: #fff;
    }
    div {
        display: flex;
        gap: 0 10px;
        margin-top: .5rem;
    }
    a {
        border: none;
        background-color: #FF8c00;
        padding: .5rem 1rem;
        border-radius: 50px;
        font-weight: 600;
        cursor: pointer;

        &:nth-child(1) {
            background-color: #fff;
            color: #212529;
        }
    }
`

const Tecnologias = styled.figcaption `

    position: absolute;
    background-color: #212529;
    color: #fff;
    border-bottom: 2px solid #ffffff21;
    bottom: 0;
    font-weight: bold;
    left: 0;
    right: 0;
    bottom: -20%;
    padding: .5rem;
    transition: bottom .2s ease;
    letter-spacing: 1px;

    .imagem-projeto:hover & {
        bottom: 0;
    }

    @media(max-width: 935px) {
        bottom: 0;
        font-size: .9rem;
    }
`

export default function Projetos() {
    
    const [projetos, SetProjetos] = useState([
        {
            nome: 'Naruto API',
            imagem: Naruto,
            alt: 'Site usando a API do Naruto',
            github: 'https://github.com/RafaelD-S/Naruto-API',
            deploy: 'https://naruto-api-alpha.vercel.app',
            tecnologias: 'React | Sass | Axios | React-Router-Dom'
        },
        {
            nome: 'Calculadora React',
            imagem: Calculadora,
            alt: 'Site de uma calculadora utilizando React',
            github: 'https://github.com/RafaelD-S/Calculadora-React',
            deploy: 'https://calculadora-simples-nu.vercel.app',
            tecnologias: 'React | Styled-Components'
        },
        {
            nome: 'Projeto RPG',
            imagem: Rpg,
            alt: 'Site de RPG feito em html, css e js',
            github: 'https://github.com/RafaelD-S/RPG-Project',
            deploy: 'https://rafaeld-s.github.io/RPG-Project/',
            tecnologias: 'HTML | CSS | JavaScript'
        },
        {
            nome: 'Contador Multicor',
            imagem: Contador,
            alt: 'Contador de 1 a 10 feito em React',
            github: 'https://github.com/RafaelD-S/Contador-Multicor',
            deploy: 'https://contador-multicor.vercel.app',
            tecnologias: 'React | CSS'
        },
        {
            nome: 'Desafio Fantastika',
            imagem: Fantastika,
            alt: 'Site desafio do curso front-end Vai na Web',
            github: 'https://github.com/RafaelD-S/Fantastika',
            deploy: 'https://rafaeld-s.github.io/Fantastika/',
            tecnologias: 'HTML | CSS'
        },
        {
            nome: 'Blogames',
            imagem: Blogames,
            alt: 'Site parte dos templates desenvolvidos pela Codêlandia',
            github: 'https://github.com/RafaelD-S/Blogames',
            deploy: 'https://rafaeld-s.github.io/Blogames/',
            tecnologias: 'HTML | CSS'
        },
    ])
    return (
        <ProjetosSection id='projetos'>
            <article>
            <h2>
                Projetos
            </h2>
            <p>
                Veja um pouco dos meus projetos e as tecnologias em que usei neles.
            </p>
            <Fade duration={1000} triggerOnce>
            <AreaCards>
                {projetos.map((e) => (
                    <CardProjetos>
                        <a href={e.deploy} target='blank_'>
                            <figure className='imagem-projeto'>    
                                <img src={e.imagem} alt={e.alt} />
                            <Tecnologias>
                                {e.tecnologias}
                            </Tecnologias>
                            </figure>
                        </a>
                        <CardAreaTexto>
                            <h3>
                                {e.nome}
                            </h3>
                            <div>
                                <a href={e.github} target='blank_'>
                                    Repositório
                                </a>
                                <a href={e.deploy} target='blank_'>
                                    Deploy
                                </a>
                            </div>
                        </CardAreaTexto>
                    </CardProjetos>
                ))}
            </AreaCards>
            </Fade>
            </article>
        </ProjetosSection>
    )
}