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
    gap: 2rem 0;

    img {
        height: 16rem;
        opacity: .4;
        border-bottom: none;
        transition: opacity .3s ease, transform .3s ease;
        transform: scale(1.3);

        &:hover {
            opacity: .9;
            transform: scale(1.1);
        }
    }

`

export const CardProjetos = styled.div `

    max-width: 28rem;
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

    * {
        color: #fff;
    }
    div {
        display: flex;
        gap: 0 10px;
        margin-top: .5rem;
    }
    a {
        border: none;
        background-color: #FF8c00;
        padding: .5rem 1rem;
        border-radius: 50px;
        font-weight: 600;
        cursor: pointer;

        &:nth-child(1) {
           export  background-color: #fff;
            color: #212529;
        }
    }
`

import Link from '../../assets/external-link.png'

export const Tecnologias = styled.figcaption `

    position: absolute;
    background-color: #212529;
    color: #fff;
    border-bottom: 2px solid #ffffff21;
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
        font-size: .9rem;
    }
`