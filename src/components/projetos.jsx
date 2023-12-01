import { useState } from 'react'
import Naruto from '../assets/Projetos/naruto.png'
import Calculadora from '../assets/Projetos/calculadora.png'
import Rpg from '../assets/Projetos/rpg.png'
import Contador from '../assets/Projetos/contador.png'
import Fantastika from '../assets/Projetos/fantastika.png'
import Blogames from '../assets/Projetos/blogames.png'

import {Fade} from 'react-awesome-reveal'

export default function Projetos() {
    
    const [projetos, SetProjetos] = useState([
        {
            nome: 'Naruto API',
            imagem: Naruto,
            alt: 'Site usando a API do Naruto',
            github: 'https://github.com/RafaelD-S/Naruto-API',
            deploy: 'https://naruto-api-alpha.vercel.app'
        },
        {
            nome: 'Calculadora React',
            imagem: Calculadora,
            alt: 'Site de uma calculadora utilizando React',
            github: 'https://github.com/RafaelD-S/Calculadora-React',
            deploy: 'https://calculadora-simples-nu.vercel.app'
        },
        {
            nome: 'Projeto RPG',
            imagem: Rpg,
            alt: 'Site de RPG feito em html, css e js',
            github: 'https://github.com/RafaelD-S/RPG-Project',
            deploy: 'https://rafaeld-s.github.io/RPG-Project/'
        },
        {
            nome: 'Contador Multicor',
            imagem: Contador,
            alt: 'Contador de 1 a 10 feito em React',
            github: 'https://github.com/RafaelD-S/Contador-Multicor',
            deploy: 'https://contador-multicor.vercel.app'
        },
        {
            nome: 'Desafio Fantastika',
            imagem: Fantastika,
            alt: 'Site desafio do curso front-end Vai na Web',
            github: 'https://github.com/RafaelD-S/Fantastika',
            deploy: 'https://rafaeld-s.github.io/Fantastika/'
        },
        {
            nome: 'Blogames',
            imagem: Blogames,
            alt: 'Site parte dos templates desenvolvidos pela Codêlandia',
            github: 'https://github.com/RafaelD-S/Blogames',
            deploy: 'https://rafaeld-s.github.io/Blogames/'
        },
    ])
    return (
        <section className="projetos-section">
            <article>
            <h2>
                Projetos
            </h2>
            <p>
                Veja um pouco dos meus projetos e as tecnologias em que usei neles.
            </p>
            <Fade duration={1000} triggerOnce>
            <div className="projetos-cards-area">
                {projetos.map((e) => (
                    <div className="projetos">
                        <figure>
                            <img src={e.imagem} alt={e.alt} />
                        </figure>
                        <div className='projetos-text-area'>
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
                        </div>
                    </div>
                ))}
            </div>
            </Fade>
            </article>
        </section>
    )
}