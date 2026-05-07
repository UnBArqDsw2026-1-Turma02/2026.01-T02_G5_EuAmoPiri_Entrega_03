from abc import ABC, abstractmethod
from interacao import Comentario, RespostaComentario, DenunciaComentario

# interface
class CriadorInteracao(ABC):
    @abstractmethod
    def factory_method(self, **kwargs):
        pass

    def processar(self, **kwargs):
        objeto = self.factory_method(**kwargs)
        return objeto.exibir()


# implementações
class CriadorComentario(CriadorInteracao):
    def factory_method(self, **kwargs):
        return Comentario(kwargs.get("autor"), kwargs.get("conteudo"))


class CriadorResposta(CriadorInteracao):
    def factory_method(self, **kwargs):
        return RespostaComentario(
            kwargs.get("autor"),
            kwargs.get("conteudo"),
            kwargs.get("comentario_original")
        )

class CriadorDenuncia(CriadorInteracao):
    def factory_method(self, **kwargs):
        return DenunciaComentario(
            kwargs.get("autor"),
            kwargs.get("conteudo"),
            kwargs.get("motivo")
        )