export interface CreateUser {
  nome: string;
  email: string;
  senha: string;
}

export interface User extends CreateUser {
  id: number;
  created_at: string;
  updated_at: string;
}
