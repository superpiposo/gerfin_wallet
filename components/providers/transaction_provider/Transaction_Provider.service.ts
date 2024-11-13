import { Transaction_Store } from "@/global_stores/Transaction.store";
import { Wallet_Store } from "@/global_stores/Wallet.store";
import { Client_Transaction_Service } from "@/services/client/gerfin_api/transaction/Client_Transaction.service";
import { toast } from "sonner";

const client_transaction_service = new Client_Transaction_Service();
export class Transaction_Provider_Service {
  async start() {
    try {
      const { wallet } = Wallet_Store.getState();
      const { set_transactions, skip, take } = Transaction_Store.getState();
      if (!wallet || !wallet.id || wallet.id < 0) return;
      const transactions = await client_transaction_service.getManny(
        wallet.id,
        take,
        skip
      );
      if (transactions.length > 0) {
        set_transactions(transactions);
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro no Transaction Provider");
    }
  }
}
