import { Transaction_Store } from "@/global_stores/Transaction.store";
import { DateValueType } from "react-tailwindcss-datepicker";

export class Filter_Service {
  change_filter_date(data: DateValueType) {
    const { set_filtred_dates } = Transaction_Store.getState();
    set_filtred_dates(data);
  }
  reset_filter() {
    const { set_filtred_dates, set_get_transactions } =
      Transaction_Store.getState();
    set_filtred_dates({
      startDate: null,
      endDate: null,
    });
    set_get_transactions(true);
  }

  async filter_date() {
    const { set_get_transactions, set_skip, filtred_dates } =
      Transaction_Store.getState();
    if (!filtred_dates?.startDate || !filtred_dates.endDate) return;
    set_skip(0);
    set_get_transactions(true);
  }
}
