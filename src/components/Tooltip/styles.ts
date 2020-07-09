import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    span {
        width: 160px;
        background: #ff9000;
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transition: opacity 0.4s;
        /* serve pq o opacity não apaga o tooltip */
        visibility: hidden;

        position: absolute;
        bottom: calc(100% + 12px);
        /* esses dois aqui são o hackzinho pra deixar bem na metade o tooltip */
        left: 50%;
        transform: translate(-50%);

        color: #312e38;

        /* hackzinho para criar o triangulo (google arrows css) */
        &::before {
            content: '';
            border-style: solid;
            border-color: #ff9000 transparent;
            border-width: 6px 6px 0 6px;
            bottom: 20px;
            top: 100%;
            position: absolute;
            /* esses dois aqui são o hackzinho pra deixar bem na metade o tooltip */
            left: 50%;
            transform: translate(-50%);
        }
    }

    &:hover span {
        opacity: 1;
        visibility: visible;
    }
`;
