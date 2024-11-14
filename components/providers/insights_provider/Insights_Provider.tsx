"use client";

import { Transaction_Store } from "@/global_stores/Transaction.store";
import React, { ReactNode, useEffect } from "react";
import { Insights_Provider_Service } from "./Insights_Provider.service";

const insights_provider_service = new Insights_Provider_Service();

export default function Insights_Provider({
  children,
}: {
  children: ReactNode;
}) {
  const { transactions } = Transaction_Store();
  useEffect(() => {
    insights_provider_service.feed_insights();
  }, [transactions]);
  return <>{children}</>;
}
