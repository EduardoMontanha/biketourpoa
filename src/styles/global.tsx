import { createGlobalStyle } from 'styled-components';
import './reset.css';

export default createGlobalStyle`
    :root {
        --dark-grey: #313638;
        --green: #209052;
        --light-grey: #E8E9EB;
        --pink: #EB1265;
        --yellow: #EFEF16;
    }

    body {
        background-color: var(--light-grey);
    }

    .hide {
        display: none !important;
    }
`;