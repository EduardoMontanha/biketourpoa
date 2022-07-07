import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from './Button';
import { ProductDetails } from "../interfaces/Product";

const Card = styled.div`
    width: 100%;
    height: 100%;
    max-width: 270px;
    max-height: 350px;
    padding: 0.5rem;
    border-radius: 8px;
    border: 1px solid #DDDDDD;
    background-color: #FFFFFF;
`;

const Image = styled.div`
    text-align: center;

    & img {
        max-width: 100%;
        max-height: 100%;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    .tag {
        padding: 0.2rem 0.4rem;
        border-radius 4px;
        margin: 0.1rem;
        display: inline-block;
        color: #FFFFFF;
        opacity: 0.8;
        vertical-align: middle;
    }

    .lastUnits {
        background-color: #FF9900;
    }

    .new {
        background-color: #0066FF;
    }

    .offer {
        background-color: #CC00CC;
    }

    .soldOut {
        background-color: #CC0000;
    }
`;

interface Props {
    product: ProductDetails
}

const ProductCard = ({ product }: Props) => {
    const [imageSrc, setImageSrc] = useState("");
    const [isLastUnits, setIsLastUnits] = useState(false);
    const [isNew, setIsNew] = useState(false);
    const [isOffer, setIsOffer] = useState(false);
    const [isSoldOut, setIsSoldOut] = useState(false);
    const [offer, setOffer] = useState("R$0,00");
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
        const currentPrice = product.currentPrice;
        const quantity = product.quantity;

        if (!!currentPrice && (currentPrice < product.fullPrice)) {
            setIsOffer(true);
            setOffer(`R$${currentPrice}`);
        }

        if (quantity < 10 && quantity > 0) {
            setIsLastUnits(true);
        } else if (quantity === 0) {
            setIsSoldOut(true);
        }

        // Verify if the creation of the product has more than a month
        const diffInMs = new Date().getTime() - new Date(product.creationDate).getTime();
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

        console.log(diffInDays);

        if (diffInDays > 31) {
            console.log("entrou")
            setIsNew(true);
        } else {
            console.error("não deu", diffInDays);
        }
    }

    useEffect(() => {
        verifyImage();
        verifyTags();

        setTitle(product.title);
    }, []);

    return (
        <Card>
            <Image>
                <img src={imageSrc} alt={`Imagem do evento ${title}`} />
            </Image>

            <Tags>
                <div className={`tag new ${isNew ? "" : "hide"}`}>novo</div>
                <div className={`tag offer ${isOffer ? "" : "hide"}`}>promoção</div>
                <div className={`tag lastUnits ${isLastUnits ? "" : "hide"}`}>últimos lugares</div>
                <div className={`tag soldOut ${isSoldOut ? "" : "hide"}`}>esgotado</div>
            </Tags>

            <h3>{title}</h3>

            <Button />
        </Card>
    );
};

export default ProductCard;
