import React from 'react';
// switch garante que apenas uma rota seja mostrada a cada momento
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
);

export default Routes;
