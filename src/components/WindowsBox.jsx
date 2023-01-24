import React from "react";
import {
  Button,
  Frame,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import style from "./WindowsBox.css";
import { Link } from "react-router-dom";

export function WindowsBox() {
  return (
    <>
      <Window resizable className="window">
        <WindowHeader className="window-title">
          <span>react95.exe</span>
          <Button>
            <span className="close-icon" />
          </Button>
        </WindowHeader>
        {/* <Toolbar>
          <Button variant='menu' size='sm'>
            File
          </Button>
          <Button variant='menu' size='sm'>
            Edit
          </Button>
          <Button variant='menu' size='sm' disabled>
            Save
          </Button>
        </Toolbar> */}
        <WindowContent>
          <Frame style={{ padding: "1rem", lineHeight: "1.5" }}>
            <div>
              <h1 className="titulo">
                <Link to="/login">Login</Link>
              </h1>
            </div>
            <div>
               <h1 className="titulo">
              <Link to="/signup">Registrar</Link>
            </h1> 
            </div>
            
          </Frame>
        </WindowContent>        
      </Window>
    </>
  );
}
