import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Header from './routes/components/Header';
import Footer from './routes/components/Footer';
import Landing from './routes/Landing/Landing';


function App() {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path="/" component={Landing} />
            </Switch>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
