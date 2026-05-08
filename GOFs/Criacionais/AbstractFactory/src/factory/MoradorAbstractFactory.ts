import { ViagemAbstractFactory } from "./ViagemAbstractFactory";

import { Local } from "../regras/local/Local";

export interface MoradorAbstractFactory
    extends ViagemAbstractFactory {

    criarLocal(
        nome: string,
        descricao: string,
        tipo: string,
        rua: string,
        cep: string
    ): Local;
}