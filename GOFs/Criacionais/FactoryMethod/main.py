from factory import LocalFactory

dados_frontend = {
    "tipo": "ponto_turistico",
    "nome": "Praça Central",
    "descricao": "Lugar histórico",
    "endereco": "Rua A"
}

local = LocalFactory.criar_local(
    dados_frontend["tipo"],
    dados_frontend["nome"],
    dados_frontend["descricao"],
    dados_frontend["endereco"]
)

print(local.exibir_informacoes())
