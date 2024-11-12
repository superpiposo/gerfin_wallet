"use server ";
import { toast } from "sonner";
import { Signup_Store } from "./Signup.store";
import { User_Service } from "@/services/database/user/User.service";
import { Client_User_Service } from "@/services/client/gerfin_api/user/Client_User.service";

export class Signup_Service {
  private user_service: User_Service;
  private client_user_service: Client_User_Service;
  constructor() {
    this.user_service = new User_Service();
    this.client_user_service = new Client_User_Service();
  }
  async signup() {
    const credentials = this.valid_credentials();
    if (!credentials || credentials.email.length < 5) return;
    const new_user = await this.client_user_service.create(
      credentials.name,
      credentials.email,
      credentials.password
    );
    console.log(new_user);
    if (new_user) {
      toast.success("Usuario criado com sucesso");
      return;
    }
  }
  async exists(email: string): Promise<boolean> {
    const user = await this.user_service.findByEmail(email);
    if (!user) return false;
    return true;
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
