import { Pessoa } from "./Pessoa";
import { Local } from "../local/Local";

export class Morador extends Pessoa {

    cadastrarLocal(local: Local): void {
        console.log("Morador cadastrando local...");
        local.exibirLocal();
    }

    criarAnuncio(): void {
        console.log("Anúncio criado");
    }
}