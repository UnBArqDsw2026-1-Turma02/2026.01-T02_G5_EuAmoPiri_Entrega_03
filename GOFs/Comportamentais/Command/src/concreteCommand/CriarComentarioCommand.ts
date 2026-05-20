import { Command } from "../command/Command";
import { SistemaTurismo } from "../receiver/SistemaTurismo";

export class CriarComentarioCommand implements Command {

    constructor(
        private sistema: SistemaTurismo,
        private comentario: string
    ) { }

    executar(): void {
        this.sistema.criarComentario(this.comentario);
    }
}