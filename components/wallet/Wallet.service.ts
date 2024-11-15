import { Transaction_Store } from "@/global_stores/Transaction.store";
import { Wallet_Store } from "@/global_stores/Wallet.store";
import { Client_Transaction_Service } from "@/services/client/gerfin_api/transaction/Client_Transaction.service";
import { toast } from "sonner";
import { Form_Transaction_Service } from "./parts/tool_panel/parts/form_transaction/Form_Transaction.service";
import { Form_Transaction_Store } from "./parts/tool_panel/parts/form_transaction/Form_Transaction.store";

const client_transaction_service = new Client_Transaction_Service();
const form_transaction_service = new Form_Transaction_Service();
export class Wallet_Service {
  async create_transaction() {
    const { description, date, value, transaction_type } =
      Form_Transaction_Store.getState();
    const { wallet, set_get_wallet } = Wallet_Store.getState();
    const { set_get_transactions } = Transaction_Store.getState();
    if (
      !description ||
      description.length < 3 ||
      !date ||
      !value ||
      !transaction_type ||
      !wallet ||
      !wallet.id
    ) {
      toast.warning("Verifique os dados da transação!");
      return;
    } else {
      await client_transaction_service.create({
        description,
        value: value,
        walletId: wallet.id,
        typeId: transaction_type,
        date: date,
      });
      set_get_transactions(true);
      set_get_wallet(true);
      form_transaction_service.reset_all();
      return;
    }
  }

  async delete_transaction(id: number) {
    const { set_get_transactions } = Transaction_Store.getState();
    const { set_get_wallet } = Wallet_Store.getState();
    try {
      const res = await client_transaction_service.delete(id);
      if (res) {
        toast.success("Transação removida com sucesso");
        set_get_transactions(true);
        set_get_wallet(true);
      }
    } catch (error) {
      console.error(error);
      toast.error("Transação não removida!");
    }
  }
}
