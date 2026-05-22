// Classe responsável por adaptar a API externa

import { ILocalInfo } from './ILocalInfo';
import { GoogleMapsAPI } from './GoogleMapsAPI';

export class GoogleMapsAdapter implements ILocalInfo {

    private google_api: GoogleMapsAPI;

    constructor(api: GoogleMapsAPI) {
        this.google_api = api;
    }

    public obter_nome(): string {
        return this.google_api.obterNomeLocal();
    }

    public obter_descricao(): string {
        return this.google_api.obterDescricaoLocal();
    }

    public obter_endereco(): string {
        return this.google_api.obterEnderecoFormatado();
    }

    public obter_coordenadas(): [number, number] {
        return this.google_api.obterLocalizacaoGPS();
    }
}