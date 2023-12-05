import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github.png'
import Instagram from '../assets/instagram.png'
import { styled } from 'styled-components'

const Contato = styled.footer `

    background-color: #212529;
    color: #fff;
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    * {
        color: #fff;
    }
    h3 {
        font-weight: normal;
        letter-spacing: 1px;
        color: #FF8c00;
    }
`

const AreaContatos = styled.figure `

    display: flex;
    align-items: center;
    overflow: hidden;

  img {
    background-color: #FF8c00;
    padding: .5rem 1rem;
    cursor: pointer;
    border: 1px solid #212529;

  &:hover {
    opacity: .8;
  }
`

export default function Footer() {
    return (
        <Contato id='contato'>
            <h2>
                Contatos
            </h2>
                
                <a href="https://wa.link/jsp4n9" target='blank_'>
                    <h3>&#40;+55&#41; 71 99953-8584</h3>
                </a>
                <h3>rafaeldsilva.pf@gmail.com</h3>

                <AreaContatos>
                    <a href="https://www.linkedin.com/in/rafaeld-s/" target='blank_'>
                        <img src={Linkedin} alt="" />
                    </a>
                    <a href="https://github.com/RafaelD-S" target='blank_'>
                        <img src={Github} alt="" />
                    </a>
                    <a href="https://www.instagram.com/skellybur/" target='blank_'>
                        <img src={Instagram} alt="" />
                    </a>
                </AreaContatos>
        </Contato>
    )
}