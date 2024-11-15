import { User_Store } from "@/global_stores/User.store";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export class Session_Provider_Service {
  validate_state() {
    const { user } = User_Store.getState();
    if (!user) {
      toast.error("Erro de sessão!");
      redirect("/signin");
    } else {
      return;
    }
  }
}
