import { Local } from "../local/Local";
import { Usuario } from "./Usuario";

export class UsuarioMorador extends Usuario {

    cadastrarLocal(local: Local): void {
        console.log("Morador cadastrando local...");
        local.exibirLocal();
    }

    criarAnuncio(): void {
        console.log("Anúncio criado");
    }
}