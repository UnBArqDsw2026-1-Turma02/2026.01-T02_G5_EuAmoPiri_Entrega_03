// Sistema EuAmoPiri

import { GoogleMapsAPI } from './GoogleMapsAPI';
import { GoogleMapsAdapter } from './GoogleMapsAdapter';
import { ILocalInfo } from './ILocalInfo';

export class SistemaEuAmoPiri {
    public exibirDetalhesLocal(local: ILocalInfo): void {
        console.log(`Nome: ${local.obter_nome()}`);
        console.log(`Endereço: ${local.obter_endereco()}`);
        console.log(`Coordenadas: ${local.obter_coordenadas()}`);
        console.log(`Avaliações: ${local.obter_avaliacoes().join(", ")}`);
    }
}

const apiGoogle = new GoogleMapsAPI();
const adapter = new GoogleMapsAdapter(apiGoogle);
const sistemaEuAmoPiri = new SistemaEuAmoPiri();

sistemaEuAmoPiri.exibirDetalhesLocal(adapter);