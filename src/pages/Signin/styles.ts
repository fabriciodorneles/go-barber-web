import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /*align-items: center; */
    align-items: center;
    /* nunca vai ser menos que o tamanho do conteudo (100%)
    nunca vai ser mais que 700px */
    width: 100%;
    max-width: 700px;
`;

const appearFromRight = keyframes`
from{
    opacity:0;
    transform: translateX(50px);
}
to{
    opacity:1;
    transform: translateX(0px);
}
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /*align-items: center; */
    align-items: center;

    animation: ${appearFromRight} 1s;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;
    }

    h1 {
        margin-bottom: 24px;
    }

    a {
        color: #f4ede8;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.2, '#f4ede8')};
        }
    }
    /* pega só o a do primeiro nivel(mais perto do content) */
    > a {
        color: #ff9000;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#ff9000')};
        }
    }
`;

export const Background = styled.div`
    /* ocupa todo o espaço menos o tamanho do content, os 700px, ele é flexivel */
    flex: 1;
    background: url(${signInBackgroundImg}) no-repeat;
    /* ocupa toda a tela restante */
    background-size: cover;
`;
