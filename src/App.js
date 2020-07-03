import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Header from './routes/components/Header';
import Footer from './routes/components/Footer';
import Landing from './routes/Landing';
import { Error404 } from './routes/Responses';


function App() {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="" component={Error404} />
            </Switch>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
