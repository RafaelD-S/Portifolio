import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github.png'
import Instagram from '../assets/instagram.png'

export default function Footer() {
    return (
        <footer>
            <h2>
                Contatos
            </h2>
                <h3>&#40;+55&#41; 71 99953-8584</h3>
                <h3>rafaeldsilva.pf@gmail.com</h3>
                <figure>
                    <img src={Linkedin} alt="" /><img src={Github} alt="" /><img src={Instagram} alt="" />
                </figure>
        </footer>
    )
}