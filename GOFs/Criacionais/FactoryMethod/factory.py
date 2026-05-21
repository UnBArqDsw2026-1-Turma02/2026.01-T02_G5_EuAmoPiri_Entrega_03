from abc import ABC, abstractmethod
from local import PontoTuristico, Estabelecimento


# interface
class CriadorLocal(ABC):
    @abstractmethod
    def factory_method(self, **kwargs):
        pass

    def processar(self, **kwargs):
        objeto = self.factory_method(**kwargs)
        # Exemplo de "Negócio Real": Logar a criação ou validar dados
        return objeto.exibir_informacoes()


# implementação
class CriadorPonto(CriadorLocal):
    def factory_method(self, **kwargs):
        return PontoTuristico(**kwargs)


class CriadorEstabelecimento(CriadorLocal):
    def factory_method(self, **kwargs):
        return Estabelecimento(**kwargs)