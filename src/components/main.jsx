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
                            <img src={Linkedin} alt="" />
                            <img src={GitHub} alt="" />
                            <img src={Instagram} alt="" />
                        </figure>
                </article>
                <figure className="eu">
                    <img src={FotoPessoal} alt="" className="rosto"/>
                </figure>
                <div className="descer" onClick={() => window.scrollTo({top: 500, behavior: "smooth"})}>
                    ⮟
                </div>
            </section>
        </MainEstilo>
    )
}