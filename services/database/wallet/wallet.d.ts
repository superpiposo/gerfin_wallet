export interface CreateWallet {
  value: number;
  score: number;
  userId: number;
}

export interface Wallet extends CreateWallet {
  id: number;
  created_ad: string;
  updated_at: string;
}
