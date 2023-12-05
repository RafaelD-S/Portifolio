import { styled } from 'styled-components'

export const Contato = styled.footer `

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

export const AreaContatos = styled.figure `

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