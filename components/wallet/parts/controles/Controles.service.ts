import { Form_Transaction_Service } from "../tool_panel/parts/form_transaction/Form_Transaction.service";
import { Tool_Panel_Service } from "../tool_panel/Tool_Panel.service";
import { Tool_Panel_Store } from "../tool_panel/Tool_Panel.store";

const tool_panel_service = new Tool_Panel_Service();
const form_transaction_service = new Form_Transaction_Service();
export class Controles_Service {
  async create_transaction() {
    await tool_panel_service.create_transaction();
    this.change_tool_panel_insights();
  }
  change_tool_panel_insights() {
    const { set_session } = Tool_Panel_Store.getState();
    set_session("insights");
  }
  change_tool_panel_form_transaction(transaction_type: number) {
    const { set_session } = Tool_Panel_Store.getState();
    set_session("form_transaction");
    form_transaction_service.change_transaction_type(transaction_type);
  }

  save_transaction() {}

  cancel_transaction() {
    const { set_session } = Tool_Panel_Store.getState();
    form_transaction_service.reset_all();
    set_session("insights");
  }
}
