export abstract class InteracaoComponent {

    constructor(
        protected titulo: string,
        protected descricao: string
    ) { }

    abstract exibir(): void;

    adicionar?(
        interacao: InteracaoComponent
    ): void;

    remover?(
        interacao: InteracaoComponent
    ): void;
}