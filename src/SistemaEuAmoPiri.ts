// Sistema principal da aplicação

import { GoogleMapsAPI } from './GoogleMapsAPI';
import { GoogleMapsAdapter } from './GoogleMapsAdapter';
import { ILocalInfo } from './ILocalInfo';

export class SistemaEuAmoPiri {

    public exibirDetalhesLocal(local: ILocalInfo): void {

        console.log(`Nome: ${local.obter_nome()}`);
        console.log(`Descrição: ${local.obter_descricao()}`);
        console.log(`Endereço: ${local.obter_endereco()}`);
        console.log(`Coordenadas: ${local.obter_coordenadas()}`);
    }
}

const apiGoogle = new GoogleMapsAPI();

// Busca das informações do local na API externa
apiGoogle.buscarLocal("Igreja Matriz de Pirenópolis");

// Adapter realizando a tradução entre sistema e API
const adapter = new GoogleMapsAdapter(apiGoogle);

const sistemaEuAmoPiri = new SistemaEuAmoPiri();

sistemaEuAmoPiri.exibirDetalhesLocal(adapter);