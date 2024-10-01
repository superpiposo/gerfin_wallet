export interface CreateTransaction {
  value: number;
  typeId: number;
  walletId: number;
}

export interface Transaction extends CreateTransaction {
  created_at: string;
  updated_at: string;
}
