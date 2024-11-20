"use client";

import React from "react";
import { Tool_Panel_Store } from "./Tool_Panel.store";
import Insights from "./parts/insights/Insights";
import Form_Transaction from "./parts/form_transaction/Form_Transaction";
import Tool_Panel_Container from "./parts/tool_panel_container/Tool_Panel_Container";
import Filter from "./parts/filter/Filter";

export default function Tool_Panel() {
  const { session } = Tool_Panel_Store();
  return (
    <Tool_Panel_Container>
      {session === "summary" && <Insights />}
      {session === "form_transaction" && <Form_Transaction />}
      {session === "filter" && <Filter />}
    </Tool_Panel_Container>
  );
}
