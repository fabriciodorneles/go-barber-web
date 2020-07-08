import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="Go Barber" />
            <form>
                <h1>Faça seu Logon</h1>
                <Input name="email" icon={FiMail} placeholder="E-mail" />

                <Input
                    name="password"
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                />
                <Button type="submit">Entrar</Button>

                <a href="forgot">Esqueci minha senha</a>
            </form>
            <a href="signup">
                <FiLogIn />
                Criar Conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;
