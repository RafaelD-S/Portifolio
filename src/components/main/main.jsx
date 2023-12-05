import FotoPessoal from '../../assets/foto-rosto.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import GitHub from '../../assets/github.png'

import * as S from './mainStyle.jsx'


export default function Main() {
    return (
            <S.MainSection>
                <article>
                        <h1>
                            Rafael Dantas
                        </h1>
                        <h2>
                            Front-End Developer
                        </h2>
                        <figure>
                            <a href="https://www.linkedin.com/in/rafaeld-s/" target="blank_">
                                <img src={Linkedin} alt="linkedin" />
                            </a>
                            <a href="https://github.com/RafaelD-S" target="blank_">
                                <img src={GitHub} alt="github" />
                            </a>
                            <a href="https://www.instagram.com/skellybur/" target="blank_">
                                <img src={Instagram} alt="instagram" />
                            </a>
                        </figure>
                </article>
                <S.ImagemPessoal>
                    <img src={FotoPessoal} alt="Foto de rosto Rafael Dantas"/>
                </S.ImagemPessoal>
                <S.BotaoDescer onClick={() => window.scrollTo({top: 500, behavior: "smooth"})}>
                    ⮟
                </S.BotaoDescer>
            </S.MainSection>
    )
}