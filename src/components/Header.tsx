import { BurgerButton, HeaderArea, Navigation } from "../styles/components/Header";
import logo from '../assets/images/logo-big.png';
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <HeaderArea>
            <div className="container">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                
                <BurgerButton />
                
                <Navigation>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/roteiros">Roteiros</Link>
                        </li>
                        <li>
                            <Link to="/contato">Contato</Link>
                        </li>
                    </ul>
                </Navigation>
            </div>
        </HeaderArea>
    );
};

export default Header;