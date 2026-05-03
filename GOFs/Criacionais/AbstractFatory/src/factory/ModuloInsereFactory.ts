import { Insere } from "../domain/interacao/Insere";

export interface ModuloInsereFactory {
    criarInteracao(tipo: string): Insere;
}