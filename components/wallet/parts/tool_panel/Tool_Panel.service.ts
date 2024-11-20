import { Tool_Panel_Store } from "./Tool_Panel.store";

export class Tool_Panel_Service {
  change_tool_panel(session: string) {
    const { set_session } = Tool_Panel_Store.getState();
    switch (session) {
      case "summary": {
        set_session("summary");
        break;
      }
      case "form_transaction": {
        set_session("form_transaction");
        break;
      }
      case "filter": {
        set_session("filter");
        break;
      }
      default: {
        set_session("summary");
        break;
      }
    }
  }
}
