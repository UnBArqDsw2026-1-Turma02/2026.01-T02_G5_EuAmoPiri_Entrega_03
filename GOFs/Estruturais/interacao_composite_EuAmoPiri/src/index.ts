import { Relato } from "./composite/Relato";
import { Comentario } from "./leaf/Comentario";

const relato =
    new Relato( // Cria relato
        "Viagem para Pirenópolis",
        "Experiência incrível"
    );

const comentario1 =
    new Comentario( // Cria comentário
        "Comentário",
        "Lugar muito bonito"
    );

const comentario2 =
    new Comentario( // Cria resposta para o comentário
        "Resposta",
        "Concordo totalmente"
    );

relato.adicionar(comentario1);
relato.adicionar(comentario2); // Chama o composite para adicionar os comentários

relato.exibir(); // Chama o composite para exibir