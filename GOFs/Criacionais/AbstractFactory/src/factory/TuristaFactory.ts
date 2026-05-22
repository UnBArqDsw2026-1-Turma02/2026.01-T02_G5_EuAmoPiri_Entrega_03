import { ViagemAbstractFactory } from "./ViagemAbstractFactory";

import { Insere } from "../regras/interacao/Insere";
import { InsereRelato } from "../regras/interacao/InsereRelato";

import { Usuario } from "../regras/usuario/Usuario";
import { UsuarioTurista } from "../regras/usuario/UsuarioTurista";

export class TuristaFactory implements ViagemAbstractFactory {

    criarInteracao(): Insere {
        return new InsereRelato();
    }

    criarUsuario(
        nome: string,
        email: string,
        senha: string,
        numeroCelular: string,
        nomeUsuario: string
    ): Usuario {
        return new UsuarioTurista(nome, email, senha, numeroCelular, nomeUsuario);
    }
}