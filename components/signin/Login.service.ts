import { toast } from "sonner";
import { Login_Store } from "./Login.store";
import { Client_Auth_Service } from "@/services/client/gerfin_api/auth/Client_Auth.service";
import { User_Store } from "@/global_stores/User.store";

const client_auth = new Client_Auth_Service();

export class Login_Service {
  async login() {
    const { set_user } = User_Store.getState();
    try {
      const credentials = this.valid_credentials();
      if (!credentials?.email || !credentials.password) {
        return;
      }
      const res = await client_auth.login(
        credentials.email,
        credentials.password
      );
      set_user(res.data);
      toast.success("Usuario válido!");
      return true;
    } catch (error) {
      console.error(error);
      toast.error("Erro ao fazer o login!");
      return false;
    }
  }
  valid_credentials() {
    const { email, password } = Login_Store.getState();
    if (!email || email?.length < 5 || !password || password.length < 8) {
      toast.error("Usuario ou senha inválidos!");
      return;
    } else {
      return { email, password };
    }
  }
  change_user_email(email: string) {
    const { set_email } = Login_Store.getState();
    set_email(email);
    return;
  }
  change_user_password(password: string) {
    const { set_password } = Login_Store.getState();
    set_password(password);
    return;
  }
}
