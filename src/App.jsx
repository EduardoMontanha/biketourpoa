import { BrowserRouter } from "react-router-dom";
import Providers from "./Providers";
import GlobalStyles from './styles/global';
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Providers>
                <GlobalStyles />
                <Header />
                <Routes />
                <Footer />
            </Providers>
        </BrowserRouter>
    );
}
  
export default App;
  