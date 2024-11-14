import { Client_Transaction_Service } from "@/services/client/gerfin_api/transaction/Client_Transaction.service";
import { Form_Transaction_Store } from "./parts/form_transaction/Form_Transaction.store";
import { Wallet_Store } from "@/global_stores/Wallet.store";
import { toast } from "sonner";
import { Form_Transaction_Service } from "./parts/form_transaction/Form_Transaction.service";
import { Transaction_Store } from "@/global_stores/Transaction.store";

const client_transaction_service = new Client_Transaction_Service();
const form_transaction_service = new Form_Transaction_Service();
export class Tool_Panel_Service {
  async create_transaction() {
    const { description, date, value, transaction_type } =
      Form_Transaction_Store.getState();
    const { wallet } = Wallet_Store.getState();
    const { set_get_transactions } = Transaction_Store.getState();
    console.log({ description, date, value, transaction_type });
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
      form_transaction_service.reset_all();
      return;
    }
  }
}
