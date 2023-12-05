import Pt from '../../assets/brasil.png'
import Eng from '../../assets/estados-unidos.png'
import GitHub from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'
import { useState } from 'react'

import * as S from './headerStyle.jsx'


export default function Header() {

    const [mudar, SetMudar] = useState(false)
    return (
        <>
        <S.HeaderEstilo>
            <section>
                <div>
                    <h2 onClick={() => window.scrollTo({top:0})}>
                        &lt; Rafael D-S <span>/</span>&gt;
                    </h2>
                </div>
                <S.Nav>
                    <ul>
                        <a href="#sobre">
                            <li>
                                Sobre
                            </li>
                        </a>
                        <a href="#conhecimento">
                            <li>
                                Conhecimento
                            </li>
                        </a>
                        <a href="#projetos">
                            <li>
                                Projetos
                            </li>
                        </a>
                        <a href="#contato">
                            <li>
                                Contato
                            </li>
                        </a>
                    </ul>
                </S.Nav>
                <S.AreaCurriculo>
                    {/* <figure>
                        <S.Icone src={Pt} alt="português" />
                        <S.Icone src={Eng} alt="english" />
                    </figure> */}
                    <S.Curriculo href="../public/CURRÍCULO_RAFAEL_DANTAS_SILVA.pdf" target='blank_'>
                        Currículo
                    </S.Curriculo>
                </S.AreaCurriculo>
                <S.MenuHamburger onClick={() => SetMudar(!mudar) }>
                    ≡
                </S.MenuHamburger>
            </section>
        {mudar && <Navegacao SetMudar={SetMudar} mudar={mudar}/>}
        </S.HeaderEstilo>
    </>
    )
}
function Navegacao({SetMudar, mudar}) {

    // onClick={() => SetMudar(!mudar)}
    return (
        <S.GavetaNavegacao>
                    <ul>
                        <a href="#sobre" onClick={() => SetMudar(!mudar)}>
                            <li>
                                Sobre
                            </li>
                        </a>
                        <a href="#conhecimento" onClick={() => SetMudar(!mudar)}>
                            <li>
                                Conhecimento
                            </li>
                        </a>
                        <a href="#projetos" onClick={() => SetMudar(!mudar)}>
                            <li>
                                Projetos
                            </li>
                        </a>
                        <a href="#contato" onClick={() => SetMudar(!mudar)}>
                            <li>
                                Contato
                            </li>
                        </a>
                    </ul>
            <section>
                <figure>
                        <S.Icone src={Pt} alt="português" />
                        <S.Icone src={Eng} alt="english" />
                </figure>
                <S.Curriculo a href="../../public/CURRÍCULO_RAFAEL_DANTAS_SILVA.pdf" target='blank_'>
                    Curriculo
                </S.Curriculo>
                <figure>
                    <a href="https://github.com/RafaelD-S" target='_blank'>
                        <S.Icone src={GitHub} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/rafaeld-s/" target='_blank'>
                        <S.Icone src={Linkedin} alt="linkedin" />
                    </a>
                    <a href="https://www.instagram.com/skellybur/" target='blank_'>
                        <S.Icone src={Instagram} alt="instagram" />
                    </a>
                </figure>
            </section>
        </S.GavetaNavegacao>
    )
}