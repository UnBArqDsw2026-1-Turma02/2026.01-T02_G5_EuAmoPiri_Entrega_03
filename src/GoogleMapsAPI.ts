//Adaptee -> Google Maps API 

// Adaptee -> Google Maps API 

export class GoogleMapsAPI {
    public buscarLugar(nome_local: string): object {
        return { info: "Dados brutos do Google" };
    }

    public obterEnderecoFormatado(): string {
        return "Rua do Rosário, Pirenópolis - GO";
    }

    public obterLocalizacaoGPS(): [number, number] {
        return [-15.8517, -48.9589];
    }

    public obterAvaliacoes(): string[] {
        return ["Excelente lugar! Cheio de histórias e muita diversão."];
    }
}