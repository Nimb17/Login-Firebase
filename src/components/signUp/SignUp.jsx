import styles from "./SignUp.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "../inputControl/InputControl";
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

const SignUp = () => {
  const navigate = useNavigate();
  const [values, setvalues] = useState({ name: "", email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const registro = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Llene todos los campos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
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
            <span>SignUp.jsx</span>
           <Link to="/"><Button>
              <span className="close-icon" />
            </Button></Link> 
          </WindowHeader>
          <WindowContent>
            <div className={styles.innerBox}>
              <div className={styles.innerBoxInputs}>
                <h1 className={styles.heading}>SignUp</h1>
                <TextInput
                  style={{ marginBottom: "0.5rem", lineHeight: "1.5" }}
                  autoComplete="name"
                  type="text"
                  label="Nombre"
                  placeholder="Ingrese un nombre"
                  onChange={(event) =>
                    setvalues((prev) => ({ ...prev, name: event.target.value }))
                  }
                  fullWidth
                />
                <TextInput
                  style={{ marginBottom: "0.5rem", lineHeight: "1.5" }}
                  autoComplete="email"
                  type="email"
                  label="Email"
                  placeholder="Ingrese un correo"
                  onChange={(event) =>
                    setvalues((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                  fullWidth
                />
                <TextInput
                  type="password"
                  label="Contraseña"
                  placeholder="Ingrese una contraseña"
                  onChange={(event) =>
                    setvalues((prev) => ({ ...prev, pass: event.target.value }))
                  }
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
                  onClick={registro}
                  disabled={submitButtonDisabled}
                >
                  Guardar
                </Button>
              </div>
            </div>
          </WindowContent>
          <div className={styles.footer}>
            <p className={styles.footerTitle}>
              Si tienes una cuenta ir a
              <span className={styles.loginSpan}>
                <Link to="/login"> Login</Link>
              </span>
              <b className={styles.error}>{errorMsg}</b>
            </p>
          </div>
        </Window>
        
      </ThemeProvider>
      <div className="overlay"></div>
      <div className="overlay glitch"></div>
      <MainFooter/>
    </div>
  );
};

export default SignUp;
