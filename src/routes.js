import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import Home from './components/Home';
import Generos from './components/Generos';
import NovoGenero from './components/NovoGenero';
import EditGenero from './components/EditGenero';
import Series from './components/Series';
import NovaSerie from './components/NovaSerie';
import EditSerie from './components/EditSerie';
import InfoSerie from './components/InfoSerie';

export default function routes(props) {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/generos" component={Generos} exact />
                <Route path="/generos/novo" component={NovoGenero} exact />
                <Route path="/generos/edit/:id" component={EditGenero} exact />
                <Route path="/series" component={Series} exact />
                <Route path="/series/nova" component={NovaSerie} exact />
                <Route path="/series/edit/:id" component={EditSerie} exact />
                <Route path="/series/info/:id" component={InfoSerie} exact />
            </Switch>
        </Router>
    );
}
