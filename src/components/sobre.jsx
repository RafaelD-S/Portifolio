import Programador from '../assets/coder.png'

export default function Sobre() {
    return (
        <section className="sobre"  id='cu'> 
            <article>
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
                <figure>
                    <img src={Programador} alt="" />
                </figure>
            </article>
            <div className="linha">
            </div>
        </section>
    )
}