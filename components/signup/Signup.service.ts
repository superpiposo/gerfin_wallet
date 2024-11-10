import { toast } from "sonner";
import { Signup_Store } from "./Signup.store";

export class Signup_Service {
  async signup() {
    const credentials = this.valid_credentials();
    if (!credentials?.valid) {
      return;
    }
  }
  valid_credentials() {
    const { name, email, password, re_password } = Signup_Store.getState();
    if (
      !name ||
      name?.length < 5 ||
      !email ||
      email.length < 5 ||
      !password ||
      password.length < 8 ||
      !re_password ||
      re_password !== password
    ) {
      toast.warning("Por favor verifique os dados!");
    } else {
      return { name, email, password, valid: true };
    }
  }
  change_name(name: string) {
    const { set_name } = Signup_Store.getState();
    set_name(name);
  }
  change_email(email: string) {
    const { set_email } = Signup_Store.getState();
    set_email(email);
  }
  change_passowrd(password: string) {
    const { set_password } = Signup_Store.getState();
    set_password(password);
  }
  change_re_passowrd(re_password: string) {
    const { set_re_password } = Signup_Store.getState();
    set_re_password(re_password);
  }
  reset_state() {
    const { set_email, set_name, set_password, set_re_password } =
      Signup_Store.getState();
    set_email(undefined);
    set_name(undefined);
    set_password(undefined);
    set_re_password(undefined);
  }
}
