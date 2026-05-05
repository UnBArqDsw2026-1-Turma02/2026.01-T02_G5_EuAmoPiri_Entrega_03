import { ViagemFactorySistema } from "./factory/ViagemFactorySistema";
import { Morador } from "../../regras/usuario/Morador";
import { Turista } from "../../regras/usuario/Turista";

const factory = new ViagemFactorySistema();

const morador = new Morador("João", "99999-9999", "email", "joao123", "senha");
const turista = new Turista("Maria", "88888-8888", "email", "maria123", "senha");

// Morador cria local
const localFactory = factory.criarLocalFactory();
const local = localFactory.criarLocal("estabelecimento");
morador.cadastrarLocal(local);

// Turista cria interação (relato)
const insereFactory = factory.criarModuloInsereFactory();
const interacao = insereFactory.criarInteracao("relato");

console.log(interacao.criarInteracao());