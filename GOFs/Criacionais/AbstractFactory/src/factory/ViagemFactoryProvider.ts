import { ViagemAbstractFactory } from "./ViagemAbstractFactory";
import { TuristaFactory } from "./TuristaFactory";
import { MoradorFactory } from "./MoradorFactory";

export class ViagemFactoryProvider {
    static criarFactory(tipoUsuario: string): ViagemAbstractFactory {
        if (tipoUsuario.toLowerCase() === "turista") {
            return new TuristaFactory();
        }

        if (tipoUsuario.toLowerCase() === "morador") {
            return new MoradorFactory();
        }

        throw new Error("Tipo de usuário inválido");
    }
}