from abc import ABC, abstractmethod
from datetime import date


class Relato(ABC):

  # Componente base do padrão Decorator.

    def __init__(self, nome_usuario: str, relato: str, avaliacao: int):
        self._nome_usuario = nome_usuario
        self._relato = relato
        self._avaliacao = avaliacao

    @property
    def nome_usuario(self) -> str:
        return self._nome_usuario

    @property
    def avaliacao(self) -> int:
        return self._avaliacao

    @abstractmethod
    def get_conteudo(self) -> str:
        pass

    @abstractmethod
    def editar_relato(self, novo_texto: str) -> None:
        pass

    @abstractmethod
    def excluir_relato(self) -> str:
        pass

    def __str__(self) -> str:
        return self.get_conteudo()


 # Milena aqui eu fiz a implementacao concreta de Relato

class RelatoConcreto(Relato):
    

    def get_conteudo(self) -> str:
        return (
            f"[Relato de {self._nome_usuario}] "
            f"{self._relato} "
            f"(avaliação: {self._avaliacao}/5)"
        )

    def editar_relato(self, novo_texto: str) -> None:
        self._relato = novo_texto
        print(f"Relato de '{self._nome_usuario}' editado com sucesso.")

    def excluir_relato(self) -> str:
        return f"Relato de '{self._nome_usuario}' excluído."



class RelatoDecorator(Relato):


    def __init__(self, relato: Relato):
        self._wrapped = relato

    @property
    def nome_usuario(self) -> str:
        return self._wrapped.nome_usuario

    @property
    def avaliacao(self) -> int:
        return self._wrapped.avaliacao

    def get_conteudo(self) -> str:
        return self._wrapped.get_conteudo()

    def editar_relato(self, novo_texto: str) -> None:
        self._wrapped.editar_relato(novo_texto)

    def excluir_relato(self) -> str:
        return self._wrapped.excluir_relato()


class MidiaDecorator(RelatoDecorator):


    def __init__(self, relato: Relato, url_midia: str, tipo_midia: str):
        super().__init__(relato)
        self._url_midia = url_midia
        self._tipo_midia = tipo_midia  # ex: "imagem", "video"

    def get_conteudo(self) -> str:
        icone = "📷" if self._tipo_midia == "imagem" else "🎥"
        return (
            f"{self._wrapped.get_conteudo()} "
            f"[{icone} {self._tipo_midia}: {self._url_midia}]"
        )


class VerificadoDecorator(RelatoDecorator):


    def __init__(self, relato: Relato, verificado_por: str, data_verif: date = None):
        super().__init__(relato)
        self._verificado_por = verificado_por
        self._data_verif = data_verif or date.today()

    def get_conteudo(self) -> str:
        return (
            f"{self._wrapped.get_conteudo()} "
            f"[✓ Verificado por {self._verificado_por} em {self._data_verif}]"
        )


class DestaqueDecorator(RelatoDecorator):


    def __init__(self, relato: Relato, fixado: bool = True, prioridade: int = 1):
        super().__init__(relato)
        self._fixado = fixado
        self._prioridade = prioridade  # 1 = máxima, números maiores = menor prioridade

    def get_conteudo(self) -> str:
        if not self._fixado:
            return self._wrapped.get_conteudo()
        return (
            f"{'⭐' * max(1, 4 - self._prioridade)} DESTAQUE (prioridade {self._prioridade}) "
            f"{'⭐' * max(1, 4 - self._prioridade)}\n"
            f"{self._wrapped.get_conteudo()}"
        )


if __name__ == "__main__":
    separador = "─" * 60

    print(separador)
    print("1. Relato simples (sem decorator)")
    print(separador)
    relato = RelatoConcreto(
        nome_usuario="Carlos Turista",
        relato="O mirante tem uma vista incrível ao entardecer!",
        avaliacao=5
    )
    print(relato)

    print()
    print(separador)
    print("2. Relato com mídia")
    print(separador)
    relato_com_midia = MidiaDecorator(relato, "foto_mirante.jpg", "imagem")
    print(relato_com_midia)

    print()
    print(separador)
    print("3. Relato com mídia + verificado por morador")
    print(separador)
    relato_verificado = VerificadoDecorator(
        relato_com_midia,
        verificado_por="Ana Moradora",
        data_verif=date(2024, 11, 20)
    )
    print(relato_verificado)

    print()
    print(separador)
    print("4. Relato com mídia + verificado + em destaque (composição completa)")
    print(separador)
    relato_destaque = DestaqueDecorator(relato_verificado, fixado=True, prioridade=1)
    print(relato_destaque)

    print()
    print(separador)
    print("5. Editar relato atravessa todos os decorators corretamente")
    print(separador)
    relato_destaque.editar_relato("Vista INCRÍVEL — imperdível ao entardecer!")
    print(relato_destaque)

    print()
    print(separador)
    print("6. Decorator inativo (fixado=False) não altera conteúdo")
    print(separador)
    relato_sem_destaque = DestaqueDecorator(relato_com_midia, fixado=False)
    print(relato_sem_destaque)