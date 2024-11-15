import { Navbar_Store } from "./Navbar.store";

export class Navbar_Service {
  toggle_navbar() {
    const { set_toggle, toggle } = Navbar_Store.getState();
    set_toggle(!toggle);
  }
}
