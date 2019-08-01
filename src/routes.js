import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';

import Home from './components/Home';
import Generos from './components/Generos';
import NovoGenero from './components/NovoGenero';
import EditGenero from './components/EditGenero';

export default function routes(props) {
    return (
        <Router>
            <Header />
            <Route path="/" component={Home} exact />
            <Route path="/generos" component={Generos} exact />
            <Route path="/generos/novo" component={NovoGenero} />
            <Route path="/generos/edit/:id" exact component={EditGenero} />
            <pre>{/*JSON.stringify(props.home) */}</pre>
        </Router>
    );
}
