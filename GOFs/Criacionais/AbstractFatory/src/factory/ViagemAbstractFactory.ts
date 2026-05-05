import { LocalFactory } from "./LocalFactory";
import { ModuloInsereFactory } from "./ModuloInsereFactory";

export class MinhaViagemFactory implements ViagemAbstractFactory {
    criarFactory(tipo: string): LocalFactory | ModuloInsereFactory | null {
        if (tipo === "local") {
            return new LocalFactory();
        }
        if (tipo === "moduloInsere") {
            return new ModuloInsereFactory();
        }
        return null;
    }
}