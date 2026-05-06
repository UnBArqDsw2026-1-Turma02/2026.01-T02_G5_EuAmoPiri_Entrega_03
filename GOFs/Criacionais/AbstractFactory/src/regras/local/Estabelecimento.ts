import { Local } from "./Local";

export class Estabelecimento extends Local {
    exibirLocal(): void {
        console.log(` °°°° Estabelecimento °°°°`);
        console.log(`\n`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Endereço: ${this.rua}`);
        console.log(`CEP: ${this.cep}`);
    }
}