from factory import LocalFactory
from interacao_factory import InteracaoFactory

dados_comentario = {
    "tipo": "comentario",
    "autor": "Eduardo",
    "conteudo": "Lugar muito bonito!"
}

dados_resposta = {
    "tipo": "resposta",
    "autor": "Joao",
    "conteudo": "Também gostei muito!",
    "comentario_original": "Lugar muito bonito!"
}

dados_denuncia = {
    "tipo": "denuncia",
    "autor": "Eduardo",
    "conteudo": "Comentário ofensivo",
    "motivo": "Linguagem inadequada"
}

interacao1 = InteracaoFactory.criar_interacao(dados_comentario)
interacao2 = InteracaoFactory.criar_interacao(dados_resposta)
interacao3 = InteracaoFactory.criar_interacao(dados_denuncia)


dados_frontend = {
    "tipo": "ponto_turistico",
    "nome": "Praça Central",
    "descricao": "Lugar histórico",
    "endereco": "Rua A"
}

local = LocalFactory.criar_local(
    dados_frontend["tipo"],
    nome=dados_frontend["nome"],
    descricao=dados_frontend["descricao"],
    endereco=dados_frontend["endereco"]
)

print(local.exibir_informacoes())
print(interacao1.exibir())
print(interacao2.exibir())
print(interacao3.exibir())
