import { Local } from "./Local";

export class Estabelecimento extends Local {

    exibirLocal(): void {
        console.log(`Estabelecimento: ${this.nome}`);
    }
}