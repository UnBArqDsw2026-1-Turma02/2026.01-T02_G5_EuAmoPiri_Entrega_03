export abstract class Local {
    constructor(
        public nome: string,
        public descricao: string,
        public tipo: string,
        public rua: string,
        public cep: number
    ) { }

    abstract exibirLocal(): void;
}