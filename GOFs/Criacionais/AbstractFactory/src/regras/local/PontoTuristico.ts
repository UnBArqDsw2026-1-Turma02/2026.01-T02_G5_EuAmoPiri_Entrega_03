import { Local } from "./Local";

export class PontoTuristico extends Local {

    exibirLocal(): void {
        console.log(`Ponto Turístico: ${this.nome}`);
    }
}