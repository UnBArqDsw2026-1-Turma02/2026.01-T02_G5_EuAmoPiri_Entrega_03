import { Command } from "../command/Command";
import { SistemaTurismo } from "../receiver/SistemaTurismo";

export class CadastrarLocalCommand implements Command {

    constructor(
        private sistema: SistemaTurismo,
        private nomeLocal: string
    ) { }

    executar(): void {
        this.sistema.cadastrarLocal(this.nomeLocal);
    }
}