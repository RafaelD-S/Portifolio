import Linkedin from '../../assets/icons/linkedin.png'
import Github from '../../assets/icons/github.png'
import Instagram from '../../assets/icons/instagram.png'

import * as S from './footerStyle'

export default function Footer() {
    return (
        <S.Contato id='contato'>
            <h2>
                Contatos
            </h2>
            
            <div>
                <a href="https://wa.link/jsp4n9" target='blank_'>
                    <h3>&#40;+55&#41; 71 99953-8584</h3>
                </a>
                <h3>rafaeldsilva.pf@gmail.com</h3>
            </div>

            <S.AreaContatos>
                <a href="https://www.linkedin.com/in/rafaeld-s/" target='blank_'>
                    <img src={Linkedin} alt="" />
                </a>
                <a href="https://github.com/RafaelD-S" target='blank_'>
                    <img src={Github} alt="" />
                </a>
                <a href="https://www.instagram.com/skellybur/" target='blank_'>
                    <img src={Instagram} alt="" />
                </a>
            </S.AreaContatos>
        </S.Contato>
    )
}