import styled  from "styled-components"

export const HeaderEstilo = styled.header `
    background-color: #fff;
    margin: 1rem;
    border-radius: 3rem;
    position: fixed;
    padding: .75rem 2.5rem;
    box-shadow: 0 0 3px #212529;
    left: 0;
    right: 0;
    z-index: +2;

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;}
    }
    h2 {
        cursor: pointer;
    }
    span {
        color: rgb(255, 140, 0);
    }


    @media(max-width: 935px) {
        position: sticky;
        top: 0;
        margin: 0 0;
        padding: 1rem;
        border-radius: 0;
    }
`
export const Nav = styled.nav `

    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding: .65rem 1.25rem;
        cursor: pointer;
        transition: background-color .1s ease, border-radius 260ms ease;

        &:hover {
            background-color: #ff8c002b;
            border-radius: 50px;
        }
    }

    @media(max-width: 935px) {
        display: none;
    }
`

export const AreaCurriculo = styled.article `
    justify-content: end;
    display: flex;
    align-items: center;

    figure {
        display: flex;
        width: 5rem;
        justify-content: space-around;
        padding-right: .5rem;
    }
    
    @media(max-width: 935px) {
        display: none;
    }
`
export const Curriculo = styled.a `

    background-color: #FF8c00;
    border-radius: 50px;
    color: #fff;
    padding: .65rem 1.25rem;
    font-weight: 600;
    letter-spacing: 1px;
`

export const Icone = styled.img `
    cursor: pointer;

    &:hover {
    transform: translate(0, -1px);
    }
`
export const MenuHamburger = styled.button `
    background-color: transparent;
    border: none;
    font-size: 2rem;
    display: none;
    width: 2rem;

    @media(max-width: 935px) {
        display: block;
        color: #212529;
        cursor: pointer;
    }
`

export const GavetaNavegacao = styled.nav `

    height: 89vh;

    ul {
        height: 35vh;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border-block: 1px solid #2125291e;
        list-style: none;
    }
    section {
        display: flex;
        height: 40vh;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        gap: 15px 0;
    }
    figure {
        display: flex;
        gap: 0 15px;
    }
`