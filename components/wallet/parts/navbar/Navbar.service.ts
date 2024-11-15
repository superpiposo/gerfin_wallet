import { Session_Store } from "@/global_stores/Session.store";
import { Navbar_Store } from "./Navbar.store";

export class Navbar_Service {
  toggle_navbar() {
    const { set_toggle, toggle } = Navbar_Store.getState();
    set_toggle(!toggle);
  }
  logout() {
    const { set_logout } = Session_Store.getState();
    set_logout(true);
  }
}
