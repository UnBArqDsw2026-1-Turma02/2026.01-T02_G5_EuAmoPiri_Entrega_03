import { Insere } from "../regras/interacao/Insere";
import { Usuario } from "../regras/usuario/Usuario";

export interface ViagemAbstractFactory {

    criarInteracao(): Insere;

    criarUsuario(
        nome: string,
        email: string,
        senha: string,
        numeroCelular: string,
        nomeUsuario: string
    ): Usuario;
}