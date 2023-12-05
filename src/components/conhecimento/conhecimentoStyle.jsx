import { styled } from "styled-components"

export const ConhecimentoSection = styled.section `

    background-color: #ff8c002b;
    border-block: 3px solid #2125291e;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 1.5rem;
    color: #212529;
    text-align: center;

    article {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 5px;
        max-width: 65rem;
        width: 100%;
    }
`
export const AreaCards = styled.section `

    padding-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px 0;

    img {
        width: 24px;
    }
    div {
        background-color: #fff;
        display: flex;
        padding: 1rem;
        gap: 0 10px;
        box-shadow: 0 0 5px gray;
        border-radius: 5px;
        max-width: 30rem;
        width: 100%;
        margin: auto;
    }
`