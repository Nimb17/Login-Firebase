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
import Style from "./Home.scss";
import styled from "../WindowsBox.css";
// pick a theme of your choice
import peggysPastels from "react95/dist/themes/peggysPastels";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import MainFooter from "../Footer";

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
export function Home(props) {
  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="overlay glitch"></div>
      <GlobalStyles />
      <ThemeProvider theme={peggysPastels}>
        <div className="containerMain">
          <Window className="window">
            <WindowHeader className="window-title">
              <span>siZod.exe</span>
              <Button>
                <span className="close-icon" />
              </Button>
            </WindowHeader>
            <WindowContent className="titulo">
              <Link to="/login">
                <Button
                  primary
                  style={{ padding: "1.3rem", lineHeight: "1.5" }}
                >
                  <div>
                    <h1 className="titulo">Login</h1>
                  </div>
                </Button>
              </Link>
              <Link to="/signup">
                <Button style={{ padding: "1.3rem", lineHeight: "1.5" }}>
                  <div>
                    <h1 className="titulo">SignUp</h1>
                  </div>
                </Button>
              </Link>
            </WindowContent>
            <Frame variant="well" className="footer">
              <h2 className="welcomeBar">
                {props.name ? `Bienvenido - ${props.name}` : "Inicie sesión"}
              </h2>
            </Frame>
          </Window>          
        </div>
        {/* <div className="containerImg"> */}
          <div className="scene">
            <div id="plant" className="item"></div>
            <div id="mirror">
              <div id="mirror-content"></div>
            </div>
            <div id="plant-2" className="item"></div>
            <div id="books" className="item">
              <div id="apple" className="item"></div>
            </div>
            <div id="plant-3" className="item"></div>
            <div id="clock" className="item"></div>
          </div>
        {/* </div> */}
      </ThemeProvider>
      <MainFooter/>
    </div>
  );
}
