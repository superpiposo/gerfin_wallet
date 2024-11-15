"use client";

import React, { ReactNode, useEffect } from "react";
import { Session_Provider_Service } from "./Session_Provider.service";

const session_provider_service = new Session_Provider_Service();

export default function Session_Provider({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    session_provider_service.validate_state();
  }, []);
  return <>{children}</>;
}
