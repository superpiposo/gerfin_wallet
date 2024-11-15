"use client";

import React, { ReactNode, useEffect } from "react";
import { Session_Provider_Service } from "./Session_Provider.service";
import { Session_Store } from "@/global_stores/Session.store";

const session_provider_service = new Session_Provider_Service();

export default function Session_Provider({
  children,
}: {
  children: ReactNode;
}) {
  const { logout } = Session_Store();

  useEffect(() => {
    session_provider_service.validate_state();
  }, []);

  useEffect(() => {
    session_provider_service.logout();
  }, [logout]);
  return <>{children}</>;
}
