import { ViagemAbstractFactory } from "./ViagemAbstractFactory";
import { LocalFactory } from "./LocalFactory";
import { ModuloInsereFactory } from "./ModuloInsereFactory";

import { LocalFactorySistema } from "./LocalFactorySistema";
import { ModuloInsereFactorySistema } from "./ModuloInsereFactorySistema";

export class ViagemFactorySistema implements ViagemAbstractFactory {

    criarLocalFactory(): LocalFactory {
        return new LocalFactorySistema();
    }

    criarModuloInsereFactory(): ModuloInsereFactory {
        return new ModuloInsereFactorySistema();
    }

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