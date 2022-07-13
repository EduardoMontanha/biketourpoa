import { css } from 'styled-components';
import Courgette from '../assets/fonts/Courgette/Courgette-Regular.ttf';
import Montserrat from '../assets/fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratBold from '../assets/fonts/Montserrat/Montserrat-Bold.ttf';

export const fontFaces = css`
    @font-face {
        font-family: 'Courgette';
        src: url(${Courgette}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'MontserratBold';
        src: url(${MontserratBold}) format('truetype');
        font-style: normal;
    }
`;