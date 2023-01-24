import styles from "./DashBoard.module.css"
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  styleReset,
  Button,
  Frame,
  Window,
  WindowHeader,
  Toolbar,
  WindowContent,
} from "react95";
import {AppBars} from "../AppBar.jsx"
// pick a theme of your choice
import peggysPastels from "react95/dist/themes/peggysPastels";
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import MainFooter from "../Footer";
import sizod from "../../assets/siZod.jpg"



const GlobalStyles = createGlobalStyle`

  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

function salir() {
  return auth.signOut();
  navigate("/");
}

const DashBoard = () => {
  return (
  
  <div className={styles.container}>
  <div className="overlay"></div>
  <div className="overlay glitch"></div>
  <GlobalStyles />
  <ThemeProvider theme={peggysPastels}>
    <div className="containerMain">
      <AppBars/> <img className={styles.centerImg } src={sizod} alt="SIII ZOOOD" />
    </div>  
   
  </ThemeProvider>
  <MainFooter/>
</div>
  )
}

export default DashBoard