import { Transaction_Store } from "@/global_stores/Transaction.store";
import { Wallet_Store } from "@/global_stores/Wallet.store";
import { Client_Transaction_Service } from "@/services/client/gerfin_api/transaction/Client_Transaction.service";
import { Transaction } from "@prisma/client";
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

  async get_transactions() {
    try {
      const { wallet } = Wallet_Store.getState();
      const {
        set_transactions,
        skip,
        take,
        get_transactions,
        set_get_transactions,
      } = Transaction_Store.getState();
      if (!get_transactions) {
        return;
      }
      if (!wallet || !wallet.id || wallet.id < 0) return;
      const transactions: Transaction[] =
        await client_transaction_service.getManny(wallet.id, take, skip);
      if (transactions && transactions.length > 0) {
        toast.success(`${transactions.length} transações encontradas`);
        const sorted: Transaction[] = this.sort_transactions(transactions);
        set_transactions(sorted);
      } else {
        toast.warning("Nenhuma transação encontrada");
      }
      set_get_transactions(false);
      return;
    } catch (error) {
      console.error(error);
      toast.error("Erro no Transaction Provider");
    }
  }
  sort_transactions(transactions: Transaction[]): Transaction[] {
    const { sorted_by } = Transaction_Store.getState();
    if (sorted_by === "inserted_date") {
      return transactions.sort(this.sortByDate);
    } else {
      return transactions;
    }
  }

  sortByDate(a: Transaction, b: Transaction): number {
    // Compare the date properties
    if (a.date > b.date) {
      return 1;
    } else if (a.date < b.date) {
      return -1;
    } else {
      return 0; // Equal dates
    }
  }
}
