import { Btn } from "@src/components/button/Btn";
import React from "react";

import "./header.css";

interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div>
        <img src="/img/logo/logo-en.png" width="100px" />
      </div>
      <div>
        {user ? (
          <Btn size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Btn
              size="small"
              className="mr-2"
              onClick={onLogin}
              label="Log in"
            />
            <Btn size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
