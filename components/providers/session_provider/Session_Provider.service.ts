import { Session_Store } from "@/global_stores/Session.store";
import { Transaction_Store } from "@/global_stores/Transaction.store";
import { User_Store } from "@/global_stores/User.store";
import { Wallet_Store } from "@/global_stores/Wallet.store";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export class Session_Provider_Service {
  validate_state() {
    const { user } = User_Store.getState();
    if (!user) {
      toast.error("Erro de sessão!");
      redirect("/signin");
    } else {
      return;
    }
  }
  logout() {
    const { logout, set_logout } = Session_Store.getState();
    const { set_user } = User_Store.getState();
    const { set_wallet } = Wallet_Store.getState();
    const { set_transactions } = Transaction_Store.getState();
    if (logout === true) {
      set_transactions([]);
      set_wallet(undefined);
      set_user(undefined);
      set_logout(false);
      redirect("/signin");
    }
    return;
  }
}
