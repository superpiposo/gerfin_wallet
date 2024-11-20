import { Session_Store } from "@/global_stores/Session.store";
import { Navbar_Store } from "./Navbar.store";
import { Tool_Panel_Service } from "../tool_panel/Tool_Panel.service";

const tool_panel_service = new Tool_Panel_Service();

export class Navbar_Service {
  toggle_navbar() {
    const { set_toggle, toggle } = Navbar_Store.getState();
    set_toggle(!toggle);
  }

  change_session_to_filter() {
    tool_panel_service.change_tool_panel("filter");
  }

  logout() {
    const { set_logout } = Session_Store.getState();
    set_logout(true);
  }
}
