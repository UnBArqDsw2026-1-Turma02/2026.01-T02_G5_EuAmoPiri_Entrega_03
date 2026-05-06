import { LocalFactory } from "./LocalFactory";
import { Local } from "../regras/local/Local";
import { Estabelecimento } from "../regras/local/Estabelecimento";
import { PontoTuristico } from "../regras/local/PontoTuristico";

export class LocalFactorySistema implements LocalFactory {

    criarLocal(acao: string, nome: string, descricao: string, tipo: string, rua: string, cep: number): Local {
        
        switch (acao.toLowerCase()) {

            case "estabelecimento": 
                return new Estabelecimento(nome, descricao, tipo, rua, cep);

            case "pontoturistico":
                return new PontoTuristico(nome, descricao, tipo, rua, cep);

            default:
                throw new Error("Tipo inválido");
        }
    }
}