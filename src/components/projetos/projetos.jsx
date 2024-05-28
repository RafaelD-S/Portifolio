import { useState } from 'react'
import Naruto from '../../assets/Projetos/naruto.png'
import Calculadora from '../../assets/Projetos/calculadora.png'
import Rpg from '../../assets/Projetos/rpg.png'
import gamerHub from '../../assets/Projetos/gamerHub.png'
import Ecommerce from '../../assets/Projetos/e-commerce.png'
import NewsHomepage from '../../assets/Projetos/news-homepage.png'

import {Fade} from 'react-awesome-reveal'

import * as S from './projetosStyle'

export default function Projetos() {
    
    const [projetos, SetProjetos] = useState([
        {
            nome: 'Naruto API',
            imagem: Naruto,
            alt: 'Site usando a API do Naruto',
            github: 'https://github.com/RafaelD-S/Naruto-API',
            deploy: 'https://naruto-api-alpha.vercel.app',
            tecnologias: 'React Js | Sass | Axios | React-Router-Dom'
        },
        {
            nome: 'Calculadora Game',
            imagem: Calculadora,
            alt: 'Site de uma calculadora utilizando React',
            github: 'https://github.com/RafaelD-S/Calculadora-React',
            deploy: 'https://calculadora-simples-nu.vercel.app',
            tecnologias: 'React Js | Styled-Components'
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
            nome: 'GamerHubD-S',
            imagem: gamerHub,
            alt: 'Site de jogos simples em JavaScript',
            github: 'https://github.com/RafaelD-S/GamerHubD-S',
            deploy: 'https://gamerhub-d-s.vercel.app',
            tecnologias: 'React Js | Sass | React-Router-Dom'
        },
        {
            nome: 'E-commerce page',
            imagem: Ecommerce,
            alt: 'Pagina de E-commerce',
            github: 'https://github.com/RafaelD-S/Ecomerce-Product-Page',
            deploy: 'https://rafaeld-s.github.io/Ecomerce-Product-Page/',
            tecnologias: 'HTML | CSS | JavaScript'
        },
        {
            nome: 'News Homepage',
            imagem: NewsHomepage,
            alt: 'Pagina de noticias',
            github: 'https://github.com/RafaelD-S/News-Homepage',
            deploy: 'https://rafaeld-s.github.io/News-Homepage/',
            tecnologias: 'HTML | CSS'
        },
    ])
    return (
        <S.ProjetosSection id='projetos'>
            <article>
            <h2>
                Projetos
            </h2>
            <p>
                Veja alguns dos meus projetos e as tecnologias em que usei neles.
            </p>
            <Fade duration={1000} triggerOnce>
            <S.AreaCards>
                {projetos.map((e) => (
                    <S.CardProjetos>
                        <a href={e.deploy} target='blank_'>
                            <figure className='imagem-projeto'>    
                                <img src={e.imagem} alt={e.alt} />
                            <S.Tecnologias>
                                {e.tecnologias}
                            </S.Tecnologias>
                            </figure>
                        </a>
                        <S.CardAreaTexto>
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
                        </S.CardAreaTexto>
                    </S.CardProjetos>
                ))}
            </S.AreaCards>
            </Fade>
            </article>
        </S.ProjetosSection>
    )
}