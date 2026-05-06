import { Local } from "./Local";

export class PontoTuristico extends Local {
    exibirLocal(): void {
        console.log(` °°° Ponto Turístico °°° `);
        console.log(`\n`);
        console.log(`Local: ${this.nome} (${this.tipo})`);
        console.log(`O que é: ${this.descricao}`);
        console.log(`Como chegar: ${this.rua}`);
        console.log(`CEP: ${this.cep}`);
    }
}