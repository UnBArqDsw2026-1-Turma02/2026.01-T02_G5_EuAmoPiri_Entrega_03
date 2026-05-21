import { ViagemAbstractFactory } from "./ViagemAbstractFactory";

import { Local } from "../regras/local/Local";
import { Estabelecimento } from "../regras/local/Estabelecimento";

import { Insere } from "../regras/interacao/Insere";
import { InsereAnuncio } from "../regras/interacao/InsereAnuncio";

import { Usuario } from "../regras/usuario/Usuario";
import { UsuarioMorador } from "../regras/usuario/UsuarioMorador";

export class MoradorFactory implements ViagemAbstractFactory {
    criarLocal(
        nome: string,
        descricao: string,
        tipo: string,
        rua: string,
        cep: string
    ): Local {
        return new Estabelecimento(nome, descricao, tipo, rua, cep);
    }

    criarInteracao(): Insere {
        return new InsereAnuncio();
    }

    criarUsuario(
        nome: string,
        email: string,
        senha: string,
        numeroCelular: string,
        nomeUsuario: string
    ): Usuario {
        return new UsuarioMorador(nome, email, senha, numeroCelular, nomeUsuario);
    }
}