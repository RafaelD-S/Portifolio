import { styled } from 'styled-components'
import Programador from '../assets/coder.png'
import {Fade} from 'react-awesome-reveal'
import NuvemBackground from '../assets/background-sobre.png'

const SobreSection = styled.section `

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7rem 1.5rem 5rem 1.5rem;
    background-image: url(${NuvemBackground});
    background-size: 100%;
    background-position: 0 100%;
    background-repeat: no-repeat;

    h2 {
         padding: 1rem 0;
    }
    p {
        max-width: 40rem;
        padding: .5rem 0;
        font-size: 1.15rem;
    }
`

const Linha = styled.div `

    background-color: #ff8c002b;
    height: 12rem;
    padding: .075rem;
    margin-top: 3rem;

`
const SobreContainer = styled.article `

    display: flex;
    border-left: 2px solid #ff8c002b;
    border-radius: 10px;
    padding-left: 1.5rem;
    padding-block: .5rem;

    figure {
        padding-left: 4rem;
    }
    @media(max-width: 935px) {

        figure {
          display: none;
        }
    }
`

export default function Sobre() {
    return (
        <SobreSection id='sobre'> 
            <SobreContainer>
            <Fade direction='left' fraction={.6} triggerOnce>
                <div>
                    <h2>
                        Quem eu sou?
                    </h2>
                    <p>
                    Olá, me chamo Rafael e atualmente sou estudante de programação Front-End junior através da instituição Vai na Web e em um futuro próximo aspiro me formar em análise e desenvolvimento de sistemas pela Universidade Federal da Bahia &#40;UFBA&#41;.
                    </p>
                    <p>
                    Sou bastante comunicativo e social, tenho boas capacidades de trabalho em equipe e liderança, sempre disposto a conhecer novas pessoas, novos ambientes e novas tecnologias, amo utilizar da minha criatividade em meus projetos e meu amor pela programação começou desde que aprendi HTML pela primeira vês, e me motiva a aprender mais e mais todos os dias.
                    </p>
                </div>
            </Fade>
            <Fade direction='right' fraction={.6} triggerOnce>
                <figure>
                    <img src={Programador} alt="" />
                </figure>
            </Fade>
            </SobreContainer>
            <Linha>
            </Linha>
        </SobreSection>
    )
}