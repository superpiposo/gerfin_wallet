"use client";

import React from "react";
import { Tool_Panel_Store } from "./Tool_Panel.store";
import Insights from "./parts/insights/Insights";
import Form_Transaction from "./parts/form_transaction/Form_Transaction";
import Tool_Panel_Container from "./parts/tool_panel_container/Tool_Panel_Container";

export default function Tool_Panel() {
  const { session } = Tool_Panel_Store();
  return (
    <Tool_Panel_Container>
      {session === "insights" && <Insights />}
      {session === "form_transaction" && <Form_Transaction />}
    </Tool_Panel_Container>
  );
}
