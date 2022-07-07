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
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

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
    const [title, setTitle] = useState("");
    const [imageSrc, setImageSrc] = useState("");
    const [offer, setOffer] = useState("10");

    useEffect(() => {
        setTitle(product.title);
        setImageSrc(product.imageSrc);
    }, []);

    return (
        <Card>
            <Image>
                <img src={imageSrc} alt={`Imagem do evento ${title}`} />
            </Image>

            <Tags>
                <div className="tag lastUnits">últimos lugares</div>
                <div className="tag new">novo</div>
                <div className="tag offer">promoção</div>
                <div className="tag soldOut">esgotado</div>
            </Tags>

            <h3>{title}</h3>

            <Button />
        </Card>
    );
};

export default ProductCard;
