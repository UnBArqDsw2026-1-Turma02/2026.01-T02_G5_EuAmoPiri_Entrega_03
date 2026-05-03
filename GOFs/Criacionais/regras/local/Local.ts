export abstract class Local {
    constructor(
        public nome: string,
        public descricao: string,
        public rua: string,
        public cep: string
    ) { }

    abstract exibirLocal(): void;
}