import { User_Store } from "@/global_stores/User.store";
import { Wallet_Store } from "@/global_stores/Wallet.store";
import { Client_Wallet_Service } from "@/services/client/gerfin_api/wallet/Client_Wallet.service";
import { toast } from "sonner";

const client_wallet_service = new Client_Wallet_Service();
export class Wallet_Provider_Service {
  async start() {
    try {
      const { set_wallet } = Wallet_Store.getState();
      const { user } = User_Store.getState();
      if (!user) {
        throw new Error("usuario não salvo no estado global!");
      }
      const res = await client_wallet_service.findByUserId(user?.id);
      console.log(res);
      set_wallet(res);
    } catch (error) {
      console.error({ error });
      toast.error("Algo deu errado com o Wallet_Provider!");
    }
  }
}
