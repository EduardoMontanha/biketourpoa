import { createGlobalStyle } from 'styled-components';
import './reset.css';
import { fontFaces } from './fonts';

export default createGlobalStyle`
    ${fontFaces};

    :root {
        --dark-grey: #313638;
        --green: #209052;
        --light-grey: #E8E9EB;
        --pink: #EB1265;
        --yellow: #EFEF16;
        --header-font: Yellowtail;
        --content-font: Montserrat;
        --content-font-bold: MontserratBold;
    }

    body {
        background-color: var(--light-grey);
    }

    .hide {
        display: none !important;
    }
`;