import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
    type?: 'sucess' | 'error' | 'info';
    hasDescription: boolean;
}

const toastTypeVariations = {
    info: css`
        background: #ebf8ff;
        color: #3172b7;
    `,
    sucess: css`
        background: #e6fffa;
        color: #2e656a;
    `,
    error: css`
        background: #fddede;
        color: #c53030;
    `,
};

export const Container = styled(animated.div)<ContainerProps>`
    width: 360px;
    position: relative;
    padding: 16px 30px 16px 16px;
    border-radius: 10px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

    display: flex;

    /* um toast que vem seguido de outro toast faz isso */
    & + div {
        margin-top: 8px;
    }

    /* faz isso aqui pra não ficar cheio de ifs nesse css aqui
    puxa la de cima e é como se substituisse aqui */
    ${(props) => toastTypeVariations[props.type || 'info']}

    /* faz pegar o svg que tá diretamente dentro do toast */
    > svg {
        margin: 4px 12px 0 0;
    }

    div {
        /* preenche o máximo do tamanho possível */
        flex: 1;

        p {
            margin-top: 4px;
            font-size: 14px;
            opacity: 0.8px;
            line-height: 20px;
        }
    }
    button {
        position: absolute;
        right: 16px;
        top: 19px;
        opacity: 0.6;
        border: 0;
        background: transparent;
        /* herda o tom de cor do pai */
        color: inherit;
    }

    ${(props) =>
        !props.hasDescription &&
        css`
            align-items: center;
            svg {
                margin-top: 0;
            }
        `}
`;
