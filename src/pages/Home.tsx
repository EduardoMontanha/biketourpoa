import ProductCard from "../components/ProductCard";
import { ProductDetails } from "../interfaces/Product";

const Home = () => {

    const product: ProductDetails = {
        title: "teste",
        imageSrc: "https://static.wixstatic.com/media/a405a9_f50cc3728e244c5c8447c3c10c182700~mv2.png/v1/fill/w_309,h_309,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/card-home.png",
        price: 0,
        fullPrice: 0
    }

    return (
        <div>
            Homepage
            <ProductCard product={product} />
        </div>
    );
}
  
export default Home;
  