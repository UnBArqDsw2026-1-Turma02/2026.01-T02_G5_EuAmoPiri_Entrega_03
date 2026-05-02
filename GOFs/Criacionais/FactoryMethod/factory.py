from local import PontoTuristico, Estabelecimento


class LocalFactory:

    @staticmethod
    def criar_local(tipo, nome, descricao, endereco):

        if tipo == "ponto_turistico":
            return PontoTuristico(nome, descricao, endereco)

        if tipo == "estabelecimento":
            return Estabelecimento(nome, descricao, endereco)

        raise ValueError("Tipo inválido")
