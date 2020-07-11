import React from 'react';
import {
    Route as ReactDOMRoute,
    RouteProps as ReactDOMRouterProps,
    Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouterProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}
// Condições do if(no return) ali embaixo
// true/true = OK
// true/false = redireciona para o login
// false/true = redirecion para o dashboard
// false/false = OK
const Route: React.FC<RouteProps> = ({
    isPrivate = false,
    component: Component,
    ...rest
}) => {
    const { user } = useAuth();

    return (
        <ReactDOMRoute
            {...rest}
            render={({ location }) => {
                return isPrivate === !!user ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: isPrivate ? '/' : '/dashboard',
                            state: { from: location },
                        }}
                    />
                );
            }}
        />
    );
};

export default Route;
