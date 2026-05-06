import { ViagemFactorySistema } from "./factory/ViagemFactorySistema";

// Instancia a (Abstract Factory)
const sistema = new ViagemFactorySistema();

// Cria a fábrica de locais através do sistema
const localFactory = sistema.criarLocalFactory();

// Cria o Estabelecimento 
const meuBar = localFactory.criarLocal(
    "estabelecimento",     
    "Piri Lounge",          
    "Melhor bar da cidade", 
    "Lounge",               
    "Rua Direita, 10",      
    72980000               
);

// Cria o Ponto Turístico
const minhaCachoeira = localFactory.criarLocal(
    "pontoturistico",      
    "Cachoeira do Abade",   
    "Natureza pura",        
    "Cachoeira",            
    "Estrada dos Pirineus", 
    72980000               
);

// Exibição
console.log("--- Cadastro de Locais ---");
console.log("\n");
meuBar.exibirLocal();
console.log("\n");
minhaCachoeira.exibirLocal();




//Deixe isso comentado//
/*import { ViagemFactorySistema } from "./factory/ViagemFactorySistema";
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

console.log(interacao.criarInteracao());*/

/*import { ViagemFactorySistema } from "./factory/ViagemFactorySistema";
import { Morador } from "./regras/usuario/Morador";
import { Turista } from "./regras/usuario/Turista";

const factory = new ViagemFactorySistema();

// Dados fictícios para teste seguindo sua lógica anterior
const morador = new Morador("João", "99999-9999", "joao@email.com", "joao123", "senha123");
const turista = new Turista("Maria", "88888-8888", "maria@email.com", "maria123", "senha456");

// Morador cria local (usando a fábrica de fábricas)
const localFactory = factory.criarLocalFactory();
// Note: Ajuste os parâmetros de criarLocal para bater com o que definimos antes (nome, desc, etc)
// No seu index.ts

const local = localFactory.criarLocal(
    "estabelecimento", // O 'tipoAcao' que o switch vai ler
    "Piri Lounge",      // nome
    "Bar em Piri",      // descricao
    "Restaurante",      // tipo
    "Rua Direita",      // rua
    72980000            // cep
);

morador.cadastrarLocal(local);

// Turista cria interação (relato)
const insereFactory = factory.criarModuloInsereFactory();
const interacao = insereFactory.criarInteracao("relato");

console.log(interacao.criarInteracao());*/