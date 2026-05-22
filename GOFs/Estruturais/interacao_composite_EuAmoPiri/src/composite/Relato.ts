import { InteracaoComponent } from "../component/InteracaoComponent";

export class Relato
    extends InteracaoComponent {

    private interacoes:
        InteracaoComponent[] = [];

    adicionar( // Monta a árvore de comentários
        interacao: InteracaoComponent
    ): void {

        this.interacoes.push(interacao);
    }

    remover( // Remove comentários
        interacao: InteracaoComponent
    ): void {

        this.interacoes =
            this.interacoes.filter(
                i => i !== interacao
            );
    }

    exibir(): void {

        console.log(
            `\nRelato: ${this.titulo}`
        );

        console.log(this.descricao);

        for (const interacao of this.interacoes) { // Recursão da classe para os comentários serem adicionados
            interacao.exibir();
        }
    }
}