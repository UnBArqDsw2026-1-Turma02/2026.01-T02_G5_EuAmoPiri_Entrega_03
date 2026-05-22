// API externa do Google Maps

export class GoogleMapsAPI {

    private local: any;

    public buscarLocal(nome_local: string): void {
        this.local = {
            nome: nome_local,
            descricao: "Um dos pontos turísticos mais visitados de Pirenópolis.",
            endereco: "Rua do Rosário, Pirenópolis - GO",
            coordenadas: [-15.8517, -48.9589]
        };
    }

    public obterNomeLocal(): string {
        return this.local.nome;
    }

    public obterDescricaoLocal(): string {
        return this.local.descricao;
    }

    public obterEnderecoFormatado(): string {
        return this.local.endereco;
    }

    public obterLocalizacaoGPS(): [number, number] {
        return this.local.coordenadas;
    }
}