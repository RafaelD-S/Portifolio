import { styled } from "styled-components"
import FotoPessoal from '../assets/foto-rosto.png'
import Instagram from '../assets/instagram.png'
import Linkedin from '../assets/linkedin.png'
import GitHub from '../assets/github.png'

const MainEstilo = styled.main `

`
export default function Main() {
    return (
        <MainEstilo>
            <section>
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
                <figure className="eu">
                    <img src={FotoPessoal} alt="Foto de rosto Rafael Dantas" className="rosto"/>
                </figure>
                <div className="descer" onClick={() => window.scrollTo({top: 500, behavior: "smooth"})}>
                    ⮟
                </div>
            </section>
        </MainEstilo>
    )
}