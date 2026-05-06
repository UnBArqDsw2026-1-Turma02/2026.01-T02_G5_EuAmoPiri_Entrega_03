import { LocalFactory } from "./LocalFactory";
import { LocalFactorySistema } from "./LocalFactorySistema";
import { ModuloInsereFactory } from "./ModuloInsereFactory";
import { ModuloInsereFactorySistema } from "./ModuloInsereFactorySistema";

export interface ViagemAbstractFactory {
    criarFactory(tipo: string): LocalFactory | ModuloInsereFactory | null;
}

export class MinhaViagemFactory implements ViagemAbstractFactory {
    criarFactory(tipo: string): LocalFactory | ModuloInsereFactory | null {
        if (tipo === "local") {
            return new LocalFactorySistema();
        }
        if (tipo === "moduloInsere") {
            return new ModuloInsereFactorySistema();
        }
        return null;
    }
}