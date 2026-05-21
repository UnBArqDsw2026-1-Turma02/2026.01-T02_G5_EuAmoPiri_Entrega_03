import { ViagemFactoryProvider } from "./factory/ViagemFactoryProvider";
import { MoradorFactory } from "./factory/MoradorFactory";

// TURISTA

const turistaFactory =
    ViagemFactoryProvider.criarFactory("turista");

const turista = turistaFactory.criarUsuario(
    "João",
    "joao@email.com",
    "123",
    "99999-9999",
    "joaoturista"
);

const relato = turistaFactory.criarInteracao();

console.log("\n=== TURISTA ===");

console.log(turista);
console.log(relato.criarInteracao());


// MORADOR

const moradorFactory =
    ViagemFactoryProvider.criarFactory("morador");

const morador = moradorFactory.criarUsuario(
    "Maria",
    "maria@email.com",
    "456",
    "88888-8888",
    "mariamoradora"
);

console.log("\n=== MORADOR ===");
console.log(morador);

if (moradorFactory instanceof MoradorFactory) { // Verificação de tipo para acessar métodos específicos isso é necessário devido à interface ViagemAbstractFactory não ter o método criarLocal
    const local = moradorFactory.criarLocal(
        "Cachoeira Santa Maria",
        "Local turístico em Pirenópolis",
        "Ponto Turístico",
        "Zona Rural",
        "72980000"
    );


    console.log("\n=== LOCAL ===");
    console.log(local);
}

const anuncio = moradorFactory.criarInteracao();

console.log("\n=== ANÚNCIO ===");
console.log(anuncio.criarInteracao());