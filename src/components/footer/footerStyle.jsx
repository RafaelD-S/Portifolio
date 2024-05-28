import { styled } from 'styled-components'

export const Contato = styled.footer `

    background-color: #212529;
    color: #fff;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1.5rem 4rem;
    flex-wrap: wrap;

    div {
      display: grid;
      text-align: center;
      gap: 8px;
    }
    * {
        color: #fff;
    }
    h3 {
        font-weight: normal;
        letter-spacing: 1px;
        color: #FF8c00;
        font-size: 1.125rem;
    }
`

export const AreaContatos = styled.figure `

    display: flex;
    align-items: center;
    overflow: hidden;

  img {
    filter: brightness(0) saturate(100%) invert(50%) sepia(81%) saturate(552%) hue-rotate(355deg) brightness(91%) contrast(99%);
    padding: .5rem;
    cursor: pointer;

  &:hover {
    opacity: .8;
  }
`