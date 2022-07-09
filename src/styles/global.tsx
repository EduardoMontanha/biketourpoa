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
        --white: #FFFFFF;
        --header-font: Yellowtail;
        --content-font: Montserrat;
        --content-font-bold: MontserratBold;
    }

    body {
        background-color: var(--light-grey);
        font-family: sans-serif;
        font-family: var(--content-font);
    }

    main {
        padding: 2rem 0;
        margin-top: 5rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: serif;
        font-family: var(--header-font);
    }

    .container {
        width: 96vw;
        max-width: 1200px;
        margin: 0 auto;
    }

    .hide {
        display: none !important;
    }
`;