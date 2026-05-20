import { SistemaTurismo } from "./receiver/SistemaTurismo";

import { PainelUsuario } from "./invoker/PainelUsuario";

import { CriarRelatoCommand } from "./concreteCommand/CriarRelatoCommand";
import { CriarComentarioCommand } from "./concreteCommand/CriarComentarioCommand";
import { CadastrarLocalCommand } from "./concreteCommand/CadastrarLocalCommand";

const sistema = new SistemaTurismo();

const painel = new PainelUsuario();

const relato = new CriarRelatoCommand(
    sistema,
    "A cachoeira estava muito limpa e bonita."
);

const comentario = new CriarComentarioCommand(
    sistema,
    "Lugar excelente para visitar no fim de semana."
);

const local = new CadastrarLocalCommand(
    sistema,
    "Cachoeira do Rosário"
);

console.log("\n=== RELATO ===");
painel.executarComando(relato);

console.log("\n=== COMENTÁRIO ===");
painel.executarComando(comentario);

console.log("\n=== LOCAL ===");
painel.executarComando(local);