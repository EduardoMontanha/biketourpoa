import ProductCard from "../components/ProductCard";
import { ProductDetails } from "../interfaces/Product";

const Home = () => {

    const product: ProductDetails = {
        creationDate: "2022-06-20T12:01:04.753Z",
        salePrice: 19,
        // date: "2022-08-10T12:01:04.753Z",
        fullPrice: 19,
        id: 1,
        imageSrc: "https://static.wixstatic.com/media/a405a9_f50cc3728e244c5c8447c3c10c182700~mv2.png/v1/fill/w_309,h_309,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/card-home.png",
        quantity: 9,
        title: "Cascata da Borda Infinita",
    }

    return (
        <div>
            Homepage
            <ProductCard product={product} />
        </div>
    );
}
  
export default Home;
  