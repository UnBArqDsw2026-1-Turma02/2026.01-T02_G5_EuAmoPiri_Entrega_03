import { Insere } from "../regras/interacao/Insere";

export interface ModuloInsereFactory {
    criarInteracao(tipo: string): Insere;
}