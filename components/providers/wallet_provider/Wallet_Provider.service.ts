import { Transaction_Store } from "@/global_stores/Transaction.store";
import { User_Store } from "@/global_stores/User.store";
import { Wallet_Store } from "@/global_stores/Wallet.store";
import { Client_Wallet_Service } from "@/services/client/gerfin_api/wallet/Client_Wallet.service";
import { toast } from "sonner";

const client_wallet_service = new Client_Wallet_Service();
export class Wallet_Provider_Service {
  async start() {
    try {
      const { set_wallet, get_wallet, set_get_wallet } =
        Wallet_Store.getState();
      const { set_get_transactions } = Transaction_Store.getState();
      const { user } = User_Store.getState();
      if (!get_wallet) return;
      if (!user) {
        throw new Error("usuario não salvo no estado global!");
      }
      const res = await client_wallet_service.findByUserId(user?.id);
      set_wallet(res.res);
      set_get_transactions(true);
      set_get_wallet(false);
      return;
    } catch (error) {
      console.error({ error });
      toast.error("Algo deu errado com o Wallet_Provider!");
    }
  }
}
