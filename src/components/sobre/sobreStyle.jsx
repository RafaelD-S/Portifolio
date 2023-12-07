import { styled } from 'styled-components'
import NuvemBackground from '../../assets/background-sobre.png'

export const SobreSection = styled.section `

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
    }
`

export const Linha = styled.div `

    background-color: #ff8c002b;
    height: 12rem;
    padding: .075rem;
    margin-top: 3rem;

`
export const SobreContainer = styled.article `

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