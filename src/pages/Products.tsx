import ProductCard from "../components/ProductCard";
import { ProductDetails } from "../interfaces/Product";
import { List } from "../styles/Products";


const Products = () => {

    const products: ProductDetails[] = [
        {
            creationDate: "2022-03-20T12:01:04.753Z",
            salePrice: 290,
            date: "2022-11-28T12:01:04.753Z",
            price: 290,
            id: 1,
            imageSrc: "https://www.falandodeviagem.com.br/imagens19/10PasseiosCamabaraSul1.jpg",
            location: "Cambará do Sul / RS",
            quantity: 0,
            title: "Canyons de Cambará",
        },
        {
            creationDate: "2022-06-20T12:01:04.753Z",
            salePrice: 290,
            // date: "2022-08-10T12:01:04.753Z",
            price: 290,
            id: 2,
            imageSrc: "https://media-cdn.tripadvisor.com/media/photo-s/14/2d/19/44/mejor-uruguay.jpg",
            location: "Montevideo / Uruguay",
            quantity: 29,
            title: "Uruguay Incrível",
        },
        {
            creationDate: "2022-05-20T12:01:04.753Z",
            salePrice: 110,
            date: "2022-08-09T12:01:04.753Z",
            price: 130,
            id: 3,
            imageSrc: "https://a.cdn-hotels.com/gdcs/production167/d783/dec17324-b0d9-428a-9b78-9f415d5db892.jpg",
            location: "Bento Gonçalves / RS",
            quantity: 9,
            title: "Caminhos de Pedra e do Vinho",
        },
        {
            creationDate: "2022-05-20T12:01:04.753Z",
            // salePrice: 290,
            date: "2022-10-08T12:01:04.753Z",
            price: 320,
            id: 4,
            imageSrc: "https://www.viajali.com.br/wp-content/uploads/2017/12/serra-do-rio-do-rastro-10.jpg",
            location: "Lauro Muller / SC",
            quantity: 19,
            title: "Serra do Rio do Rastro",
        }
    ];

    return(
        <main>
            <div className="container">
                <List>
                    {products.map((product, key) => 
                        <ProductCard product={product} key={key} />
                    )}
                    {products.map((product, key) => 
                        <ProductCard product={product} key={key} />
                    )}
                    {products.map((product, key) => 
                        <ProductCard product={product} key={key} />
                    )}
                </List>
            </div>
        </main>
    );
}

export default Products