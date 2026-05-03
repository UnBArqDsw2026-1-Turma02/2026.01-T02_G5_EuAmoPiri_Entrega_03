import { Local } from "../domain/local/Local";

export interface LocalFactory {
    criarLocal(tipo: string): Local;
}