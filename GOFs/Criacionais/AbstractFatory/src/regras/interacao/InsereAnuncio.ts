import { Insere } from "./Insere";

export class InsereAnuncio implements Insere {
    criarInteracao(): string {
        return "Anúncio criado";
    }
}