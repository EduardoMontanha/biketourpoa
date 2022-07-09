import { css } from 'styled-components';

import Yellowtail from '../assets/fonts/Yellowtail/Yellowtail-Regular.ttf';
import Montserrat from '../assets/fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratBold from '../assets/fonts/Montserrat/Montserrat-Bold.ttf';

export const fontFaces = css`
    @font-face {
        font-family: 'Yellowtail';
        src: url(${Yellowtail}) format('truetype');
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