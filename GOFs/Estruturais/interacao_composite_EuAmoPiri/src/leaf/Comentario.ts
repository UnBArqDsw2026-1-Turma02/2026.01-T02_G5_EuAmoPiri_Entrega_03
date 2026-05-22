import { InteracaoComponent } from "../component/InteracaoComponent";

export class Comentario
    extends InteracaoComponent {

    exibir(): void {

        console.log(
            `Comentário: ${this.descricao}`
        );
    }
}