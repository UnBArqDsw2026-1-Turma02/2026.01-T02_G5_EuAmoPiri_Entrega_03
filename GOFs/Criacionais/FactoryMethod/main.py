from factory import CriadorPonto, CriadorEstabelecimento
from interacao_factory import CriadorComentario, CriadorResposta, CriadorDenuncia

interacao1 = CriadorComentario().factory_method(autor="Eduardo", conteudo="Lugar muito bonito!")
interacao2 = CriadorResposta().factory_method(autor="Joao", conteudo="Também gostei muito!", comentario_original="Lugar muito bonito!")
interacao3 = CriadorDenuncia().factory_method(autor="Eduardo", conteudo="Comentário ofensivo", motivo="Linguagem inadequada")

criador = CriadorPonto()
local = criador.factory_method(
    nome="Praça Central",
    descricao="Lugar histórico",
    endereco="Rua A"
)

print(local.exibir_informacoes())
print(interacao1.exibir())
print(interacao2.exibir())
print(interacao3.exibir())