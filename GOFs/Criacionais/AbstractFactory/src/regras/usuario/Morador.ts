import { Usuario} from "./Usuario";
import { Local } from "../local/Local";

export class Morador extends Usuario {

    cadastrarLocal(local: Local): void {
        console.log("Morador cadastrando local...");
        local.exibirLocal();
    }

    criarAnuncio(): void {
        console.log("Anúncio criado");
    }
}