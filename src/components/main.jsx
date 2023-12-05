import { styled } from "styled-components"
import FotoPessoal from '../assets/foto-rosto.png'
import Instagram from '../assets/instagram.png'
import Linkedin from '../assets/linkedin.png'
import GitHub from '../assets/github.png'

const MainSection = styled.main `

    display: flex;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap-reverse;
    padding: 9rem 5vw 5rem 5vw;
    background-color: #ff8c002b;
    border-radius: 0 0 20% 20%;
    box-shadow: inset 0 100px 70px -40px #ff8c0058;

    
    figure, article {
        flex-basis: 30%;
    }
    article {
        min-width: 27rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: start;
        height: 14rem;
    }
    figure {
        display: flex;
        justify-content: space-around;
        gap: 10px;
    }

    @media(max-width: 925px) {
        padding: 4.75rem 5vw;
        border-radius: 0 0 5rem 5rem;

        article {
            min-width: 16rem;
            align-items: center;
            text-align: center;
        }
    }
`

const BotaoDescer = styled.button `

    cursor: pointer;
    font-size: 1.5rem;
    position: absolute;
    height: 3.25rem;
    width: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #FF8c00;
    border:2px solid #2125291e;
    border-radius: 50%;
    bottom: -25px;
    left: 100;
    right: 100;

`

const ImagemPessoal = styled.figure `

    position: relative;

    img {
        width: 20rem;
        border-radius: 50%;
    }
    &::before {
        content: 'Aberto a trabalho';
        position: absolute;
        right: -3.2rem;
        bottom: 0;
        width: 10.25rem;
        padding: .5rem .75rem;
        text-align: end;
        background-color: #fff;
        color: #212529;
        border-radius: 25px;
        font-weight: 600;
        border: 2px solid #2125291e;
      }
    &:after {
        content: '';
        position: absolute;
        width: 1rem;
        height: 1rem;
        right: 6.9rem;
        bottom: .75rem;
        border-radius: 50%;
        animation: luz 2s infinite;
    }

    @media(max-width: 935px) {
  
        img {
            width: 50vw;
        }
        &::before {
          font-size: .8em;
          width: 8rem;
          right: -2rem;
          padding: .25rem .5rem;
        }
        &::after {
          bottom: .55rem;
          width: .5rem;
          height: .5rem;
          right: 5.8rem;
        }
    }
`
export default function Main() {
    return (
            <MainSection className="main-section">
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
                <ImagemPessoal className="eu">
                    <img src={FotoPessoal} alt="Foto de rosto Rafael Dantas" className="rosto"/>
                </ImagemPessoal>
                <BotaoDescer className="descer" onClick={() => window.scrollTo({top: 500, behavior: "smooth"})}>
                    ⮟
                </BotaoDescer>
            </MainSection>
    )
}