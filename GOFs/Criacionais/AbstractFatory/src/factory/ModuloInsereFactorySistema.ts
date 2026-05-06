import { ModuloInsereFactory } from "./ModuloInsereFactory";
import { Insere } from "../regras/interacao/Insere";
import { InsereRelato } from "../regras/interacao/InsereRelato";
import { InsereAnuncio } from "../regras/interacao/InsereAnuncio";

export class ModuloInsereFactorySistema implements ModuloInsereFactory {

    criarInteracao(tipo: string): Insere {
        switch (tipo.toLowerCase()) {

            case "relato":
                return new InsereRelato();

            case "anuncio":
                return new InsereAnuncio();

            default:
                throw new Error("Tipo inválido");
        }
    }
}