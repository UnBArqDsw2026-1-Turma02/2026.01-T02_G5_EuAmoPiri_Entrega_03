import { Command } from "../command/Command";

export class PainelUsuario {

    executarComando(comando: Command): void {
        comando.executar();
    }
}