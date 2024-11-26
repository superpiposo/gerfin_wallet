"use client";

import React from "react";
import { Navbar_Store } from "./Navbar.store";
import { Navbar_Service } from "./Navbar.service";
import Button_Extended from "@/components/shared/Button_Extended";

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
        className="relative flex landscape:flex-col portrait:flex-row px-4 py-3 
      rounded-md bg-stone-200 dark:bg-stone-900 gap-2"
      >
        <Button_Extended
          text="menu"
          color="blue"
          icon="config"
          size="medium"
          onClick={() => {
            navbar_service.toggle_navbar();
          }}
        />
        {toggle && (
          <>
            <Button_Extended
              title="Filtre as transações por data!"
              size="medium"
              text="filtro"
              icon="filtro"
              color="blue"
              onClick={() => {
                navbar_service.change_session_to_filter();
              }}
            />
            <Button_Extended
              title="Configuração de conta"
              size="medium"
              text="Conta"
              icon="profile"
              color="blue"
            />
            <Button_Extended
              title={!dark ? "Modo escuro" : "Modo claro"}
              size="medium"
              text="tema"
              icon={!dark ? "moon" : "sun"}
              color="blue"
              onClick={() => {
                darkModeHandler();
              }}
            />
            <Button_Extended
              title="Sair da conta"
              size="medium"
              text="logout"
              icon={"logout"}
              color="red"
              onClick={() => {
                navbar_service.logout();
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
