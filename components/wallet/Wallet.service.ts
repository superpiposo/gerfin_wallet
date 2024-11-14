import { Transaction_Store } from "@/global_stores/Transaction.store";
import { Client_Transaction_Service } from "@/services/client/gerfin_api/transaction/Client_Transaction.service";
import { toast } from "sonner";

const client_transaction_service = new Client_Transaction_Service();
export class Wallet_Service {
  async delete_transaction(id: number) {
    const { set_get_transactions } = Transaction_Store.getState();
    try {
      const res = await client_transaction_service.delete(id);
      if (res) {
        toast.success("Transação removida com sucesso");
        set_get_transactions(true);
      }
    } catch (error) {
      console.error(error);
      toast.error("Transação não removida!");
    }
  }
}
