export abstract class Usuario {
    constructor(
        public nome: string,
        public numeroCelular: string,
        protected email: string,
        public nomeUsuario: string,
        protected senha: string
    ) { }

    exibirPerfil(): void {
        console.log(`Usuário: ${this.nome} (${this.nomeUsuario})`);
    }
}