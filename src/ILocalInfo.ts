// Target -> Interface

export interface ILocalInfo {
    obter_nome(): string;
    obter_descricao(): string;
    obter_endereco(): string;
    obter_coordenadas(): [number, number];
    obter_avaliacoes(): string[];
}