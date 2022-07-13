import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatCurrency, formatDateHour } from "../common/Helpers";
import { ProductDetails } from "../interfaces/Product";
import { Card, Image, Location, Price, Tags, Title } from '../styles/components/ProductCard';
import Button from './Button';
import locationIcon from '../assets/icons/location.svg';

interface Props {
    product: ProductDetails
}

const ProductCard = ({ product }: Props) => {
    const [date, setDate] = useState("");
    const [hasDate, setHasDate] = useState(false);
    const [imageSrc, setImageSrc] = useState("");
    const [isLastUnits, setIsLastUnits] = useState(false);
    const [isNew, setIsNew] = useState(false);
    const [isOffer, setIsOffer] = useState(false);
    const [isSoldOut, setIsSoldOut] = useState(false);
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("R$0,00");
    const [sale, setSale] = useState("");
    const [title, setTitle] = useState("Carregando...");
    
    const verifyImage = () => {
        let prodImage = "";

        if (product.imageSrc) {
            prodImage = product.imageSrc;
        } else {
            // colocar imagem genérica aqui
        }

        setImageSrc(prodImage);
    }

    const verifyTags = () => {
        const productDate = product.date;
        const sale = product.salePrice;
        const quantity = product.quantity;

        if (!!productDate) {
            setDate(formatDateHour("Date", productDate));
            setHasDate(true);
        }

        if (!!sale && (sale < product.price)) {
            setIsOffer(true);
            setSale(formatCurrency(sale));
        }

        if (quantity < 10 && quantity > 0) {
            setIsLastUnits(true);
        } else if (quantity === 0) {
            setIsSoldOut(true);
        }

        // Verify if the creation of the product has more than a month
        const diffInMs = new Date().getTime() - new Date(product.creationDate).getTime();
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

        if (diffInDays < 31) {
            setIsNew(true);
        }
    }

    useEffect(() => {
        verifyImage();
        verifyTags();

        setLocation(product.location);
        setPrice(formatCurrency(product.price));
        setTitle(product.title);
    }, []);

    return (
        <Card>
            <Link to={`/roteiro/${product.id}`}>
                <Image>
                    <img src={imageSrc} alt={`Imagem do evento ${title}`} />
                    <p className={`date ${hasDate ? "" : "hide"}`}>{date}</p>
                </Image>

                <Tags>
                    <div className={`tag new ${isNew ? "" : "hide"}`}>novo</div>
                    <div className={`tag comingSoon ${hasDate ? "hide" : ""}`}>em breve</div>
                    <div className={`tag offer ${isOffer && hasDate ? "" : "hide"}`}>promoção</div>
                    <div className={`tag lastUnits ${isLastUnits && hasDate ? "" : "hide"}`}>últimos lugares</div>
                    <div className={`tag soldOut ${isSoldOut && hasDate ? "" : "hide"}`}>lista de espera</div>
                </Tags>

                <Title>{title}</Title>

                <Location>
                    <img src={locationIcon} alt="Ícone de local" />
                    <p>{location}</p>
                </Location>
                
                <Price className={hasDate ? "" : "hide"}>
                    <div className={!!sale ? "" : "hide"}>
                        <div className="price old">De {price}</div>
                        <div className="price">Por {sale}</div>
                    </div>
                    <div className={!!sale ? "hide" : ""}>
                        <div className="price">{price}</div>
                    </div>
                </Price>

                <Button primary full label="Saber Mais" />
            </Link>
        </Card>
    );
}

export default ProductCard;
