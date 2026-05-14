//Adapter -> GoogleMapsAPI

import { ILocalInfo } from './ILocalInfo';
import { GoogleMapsAPI } from './GoogleMapsAPI';

export class GoogleMapsAdapter implements ILocalInfo {
    private google_api: GoogleMapsAPI;

    constructor(api: GoogleMapsAPI) {
        this.google_api = api;
    }

    public obter_nome(): string {

        return "Local através do Google Maps";
    }

    public obter_descricao(): string {
        return "Descrição adaptada da API externa";
    }

    public obter_endereco(): string {
        return this.google_api.obterEnderecoFormatado();
    }

    public obter_coordenadas(): [number, number] {
        return this.google_api.obterLocalizacaoGPS();
    }

    public obter_avaliacoes(): string[] {
        return this.google_api.obterAvaliacoes();
    }
}