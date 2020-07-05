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
import Header from './routes/components/Header';


function App() {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/roteiros" component={UnderConstruction} />
                <Route path="/clube" component={UnderConstruction} />
                <Route path="/sobre" component={UnderConstruction} />
                <Route path="/contato" component={UnderConstruction} />
                <Route path="" component={Error404} />
            </Switch>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
