import { Wallet_Store } from "@/global_stores/Wallet.store";
import React, { ReactNode, useEffect } from "react";
import { Transaction_Provider_Service } from "./Transaction_Provider.service";

const transaction_provider_service = new Transaction_Provider_Service();

export default function Transaction_Provider({
  children,
}: {
  children: ReactNode;
}) {
  const { wallet } = Wallet_Store();
  useEffect(() => {
    transaction_provider_service.start();
  }, [wallet]);
  return <>{children}</>;
}
