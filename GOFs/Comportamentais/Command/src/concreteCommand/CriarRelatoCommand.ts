import { Command } from "../command/Command";
import { SistemaTurismo } from "../receiver/SistemaTurismo";

export class CriarRelatoCommand implements Command {

    constructor(
        private sistema: SistemaTurismo,
        private relato: string
    ) { }

    executar(): void {
        this.sistema.criarRelato(this.relato);
    }
}