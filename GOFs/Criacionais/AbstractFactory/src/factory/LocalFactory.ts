import { Local } from "../regras/local/Local";

export abstract class LocalFactory {
    abstract criarLocal(
        acao: string,
        nome: string,
        descricao: string,  
        tipo: string,  
        rua: string, 
        cep: number
    ): Local;
}