import { ModuloInsereFactory } from "./ModuloInsereFactory";
import { Insere } from "../domain/interacao/Insere";
import { InsereRelato } from "../domain/interacao/InsereRelato";
import { InsereAnuncio } from "../domain/interacao/InsereAnuncio";

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