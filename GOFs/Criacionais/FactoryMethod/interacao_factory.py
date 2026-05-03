from interacao import Comentario, RespostaComentario, DenunciaComentario


class InteracaoFactory:

    @staticmethod
    def criar_interacao(dados):
        tipo = dados.get("tipo")

        if tipo == "comentario":
            return Comentario(
                dados.get("autor"),
                dados.get("conteudo")
            )

        if tipo == "resposta":
            return RespostaComentario(
                dados.get("autor"),
                dados.get("conteudo"),
                dados.get("comentario_original")
            )

        if tipo == "denuncia":
            return DenunciaComentario(
                dados.get("autor"),
                dados.get("conteudo"),
                dados.get("motivo")
            )

        raise ValueError("Tipo de interação inválido")
