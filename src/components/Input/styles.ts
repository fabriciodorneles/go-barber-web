import styled from 'styled-components';

export const Container = styled.div`
    background: #232129;
    border-radius: 10px;
    /* já deixa pronto pra receber a borda vermelha de erro */
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    color: #666360;

    /* todo input que seja precedido por outro margin top de 8px */
    & + div {
        margin-top: 8px;
    }
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
