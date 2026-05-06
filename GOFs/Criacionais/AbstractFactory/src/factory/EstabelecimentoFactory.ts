import { Local } from "../regras/local/Local";
import { Estabelecimento } from "../regras/local/Estabelecimento";
import { LocalFactory } from "./LocalFactory";

export class EstabelecimentoFactory extends LocalFactory {
    criarLocal(acao: string, nome: string, descricao: string, tipo: string, rua: string, cep: number): Local {
        return new Estabelecimento(nome, descricao, tipo, rua, cep);
    }
}