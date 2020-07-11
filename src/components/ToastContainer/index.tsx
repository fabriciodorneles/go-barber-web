import React from 'react';
import { useTransition } from 'react-spring';
import Toast from './Toast';
import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
    // com isso aqui tá transofrmando o array de messages em um array de
    // Messages transitions(com a animação)
    const messagesWithTransition = useTransition(
        messages,
        (message) => message.id,
        {
            from: { right: '-120%', opacity: 0 },
            enter: { right: '0%', opacity: 1 },
            leave: { right: '-120%', opacity: 0 },
        },
    );
    return (
        <Container>
            {/* trocou aqui embaixo, e tem que adicionar uns parametros novos */}
            {messagesWithTransition.map(({ item, key, props }) => (
                <Toast key={key} style={props} message={item} />
            ))}
        </Container>
    );
};

export default ToastContainer;
