from abc import ABC, abstractmethod


class Interacao(ABC):
    def __init__(self, autor, conteudo):
        self.autor = autor
        self.conteudo = conteudo

    @abstractmethod
    def exibir(self):
        pass


class Comentario(Interacao):
    def exibir(self):
        return f"Comentário de {self.autor}: {self.conteudo}"


class RespostaComentario(Interacao):
    def __init__(self, autor, conteudo, comentario_original):
        super().__init__(autor, conteudo)
        self.comentario_original = comentario_original

    def exibir(self):
        return f"Resposta de {self.autor}: {self.conteudo}"


class DenunciaComentario(Interacao):
    def __init__(self, autor, conteudo, motivo):
        super().__init__(autor, conteudo)
        self.motivo = motivo

    def exibir(self):
        return f"Denúncia feita por {self.autor}. Motivo: {self.motivo}"
