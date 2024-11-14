import { toast } from "sonner";
import { Form_Transaction_Store } from "./Form_Transaction.store";
import { Client_Transaction_Service } from "@/services/client/gerfin_api/transaction/Client_Transaction.service";
import { Wallet_Store } from "@/global_stores/Wallet.store";

const client_transaction_service = new Client_Transaction_Service();

export class Form_Transaction_Service {
  async create_transaction() {
    const { description, date, value, transaction_type } =
      Form_Transaction_Store.getState();
    const { wallet } = Wallet_Store.getState();
    if (
      !description ||
      description.length < 3 ||
      !date ||
      date.length < 5 ||
      !value ||
      value < 0 ||
      !transaction_type ||
      transaction_type < 1 ||
      !wallet ||
      !wallet.id
    ) {
      toast.warning("Verifique os dados da transação!");
      return;
    } else {
      const res = await client_transaction_service.create({
        typeId: transaction_type,
        description,
        value: value,
        walletId: wallet.id,
      });
      console.log(res);
      this.reset_all();
      return;
    }
  }
  change_description(e: string) {
    const { set_description } = Form_Transaction_Store.getState();
    set_description(e);
  }
  change_date(e: string) {
    const { set_date } = Form_Transaction_Store.getState();
    set_date(e);
  }
  change_value(e: number) {
    const { set_value } = Form_Transaction_Store.getState();
    set_value(e);
  }
  change_transaction_type(e: number) {
    const { set_transaction_type } = Form_Transaction_Store.getState();
    set_transaction_type(e);
  }
  reset_all() {
    const { set_date, set_description, set_transaction_type, set_value } =
      Form_Transaction_Store.getState();
    set_date(null);
    set_description(null);
    set_transaction_type(null);
    set_value(null);
  }
}
