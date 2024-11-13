"use client";

import React, { ReactNode, useEffect } from "react";
import { Wallet_Provider_Service } from "./Wallet_Provider.service";
import { User_Store } from "@/global_stores/User.store";

const wallet_provider_service = new Wallet_Provider_Service();

export default function Wallet_Provider({ children }: { children: ReactNode }) {
  const { user } = User_Store();
  useEffect(() => {
    wallet_provider_service.start();
  }, [user]);
  return <>{children}</>;
}
