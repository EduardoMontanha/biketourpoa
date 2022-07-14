import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ProductDetails } from '../../interfaces/Product';
import ProductCard from '../../components/ProductCard';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  decorators: [withRouter],
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = args => <ProductCard {...args} />;

const defaultProduct: ProductDetails = {
    creationDate: "2022-03-20T12:01:04.753Z",
    date: "2022-11-28T12:01:04.753Z",
    price: 290,
    id: 1,
    imageSrc: "https://www.falandodeviagem.com.br/imagens19/10PasseiosCamabaraSul1.jpg",
    location: "Cambará do Sul / RS",
    quantity: 30,
    title: "Canyons de Cambará",
}

export const Default = Template.bind({});
Default.args = {
    product: {
        ...defaultProduct
    },
};

export const CommingSoon = Template.bind({});
CommingSoon.args = {
    product: {
        ...defaultProduct,
        date: ""
    },
};

// Creation date must be less than a month old
export const IsNew = Template.bind({});
IsNew.args = {
    product: {
        ...defaultProduct,
        creationDate: "2022-06-20T12:01:04.753Z",
    },
};

export const LastUnities = Template.bind({});
LastUnities.args = {
    product: {
        ...defaultProduct,
        quantity: 7
    },
};

export const Sale = Template.bind({});
Sale.args = {
    product: {
        ...defaultProduct,
        salePrice: 260
    },
};

export const SoldOut = Template.bind({});
SoldOut.args = {
    product: {
        ...defaultProduct,
        quantity: 0
    },
};
