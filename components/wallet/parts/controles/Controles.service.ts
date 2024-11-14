import { Tool_Panel_Store } from "../tool_panel/Tool_Panel.store";

export class Controles_Service {
  change_tool_panel_insights() {
    const { set_session } = Tool_Panel_Store.getState();
    set_session("insights");
  }
  change_tool_panel_form_transaction(type_transaction: number) {
    const { set_session } = Tool_Panel_Store.getState();
    set_session("form_transaction");
    if (type_transaction === 1) {
    } else if (type_transaction === 2) {
    }
  }

  save_transaction() {}

  cancel_transaction() {
    const { set_session } = Tool_Panel_Store.getState();
    set_session("insights");
  }
}
