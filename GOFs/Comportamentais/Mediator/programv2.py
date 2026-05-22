from abc import ABC, abstractmethod

class IMediator(ABC):
    @abstractmethod
    def notificar(self, remetente: object, evento: str, dados: dict) -> None:
        pass

class ComponenteBase:
    def __init__(self, mediator: IMediator = None):
        self._mediator = mediator
    
    def definir_mediator(self, mediator: IMediator):
        self._mediator = mediator

class LocalRepository(ComponenteBase):
    def obter_local(self, local_id: str) -> dict:
        return {"id": local_id, "nome": "Cachoeira de Pirenópolis", "categoria": "Natureza"}

    def atualizar_dados_local(self, local_id: str, novos_dados: dict):
        print(f"[LocalRepository] Dados do local {local_id} atualizados no banco.")
        if self._mediator:
            self._mediator.notificar(self, "local_atualizado", {"local_id": local_id})

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

class RelatoService(ComponenteBase):
    def cadastrar_relato(self, local_id: str, titulo: str, nota: int):
        print(f"[Relato] Novo relato inserido: '{titulo}' com nota {nota}.")
        if self._mediator:
            self._mediator.notificar(self, "novo_relato", {"local_id": local_id, "nota": nota})

class ComentarioService(ComponenteBase):
    def cadastrar_comentario(self, local_id: str, autor: str, texto: str):
        print(f"[Comentário] Novo comentário de {autor}: '{texto}'")
        if self._mediator:
            self._mediator.notificar(self, "novo_comentario", {"local_id": local_id})

class LocalInteractionMediator(IMediator):
    def __init__(self, local_repo: LocalRepository, avaliacao_service: AvaliacaoService, relato_service: RelatoService, comentario_service: ComentarioService):
        self.local_repo = local_repo
        self.avaliacao_service = avaliacao_service
        self.relato_service = relato_service
        self.comentario_service = comentario_service
        
        self.local_repo.definir_mediator(self)
        self.avaliacao_service.definir_mediator(self)
        self.relato_service.definir_mediator(self)
        self.comentario_service.definir_mediator(self)

    def notificar(self, remetente: object, evento: str, dados: dict) -> None:
        if evento == "novo_relato":
            print(f"[Mediador] Evento '{evento}' capturado. Coordenando recálculo de média...")
            self.avaliacao_service.atualizar_media(dados["nota"])
        elif evento == "novo_comentario":
            print(f"[Mediador] Evento '{evento}' capturado. Preparando notificação para o dono do local...")
        elif evento == "local_atualizado":
            print(f"[Mediador] Evento '{evento}' capturado. Invalidando cache de visualização do front-end...")

if __name__ == "__main__":
    print("=== Testando Padrão Mediator GoF (v1.2): EuAmoPiri ===")
    
    repo = LocalRepository()
    avaliacao = AvaliacaoService()
    relato = RelatoService()
    comentario = ComentarioService()
    
    maestro = LocalInteractionMediator(repo, avaliacao, relato, comentario)
    
    # Testando os diferentes eventos independentes
    relato.cadastrar_relato(local_id="42", titulo="Lugar sensacional, vale a visita!", nota=5)
    print("-" * 40)
    comentario.cadastrar_comentario(local_id="42", autor="Anna", texto="Tem estacionamento perto?")
    print("-" * 40)
    repo.atualizar_dados_local(local_id="42", novos_dados={"categoria": "Ecoturismo"})