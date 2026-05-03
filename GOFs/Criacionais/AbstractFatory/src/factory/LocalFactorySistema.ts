import { LocalFactory } from "./LocalFactory";
import { Local } from "../domain/local/Local";
import { Estabelecimento } from "../domain/local/Estabelecimento";
import { PontoTuristico } from "../domain/local/PontoTuristico";

export class LocalFactorySistema implements LocalFactory {

    criarLocal(tipo: string): Local {
        switch (tipo.toLowerCase()) {

            case "estabelecimento":
                return new Estabelecimento(
                    /*"Piri Lounge",
                    "Bar em Piri",
                    "Zona Rural Fazenda Fogaça",
                    "72980-000"*/ // Local teste
                );

            case "pontoturistico":
                return new PontoTuristico(
                    /*"Cachoeira do Abade",
                    "Lugar pra dar uns mergulhos",
                    "Rua Pirineus",
                    "72980-000"*/ // Local teste
                );

            default:
                throw new Error("Tipo inválido");
        }
    }
}