import { LocalFactory } from "./LocalFactory";
import { Local } from "../regras/local/Local";
import { Estabelecimento } from "../regras/local/Estabelecimento";
import { PontoTuristico } from "../regras/local/PontoTuristico";

export class LocalFactorySistema implements LocalFactory {

    criarLocal(tipo: string): Local {
        switch (tipo.toLowerCase()) {

            case "estabelecimento":
                return new Estabelecimento(
                    "Piri Lounge",
                    "Bar em Piri",
                    "Zona Rural Fazenda Fogaça",
                    "72980-000"
                );

            case "pontoturistico":
                return new PontoTuristico(
                    "Cachoeira do Abade",
                    "Lugar pra dar uns mergulhos",
                    "Rua Pirineus",
                    "72980-000"
                );

            default:
                throw new Error("Tipo inválido");
        }
    }
}