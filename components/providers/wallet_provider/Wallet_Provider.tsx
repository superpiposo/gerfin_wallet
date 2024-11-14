"use client";

import React, { ReactNode, useEffect } from "react";
import { Wallet_Provider_Service } from "./Wallet_Provider.service";
import { Wallet_Store } from "@/global_stores/Wallet.store";

const wallet_provider_service = new Wallet_Provider_Service();

export default function Wallet_Provider({ children }: { children: ReactNode }) {
  const { get_wallet } = Wallet_Store();
  useEffect(() => {
    wallet_provider_service.start();
  }, [get_wallet]);
  return <>{children}</>;
}
