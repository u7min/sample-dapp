import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset}
    body {
      padding: 30px;
    }
`;

export default globalStyles;
