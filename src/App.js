import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Footer from './routes/components/Footer';
import Landing from './routes/Landing';
import {
    UnderConstruction,
    Error404,
}
from './routes/Responses';
import Navigation from './routes/components/Navigation';


function App() {
    return (
        <BrowserRouter>
            <Navigation />

            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/roteiros" component={UnderConstruction} />
                <Route exact path="/clube" component={UnderConstruction} />
                <Route exact path="/sobre" component={UnderConstruction} />
                <Route exact path="/contato" component={UnderConstruction} />
                <Route path="" component={Error404} />
            </Switch>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
