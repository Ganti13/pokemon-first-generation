import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: #008294;
}

:root{
    --background-color: #008294;
    --background-color2: #2c2c2c;
    --font-color: #4c2d58; 
    --font-color2: #fffe5c;
    --font-color-card: #fff; 
	--font-color-card2: #fff555; 
    --font-color-card3: #add8e6;
    --card-color: #00a2b8;
    --card-color2: #005d6d;
}
`;

export default GlobalStyles;