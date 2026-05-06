import { Local } from "../regras/local/Local";
import { PontoTuristico } from "../regras/local/PontoTuristico";
import { LocalFactory } from "./LocalFactory";

export class PontoTuristicoFactory extends LocalFactory {
   
    criarLocal(acao: string, nome: string, descricao: string, tipo: string, rua: string, cep: number): Local {
        return new PontoTuristico(nome, descricao, tipo, rua, cep);
    }
}