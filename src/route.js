import React from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import { Route, Switch } from 'react-router-dom';

export default (
    <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/wizard" component={Wizard} />
    </Switch>
);

