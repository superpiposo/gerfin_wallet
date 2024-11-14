import { Form_Transaction_Store } from "./Form_Transaction.store";

export class Form_Transaction_Service {
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
