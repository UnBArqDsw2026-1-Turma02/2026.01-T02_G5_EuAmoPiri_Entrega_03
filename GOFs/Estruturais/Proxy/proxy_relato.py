from abc import ABC, abstractmethod

# 1. Interface
class IRelatoService(ABC):
    @abstractmethod
    def cadastrar_relato(self, turista_id: int, relato_texto: str, avaliacao: int, esta_logado: bool) -> dict:
        pass

# 2. Serviço Real
class RealRelatoService(IRelatoService):
    def cadastrar_relato(self, turista_id: int, relato_texto: str, avaliacao: int, esta_logado: bool) -> dict:
        print(f"[Serviço Real] Salvando o relato do turista {turista_id} no banco de dados do EuAmoPiri...")
        return {"sucesso": True, "mensagem": "Relato publicado com sucesso!"}

# 3. Proxy (Com Autenticação, Anti-Spam e Filtro)
class RelatoServiceProxy(IRelatoService):
    def __init__(self, servico_real: IRelatoService):
        self._servico_real = servico_real
        self._contagem_diaria = {}
        self._palavras_proibidas = ["fraude", "lixo", "spam", "ofensa"]

    def cadastrar_relato(self, turista_id: int, relato_texto: str, avaliacao: int, esta_logado: bool) -> dict:
        print("\n[Proxy] Interceptando a requisição...")

        if not esta_logado:
            print("[Proxy] BLOQUEADO: Usuário não autenticado.")
            return {"sucesso": False, "mensagem": "Erro: Você precisa fazer login na plataforma para avaliar."}

        # Filtro de vocabulário
        if any(palavra in relato_texto.lower() for palavra in self._palavras_proibidas):
            print("[Proxy] BLOQUEADO: Vocabulário impróprio detectado.")
            return {"sucesso": False, "mensagem": "Erro: A publicação foi bloqueada devido a linguagem inadequada."}

        # (Anti-Spam)
        relatos_hoje = self._contagem_diaria.get(turista_id, 0)
        if relatos_hoje >= 3:
            print(f"[Proxy] BLOQUEADO: O Turista {turista_id} excedeu o limite diário.")
            return {"sucesso": False, "mensagem": "Erro: Limite de 3 relatos por dia atingido."}

        self._contagem_diaria[turista_id] = relatos_hoje + 1
        print("[Proxy] ✓ Validações aprovadas. Repassando para o Serviço Real...")
        return self._servico_real.cadastrar_relato(turista_id, relato_texto, avaliacao, esta_logado)

# 4. Teste
if __name__ == "__main__":
    servico_proxy = RelatoServiceProxy(RealRelatoService())
    id_turista = 101

    # Teste 1: Turista deslogado (Vai barrar)
    servico_proxy.cadastrar_relato(id_turista, "Lugar muito bonito!", 5, esta_logado=False)

    # Teste 2: Turista logado (Vai passar)
    servico_proxy.cadastrar_relato(id_turista, "Lugar muito bonito!", 5, esta_logado=True)