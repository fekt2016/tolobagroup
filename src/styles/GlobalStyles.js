import { createGlobalStyle } from 'styled-components';
import { devicesMax } from './BreakPoint';

const GlobalStyles = createGlobalStyle`:root {
  --color-primary-900: #2c3343;
  --color-primary-700: #4e5a76;
  --color-primary-100: #627195;

  --color-secoundary-900:#e9233e;
  --color-secoundary-800:#ec4259;
  --color-secoundary-700:#ef6174;
  --color-secoundary-100:#f59faa;

  --color-black-900: #000000;
  /* --color-secoundary:#ea2642; */
  --color-white:#fff;
  --color-red-900: #ff4633;
  --color-link:#0B0080;


  --color-gold-900:#ffd700;
  --color-gold-800:#ffda11;
  --color-gold-700:#ffdf33;
  --color-gold-600:#ffe455;
  --color-gold-500:#ffe766;
  --color-gold-400:#ffec88;
  --color-gold-300:#fff4bb;
  --color-gold-200:#fffadd;
  --color-gold-200:#fffcee;




  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-facebook-900: #3b5998;
  --color-twitter-900:#1DA1F2;
  --color-youtube-900:#CD201F;
  --color-tiktok-900:#00f2ea;

  --color-facebook-500: #4060a4;
  --color-twitter-500:#8ED0F8;
  --color-youtube-500:#EB7978;
  --color-tiktok-500:#7bfffb;



  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  --shadow-sm: 0 2px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--shadow-xl: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}
html {
  font-size: 62.5%;

  @media ${devicesMax.lg}{
    font-size: 60%;
  }
}
body {
  font-family: "Poppins", sans-serif;
  /* color: var(--color-primary-900); */

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  width: 100vw;

}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}


button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  /* background-color: var(--color-grey-200);
  color: var(--color-grey-500); */ }

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  /* filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity)); */
}
`;

export default GlobalStyles;
