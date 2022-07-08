import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Lazy load for other pages
const ProductDetail = lazy(() => import("./pages/ProductDetail"));

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roteiro/:id" element={
                <Suspense fallback={<>Carregando...</>}>
                    <ProductDetail />
                </Suspense>
            } />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
  
export default Router;
  