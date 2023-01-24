import { useState } from "react";
import { auth } from "../firebase";
import logoIMG from "./logoIMG.png";
import { Separator, Button, AppBar, Toolbar, TextInput,MenuList, MenuListItem } from "react95";
import { Link, useNavigate } from "react-router-dom";

 export function AppBars(props) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function salir() {
    auth.signOut().then(() => {
        navigate("/")
    })
}

  return (
    <AppBar>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: "bold" }}
          >
            <img
              src={logoIMG}
              alt="react95 logo"
              style={{ height: "20px", marginRight: 4 }}
            />
            Start
          </Button>
          {open && (
            <MenuList
              style={{
                position: "absolute",
                left: "0",
                top: "100%",
              }}
              onClick={() => setOpen(false)}
            >
              <MenuListItem disabled>
                <span role="img" aria-label="👨‍💻">
                  👨‍💻
                </span>
                Profile
              </MenuListItem>
              <MenuListItem disabled>
                <span  role="img" aria-label="📁">
                  📁
                </span>
                My account
              </MenuListItem>
              <Separator />
              <MenuListItem onClick={salir}>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Logout
              </MenuListItem>
            </MenuList>
          )}
        </div>

        <TextInput placeholder="Search..." width={150} />
      </Toolbar>
    </AppBar>
  );
}

