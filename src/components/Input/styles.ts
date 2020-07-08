import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;

    /* já deixa pronto pra receber a borda vermelha de erro */
    border: 2px solid #232129;
    color: #666360;

    /* todo input que seja precedido por outro margin top de 8px */
    & + div {
        margin-top: 8px;
    }

    ${(props) =>
        props.isFocused &&
        css`
            border: 2px solid #ff9000;
            color: #ff9000;
        `}
    input {
        color: #f4ede8;
        flex: 1;
        background: transparent;
        border: 0;
        &::placeholder {
            color: #666360;
        }
    }

    svg {
        margin-right: 16px;
    }
`;
