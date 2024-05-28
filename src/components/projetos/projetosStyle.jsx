import Link from '../../assets/icons/external-link.png'
import styled from 'styled-components'

export const ProjetosSection = styled.section `

    padding: 4rem 1.5rem;
    text-align: center;

    article {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`
export const AreaCards = styled.div `

    padding-top: 3rem;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 2rem 8px;

    img {
        height: 15rem;
        opacity: .4;
        border-bottom: none;
        transition: opacity .3s ease, transform .3s ease;
        transform: scale(1.2);

        &:hover {
            opacity: .9;
            transform: scale(1);
        }
    }

`

export const CardProjetos = styled.div `

    max-width: 24rem;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 3px black;
    
    figure {
        display: flex;
        justify-content: center;
        background-color: black;
        border-radius: 5px 5px 0 0;
        overflow: hidden;
        cursor: pointer;
        position: relative;
    }
    figure:after {
        content: '';
        width: 2rem;
        height: 2rem;
        background-color: #FF8c00;
        box-shadow: 0 0 5px #212529;
        border-radius: 50%;
        background-image: url(${Link});
        background-size: .75rem;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        top: .75rem;
        right: .75rem;
      }
`

export const CardAreaTexto = styled.div `

    padding: .75rem 1rem;
    text-align: left;
    background-color: #212529;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 0 0 5px 5px;

    h3 {
        color: #fff;
        padding: .5rem .5rem .5rem .35rem;
    }
    div {
        display: flex;
        gap: 0 10px;
        height: 100%;
    }
    a {
        color: #fff;
        border: none;
        background-color: #FF8c00;
        font-size: .8rem;
        padding: .5rem 1rem;
        border-radius: 50px;
        font-weight: 600;
        cursor: pointer;

        &:nth-child(1) {
            background-color: #fff;
            color: #212529;
        }
    }
`


export const Tecnologias = styled.figcaption `

    position: absolute;
    background-color: #212529;
    color: #fff;
    border-bottom: 2px solid #ffffff21;
    font-size: .8rem;
    bottom: 0;
    font-weight: bold;
    left: 0;
    right: 0;
    bottom: -20%;
    padding: .5rem;
    transition: bottom .2s ease;
    letter-spacing: 1px;

    .imagem-projeto:hover & {
        bottom: 0;
    }

    @media(max-width: 935px) {
        bottom: 0;
    }
`