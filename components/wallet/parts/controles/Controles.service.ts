import { Wallet_Service } from "../../Wallet.service";
import { Form_Transaction_Service } from "../tool_panel/parts/form_transaction/Form_Transaction.service";
import { Tool_Panel_Service } from "../tool_panel/Tool_Panel.service";

const wallet_service = new Wallet_Service();
const form_transaction_service = new Form_Transaction_Service();
const tool_panel_service = new Tool_Panel_Service();

export class Controles_Service {
  async create_transaction() {
    await wallet_service.create_transaction();
    this.change_tool_panel_insights();
  }
  change_tool_panel_insights() {
    tool_panel_service.change_tool_panel("summary");
  }
  change_tool_panel_form_transaction(transaction_type: number) {
    tool_panel_service.change_tool_panel("form_transaction");
    form_transaction_service.change_transaction_type(transaction_type);
  }

  save_transaction() {}

  cancel_transaction() {
    form_transaction_service.reset_all();
    tool_panel_service.change_tool_panel("summary");
  }
}
