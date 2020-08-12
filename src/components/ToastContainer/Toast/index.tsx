import React, { useEffect } from 'react';
import {
    FiAlertCircle,
    FiCheckCircle,
    FiInfo,
    FiXCircle,
} from 'react-icons/fi';
import { ToastMessage, useToast } from '../../../hooks/toast';
import { Container } from './styles';

interface ToastProps {
    message: ToastMessage;
    style: object;
}

const icons = {
    info: <FiInfo size={24} />,
    error: <FiAlertCircle size={24} />,
    sucess: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
    const { removeToast } = useToast();

    // use Effect vazio pra disparar uma função(timer) sempre que um toast é criado
    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id);
        }, 3000);

        // esse return do effect aqui é chamado sempre que o componente deixar de existir
        // no caso aqui é pra se o usuario fechar o toast antes do timer terminar(se não ia crashar)
        // aí nesse caso, acaba com o timer.
        return () => {
            clearTimeout(timer);
        };
    }, [message.id, removeToast]);

    return (
        <Container
            type={message.type}
            hasdescription={Number(!!message.description)}
            style={style}
        >
            {icons[message.type || 'info']}
            <div>
                <strong>{message.title}</strong>
                {message.description && <p>{message.description}</p>}
            </div>
            <button
                // tem que fazer assim (arrowfunc) pra receber o parametro
                // senão a função vai executar no momento em que a pagina carregar
                onClick={() => removeToast(message.id)}
                type="button"
            >
                <FiXCircle size={18} />
            </button>
        </Container>
    );
};

export default Toast;
