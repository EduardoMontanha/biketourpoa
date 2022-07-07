import { Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

const Routes = () => {

    return (
        <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/roteiro/:id" element={<ProductDetail />} />
            <Route path="*" element={<Home />} />
        </Switch>
    );
}
  
export default Routes;
  