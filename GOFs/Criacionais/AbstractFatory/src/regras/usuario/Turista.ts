import { Pessoa } from "./Pessoa";

export class Turista extends Pessoa {

    criarRelato(): void {
        console.log("Relato criado");
    }

    comentar(): void {
        console.log("Comentário adicionado");
    }
}