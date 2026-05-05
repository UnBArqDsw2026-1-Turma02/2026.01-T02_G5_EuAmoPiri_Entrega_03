import { ViagemFactory } from "./ViagemFactory";
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
}