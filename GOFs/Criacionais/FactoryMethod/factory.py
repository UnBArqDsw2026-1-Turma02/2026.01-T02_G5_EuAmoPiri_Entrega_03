from abc import ABC, abstractmethod
from local import PontoTuristico, Estabelecimento


#interface
class CriadorLocal(ABC):
    @abstractmethod
    def factory_method(self, **kwargs):
        pass

    def processar(self, **kwargs):
        objeto = self.factory_method(**kwargs)
        # Exemplo de "Negócio Real": Logar a criação ou validar dados
        return objeto.exibir_informacoes()

#implementaçao 
class CriadorPonto(CriadorLocal):
    def factory_method(self, **kwargs):
        return PontoTuristico(**kwargs)

class CriadorEstabelecimento(CriadorLocal):
    def factory_method(self, **kwargs):
        return Estabelecimento(**kwargs)

class LocalFactory:
    _tipos = {
        "ponto_turistico": CriadorPonto,
        "estabelecimento": CriadorEstabelecimento,
        # Adicionar novos tipos aqui sem mexer na lógica 
    }

    @staticmethod
    def criar_local(tipo, **kwargs):
        classe = LocalFactory._tipos.get(tipo.lower())
        if not classe:
            raise ValueError(f"Tipo '{tipo}' não é suportado.")

        # Retornamos o OBJETO pronto para uso (via factory_method).
        # Se quiser usar a lógica de 'processar', mudamos para .processar(**kwargs)
        return fabrica_classe().factory_method(**kwargs)
