from abc import ABC, abstractmethod

# Interface do Mediador 
class IMediator(ABC):
    @abstractmethod
    def notificar(self, remetente: object, evento: str, dados: dict) -> None:
        pass

class ComponenteBase:
    def __init__(self, mediator: IMediator = None):
        self._mediator = mediator
    
    def definir_mediator(self, mediator: IMediator):
        self._mediator = mediator

#Repositório de Locais
class LocalRepository(ComponenteBase):
    def obter_local(self, local_id: str) -> dict:
        return {"id": local_id, "nome": "Cachoeira de Pirenópolis", "categoria": "Natureza"}

#Serviço de Avaliações / Notas
class AvaliacaoService(ComponenteBase):
    def __init__(self):
        super().__init__()
        self._media = 4.7
        self._quantidade = 128

    def resumo(self, local_id: str) -> dict:
        return {"media": self._media, "quantidade": self._quantidade}

    def atualizar_media(self, nova_nota: int):
        self._quantidade += 1
        self._media = round((self._media * (self._quantidade - 1) + nova_nota) / self._quantidade, 2)
        print(f"[Avaliação] Média recalculada no sistema: {self._media} (Total: {self._quantidade} notas)")

# Serviço de Relatos (Gera eventos)
class RelatoService(ComponenteBase):
    def cadastrar_relato(self, local_id: str, titulo: str, nota: int):
        print(f"[Relato] Novo relato inserido: '{titulo}' com nota {nota}.")
        if self._mediator:
            # O componente não chama a Avaliação direto, ele apenas avisa o Mediador
            self._mediator.notificar(self, "novo_relato", {"local_id": local_id, "nota": nota})

# Mediador Concreto
class LocalInteractionMediator(IMediator):
    def __init__(self, local_repo: LocalRepository, avaliacao_service: AvaliacaoService, relato_service: RelatoService):
        self.local_repo = local_repo
        self.avaliacao_service = avaliacao_service
        self.relato_service = relato_service
 
        self.local_repo.definir_mediator(self)
        self.avaliacao_service.definir_mediator(self)
        self.relato_service.definir_mediator(self)

    def notificar(self, remetente: object, evento: str, dados: dict) -> None:
        if evento == "novo_relato":
            print(f"[Mediador] Evento '{evento}' capturado. Coordenando atualizações...")
            self.avaliacao_service.atualizar_media(dados["nota"])

# teste
if __name__ == "__main__":
    print("=== Testando Padrão Mediator GoF: EuAmoPiri ===")
    
    repo = LocalRepository()
    avaliacao = AvaliacaoService()
    relato = RelatoService()
    
    maestro = LocalInteractionMediator(repo, avaliacao, relato)
    
    relato.cadastrar_relato(local_id="42", titulo="Lugar sensacional, vale a visita!", nota=5)