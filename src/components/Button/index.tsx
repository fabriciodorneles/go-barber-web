import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';
// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>
// transforma em type porque não sobreescreveu nenhuma propriedade
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// desabilitou o eslintreact/prop-types tb porque tá com typescript e não precisa
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    /* teve que passar o type do button, mas se precisar o react reescreve com o props */
    <Container type="button" {...rest}>
        {children}
    </Container>
);

export default Button;
