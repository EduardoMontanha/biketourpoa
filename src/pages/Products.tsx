import ProductCard from "../components/ProductCard";
import { ProductDetails } from "../interfaces/Product";
import { List } from "../styles/Products";


const Products = () => {

    const product: ProductDetails = {
        creationDate: "2022-03-20T12:01:04.753Z",
        salePrice: 290,
        date: "2022-08-10T12:01:04.753Z",
        fullPrice: 290,
        id: 1,
        imageSrc: "https://www.tudodeviagem.com/wp-content/uploads/2021/12/Gruta-do-Lago-Azul-Daniel-De-Granville-2.jpg",
        location: "Bonito / MS",
        quantity: 0,
        title: "Canyons de Cambará",
    }

    const product2: ProductDetails = {
        creationDate: "2022-06-20T12:01:04.753Z",
        salePrice: 290,
        // date: "2022-08-10T12:01:04.753Z",
        fullPrice: 290,
        id: 2,
        imageSrc: "https://media-cdn.tripadvisor.com/media/photo-s/14/2d/19/44/mejor-uruguay.jpg",
        location: "Montevideo / Uruguay",
        quantity: 29,
        title: "Feira do Mel, Rosca e Nata",
    }

    const product3: ProductDetails = {
        creationDate: "2022-05-20T12:01:04.753Z",
        salePrice: 280,
        date: "2022-08-10T12:01:04.753Z",
        fullPrice: 290,
        id: 3,
        imageSrc: "https://a.cdn-hotels.com/gdcs/production167/d783/dec17324-b0d9-428a-9b78-9f415d5db892.jpg",
        location: "Bento Gonçalves / RS",
        quantity: 9,
        title: "Caminhos de Pedra e do Vinho",
    }

    return(
        <main>
            <div className="container">
                <List>
                    <ProductCard product={product} />
                    <ProductCard product={product2} />
                    <ProductCard product={product3} />  
                </List>
            </div>
        </main>
    );
}

export default Products