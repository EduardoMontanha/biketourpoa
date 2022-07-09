import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../common/Helpers";
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
    const [hasTags, setHasTags] = useState(false);
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
        let containTags = false;
        const sale = product.salePrice;
        const quantity = product.quantity;

        if (!!product.date) {

            setHasDate(true);
        }

        if (!!sale && (sale < product.fullPrice)) {
            setIsOffer(true);
            setSale(formatCurrency(sale));
            containTags = true;
        }

        if (quantity < 10 && quantity > 0) {
            setIsLastUnits(true);
            containTags = true;
        } else if (quantity === 0) {
            setIsSoldOut(true);
            containTags = true;
        }

        // Verify if the creation of the product has more than a month
        const diffInMs = new Date().getTime() - new Date(product.creationDate).getTime();
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

        if (diffInDays < 31) {
            setIsNew(true);
            containTags = true;
        }

        setHasTags(containTags);
    }

    useEffect(() => {
        verifyImage();
        verifyTags();

        setLocation(product.location);
        setPrice(formatCurrency(product.fullPrice));
        setTitle(product.title);
    }, []);

    return (
        <Card>
            <Link to={`/roteiro/${product.id}`}>
                <Image>
                    <img src={imageSrc} alt={`Imagem do evento ${title}`} />
                </Image>

                <Tags className={hasTags ? "" : "no-tag"}>
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
