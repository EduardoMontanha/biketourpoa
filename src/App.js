import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Landing from './routes/Landing/Landing';

function App() {
    return (
        <BrowserRouter>

            <Switch>
                <Route path="/" component={Landing} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
