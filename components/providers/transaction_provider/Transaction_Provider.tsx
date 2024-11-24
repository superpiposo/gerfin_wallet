import React, { ReactNode, useEffect } from "react";
import { Transaction_Provider_Service } from "./Transaction_Provider.service";
import { Transaction_Store } from "@/global_stores/Transaction.store";

const transaction_provider_service = new Transaction_Provider_Service();

export default function Transaction_Provider({
  children,
}: {
  children: ReactNode;
}) {
  const { get_transactions } = Transaction_Store();

  useEffect(() => {
    transaction_provider_service.start();
  }, [get_transactions]);

  return <>{children}</>;
}
