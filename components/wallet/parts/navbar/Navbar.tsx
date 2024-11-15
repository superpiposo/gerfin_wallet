"use client";

import Button from "@/components/shared/Button";
import React from "react";
import { Navbar_Store } from "./Navbar.store";
import { Navbar_Service } from "./Navbar.service";

const navbar_service = new Navbar_Service();

export default function Navbar() {
  const [dark, setDark] = React.useState(false);
  const { toggle } = Navbar_Store();
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="absolute landscape:right-5 landscape:top-5 portrait:top-2">
      <div
        className="relative flex landscape:flex-col portrait:flex-row p-2 
      rounded-md bg-stone-300 dark:bg-stone-700 gap-2"
      >
        <Button
          text="toggle"
          color="blue"
          icon="config"
          size="medium"
          onClick={() => {
            navbar_service.toggle_navbar();
          }}
        />
        {toggle && (
          <>
            <Button
              title="Configuração de conta"
              size="medium"
              text="profile"
              icon="profile"
              color="blue"
            />
            <Button
              title={!dark ? "Modo escuro" : "Modo claro"}
              size="medium"
              text="profile"
              icon={!dark ? "moon" : "sun"}
              color="blue"
              onClick={() => {
                darkModeHandler();
              }}
            />
            <Button
              title="Sair da conta"
              size="medium"
              text="logout"
              icon={"logout"}
              color="red"
              onClick={() => {
                darkModeHandler();
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
