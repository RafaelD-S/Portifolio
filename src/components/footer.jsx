import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github.png'
import Instagram from '../assets/instagram.png'

export default function Footer() {
    return (
        <footer id='contato'>
            <h2>
                Contatos
            </h2>
                
                <a href="https://wa.link/jsp4n9" target='blank_'>
                    <h3>&#40;+55&#41; 71 99953-8584</h3>
                </a>
                <h3>rafaeldsilva.pf@gmail.com</h3>

                <figure>
                    <a href="https://www.linkedin.com/in/rafaeld-s/" target='blank_'>
                        <img src={Linkedin} alt="" />
                    </a>
                    <a href="https://github.com/RafaelD-S" target='blank_'>
                        <img src={Github} alt="" />
                    </a>
                    <a href="https://www.instagram.com/skellybur/" target='blank_'>
                        <img src={Instagram} alt="" />
                    </a>
                </figure>
        </footer>
    )
}