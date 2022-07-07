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

    &.no-tag {
        margin-bottom: 25.5px;
    }

    .tag {
        padding: 0.2rem 0.4rem;
        border-radius 4px;
        margin: 0.1rem;
        display: inline-block;
        color: #FFFFFF;
        opacity: 0.8;
        vertical-align: middle;
    }

    .comingSoon {
        background-color: #FFCC00;
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
    const [date, setDate] = useState("");
    const [hasDate, setHasDate] = useState(false);
    const [hasTags, setHasTags] = useState(false);
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
        let containTags = false;
        const sale = product.salePrice;
        const quantity = product.quantity;

        if (!!product.date) {

            setHasDate(true);
        }

        if (!!sale && (sale < product.fullPrice)) {
            setIsOffer(true);
            setOffer(`R$${sale}`);
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

        setTitle(product.title);

        console.log("test")
    }, []);

    return (
        <Card>
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

            <h3>{title}</h3>

            <Button />
        </Card>
    );
};

export default ProductCard;
