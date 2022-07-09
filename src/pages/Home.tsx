import ProductCard from "../components/ProductCard";
import { ProductDetails } from "../interfaces/Product";

const Home = () => {

    const product: ProductDetails = {
        creationDate: "2022-06-20T12:01:04.753Z",
        salePrice: 280,
        date: "2022-08-10T12:01:04.753Z",
        fullPrice: 290,
        id: 1,
        imageSrc: "https://www.tudodeviagem.com/wp-content/uploads/2021/12/Gruta-do-Lago-Azul-Daniel-De-Granville-2.jpg",
        location: "Bonito / MS",
        quantity: 29,
        title: "Canyons de Cambará",
    }

    return (
        <main>
            <div className="container">
                <ProductCard product={product} />
            </div>
        </main>
    );
}
  
export default Home;
  