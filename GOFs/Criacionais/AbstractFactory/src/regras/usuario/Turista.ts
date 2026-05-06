import { Usuario } from "./Usuario";

export class Turista extends Usuario {

    criarRelato(): void {
        console.log("Relato criado");
    }

    comentar(): void {
        console.log("Comentário adicionado");
    }
}