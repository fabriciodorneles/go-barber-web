import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
// usa do core porque é um funcionalidade para tudo
import { useField } from '@unform/core';
import { Container } from './styles';

// cria uma interface e extende/puxa do React
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    // aqui ele sobreescreve pra deixar obrigatório por que é opcional por default(name?:string)
    name: string;
    // importou lá em cima do react icons o icon base props, por icone ter acesso às propriedades
    icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const { fieldName, defaultValue, registerField } = useField(name);

    const handleInputBlur() {
        setIsFocused(false);
    }

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);
    return (
        <Container isFocused={isFocused}>
            {/* teve que converter ali em cima pro react entender que era um componente, um icon */}
            {Icon && <Icon size={20} />}
            <input
                onFocus={() => setIsFocused(true)}
                onBlur={handleInputBlur}
                defaultValue={defaultValue}
                ref={inputRef}
                {...rest}
            />
        </Container>
    );
};

export default Input;
