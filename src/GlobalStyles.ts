import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,::after,::before {
 /* background-color: red; */
 margin: 0;
 padding: 0;
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
const DEVICE = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const ContainerHAnimation = styled.div`
  @media ${DEVICE.mobileS} {
    background-color: red;
    transition-delay: 0.3s; /* Add delay for mobileS */
  }
  @media ${DEVICE.mobileM} {
    background-color: green;
    transition-delay: 0.3s; /* Add delay for mobileM */
  }
  @media ${DEVICE.mobileL} {
    background-color: blue;
    transition-delay: 0.3s; /* Add delay for mobileL */
  }
  @media ${DEVICE.tablet} {
    background-color: yellow;
    transition-delay: 0.3s; /* Add delay for tablet */
  }
  @media ${DEVICE.laptop} {
    background-color: orange;
    transition-delay: 0.3s; /* Add delay for laptop */
  }
  @media ${DEVICE.laptopL} {
    background-color: purple;
    transition-delay: 0.3s; /* Add delay for laptopL */
  }
  @media ${DEVICE.desktop} {
    background-color: pink;
    transition-delay: 0.3s; /* Add delay for desktop */
  }
  @media ${DEVICE.desktopL} {
    background-color: brown;
    transition-delay: 0.3s; /* Add delay for desktopL */
  }
`;

const ContainerH = styled(ContainerHAnimation)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  transition: background-color 0.3s ease; /* Add a smooth transition effect */
`;

const ContainerC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ContainerV = styled(ContainerH)`
  flex-direction: column;
`;

export { ContainerC, ContainerH, ContainerV, DEVICE };
export default GlobalStyle;
