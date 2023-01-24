import styles from "./Login.module.css";
import InputControl from "../inputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  styleReset,
  TextInput,
  Button,
  Avatar,
  Frame,
  Window,
  WindowHeader,
  Toolbar,
  WindowContent,
} from "react95";
import Style from "../home/Home.scss";
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

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({ email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const Iniciar = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Datos incompletos");

      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/dashboard");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className={styles.container}>
      <GlobalStyles />
      <ThemeProvider theme={peggysPastels}>
        <Window className="window2">
          <WindowHeader active={false} className="window-title">
            <span>login.module.css</span>
            <Link to="/"><Button>
              <span className="close-icon" />
            </Button></Link> 
          </WindowHeader>
          <WindowContent>
            <div className={styles.innerBox}>
              <div className={styles.innerBoxInputs}>
                <h1 className={styles.heading}>Login</h1>
                
                <TextInput
                  style={{ marginBottom: "0.5rem", lineHeight: "1.5" }}
                  autoComplete="email"
                  type="email"
                  label="Email"
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                  placeholder="Ingrese su correo"
                  fullWidth
                />
                <TextInput
                autoComplete="password"
                  type="password"
                  label="Contraseña"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, pass: event.target.value }))
                  }
                  placeholder="Ingrese su contraseña"
                  fullWidth
                />
              </div>

              <div className={styles.innerBoxBtn}>
                <Avatar
                  style={{ marginTop: "1rem" }}
                  square
                  size={70}
                  src="https://picsum.photos/200"
                />
                <Button
                  size="lg"
                  onClick={Iniciar} 
                  disabled={submitButtonDisabled}
                >
                  Guardar
                </Button>
              </div>
            </div>
          </WindowContent>
          <div className={styles.footer}>
            <p className={styles.footerTitle}>
              ¿No tienes cuenta?
              <span className={styles.loginSpan}>
                <Link to="/signup"> Crear Cuenta</Link>
              </span>
              <b className={styles.error}>{errorMsg}</b>
            </p>
          </div>
        </Window> 
      </ThemeProvider>
      <MainFooter/>
    </div>
  );
};

export default Login;
