import { toast } from "sonner";
import { Login_Store } from "./Login.store";

export class Login_Service {
  async login() {
    const credentials = this.valid_credentials();
    if (!credentials?.email || !credentials.password) {
      return;
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
