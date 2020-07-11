import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
    // como um não tem relação com o outro não importa a ordem
    // mas tem que botar os que dependem do outro dentro dele
    <AuthProvider>
        <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
);

export default AppProvider;
