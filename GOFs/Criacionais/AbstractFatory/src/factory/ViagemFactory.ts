import { LocalFactory } from "./LocalFactory";
import { ModuloInsereFactory } from "./ModuloInsereFactory";

export interface ViagemFactory {
    criarLocalFactory(): LocalFactory;
    criarModuloInsereFactory(): ModuloInsereFactory;
}