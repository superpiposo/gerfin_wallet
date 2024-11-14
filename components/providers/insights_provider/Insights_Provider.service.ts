import { Insights_Store } from "@/global_stores/Insights.store";
import { Transaction_Store } from "@/global_stores/Transaction.store";
import { Wallet_Store } from "@/global_stores/Wallet.store";

export class Insights_Provider_Service {
  feed_insights() {
    this.calc_caixa();
    this.calc_entradas();
    this.calc_saidas();
  }
  calc_caixa() {
    const { set_caixa } = Insights_Store.getState();
    const { wallet } = Wallet_Store.getState();
    if (!wallet) return;
    set_caixa(Number(wallet.value));
  }
  calc_entradas() {
    const { set_entradas } = Insights_Store.getState();
    const { transactions } = Transaction_Store.getState();
    let entradas: number = 0;
    if (!transactions || transactions?.length < 1) return;
    transactions.map((transaction) => {
      if (transaction.typeId === 1) {
        entradas = entradas + Number(transaction.value);
      }
    });
    set_entradas(entradas);
  }
  calc_saidas() {
    const { set_saidas } = Insights_Store.getState();
    const { transactions } = Transaction_Store.getState();
    let saidas: number = 0;
    if (!transactions || transactions?.length < 1) return;
    transactions.map((transaction) => {
      if (transaction.typeId === 2) {
        saidas = saidas + Number(transaction.value);
      }
    });
    set_saidas(saidas);
  }
}
