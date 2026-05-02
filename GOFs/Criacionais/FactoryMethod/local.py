class Local:
    def __init__(self, nome, descricao, endereco):
        self.nome = nome
        self.descricao = descricao
        self.endereco = endereco

    def exibir_informacoes(self):
        raise NotImplementedError()


class PontoTuristico(Local):
    def exibir_informacoes(self):
        return f"Ponto Turistico: {self.nome} - {self.descricao}"


class Estabelecimento(Local):

    def exibir_informacoes(self):
        return f"Estabelecimento: {self.nome} - {self.descricao}"
