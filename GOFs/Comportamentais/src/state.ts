// StateComentario — Classe abstrata base (State)
// Define o contrato de todos os estados e o comportamento padrão de erro
abstract class StateComentario {
  visualizar(ctx: Comentario): void { console.log("[Erro] Ação de visualizar não permitida neste estado."); }
  responder(ctx: Comentario): void  { console.log("[Erro] Ação de responder não permitida neste estado."); }
  denunciar(ctx: Comentario): void  { console.log("[Erro] Ação de denunciar não permitida neste estado."); }
  editar(ctx: Comentario): void     { console.log("[Erro] Ação de editar não permitida neste estado."); }
  validarConteudo(ctx: Comentario): void { console.log("[Erro] Ação de validar conteúdo não permitida neste estado."); }
  avancar(ctx: Comentario): void    { console.log("[Erro] Sem transição definida neste estado."); }
}

// ComentarioRascunho — Estado concreto 1
// Permite: visualizar (só autor), editar, validarConteudo
class ComentarioRascunho extends StateComentario {
  override visualizar(ctx: Comentario): void {
    console.log("[Rascunho] Comentário visível apenas para o autor.");
  }

  override editar(ctx: Comentario): void {
    console.log("[Rascunho] Rascunho editado com sucesso.");
  }

  override validarConteudo(ctx: Comentario): void {
    console.log("[Rascunho] Conteúdo validado com sucesso.");
  } 

  // Avança para o próximo estado instanciando ele diretamente
  override avancar(ctx: Comentario): void {
    ctx.mudarEstado(new ComentarioAprovado());
    console.log("[Rascunho → Aprovado] Comentário submetido para aprovação.");
  }
}

// ComentarioAprovado — Estado concreto 2
// Permite: editar (revisão final)
class ComentarioAprovado extends StateComentario {
  override editar(ctx: Comentario): void {
    console.log("[Aprovado] Revisão final aplicada ao comentário.");
  }

  // Avança para o próximo estado instanciando ele diretamente
  override avancar(ctx: Comentario): void {
    ctx.mudarEstado(new ComentarioPublicado());
    console.log("[Aprovado → Publicado] Comentário publicado na plataforma.");
  }
}

// ComentarioPublicado — Estado concreto 3
// Permite: visualizar (todos os usuários), responder, denunciar
class ComentarioPublicado extends StateComentario {
  override visualizar(ctx: Comentario): void {
    console.log("[Publicado] Comentário visível para todos os usuários.");
  }

  override responder(ctx: Comentario): void {
    console.log("[Publicado] Resposta registrada no comentário.");
  }

  override denunciar(ctx: Comentario): void {
    console.log("[Publicado] Comentário denunciado. Em análise pela moderação.");
  }
}

// Comentario — Context
// Mantém o estado atual e delega todas as operações para ele
class Comentario {
  private _state: StateComentario = new ComentarioRascunho();

  // Troca o estado atual — chamado pelos próprios estados na transição
  mudarEstado(state: StateComentario): void {
    this._state = state;
  }

  // Aciona a transição do estado atual para o próximo
  avancar(): void          { this._state.avancar(this); }

  // Delegação para o estado atual
  visualizar(): void       { this._state.visualizar(this); }
  responder(): void        { this._state.responder(this); }
  denunciar(): void        { this._state.denunciar(this); }
  editar(): void           { this._state.editar(this); }
  validarConteudo(): void  { this._state.validarConteudo(this); }
}

// Para testes
const comentario = new Comentario();

console.log("Estado: Rascunho");
comentario.visualizar();      // OK
comentario.editar();          // OK
comentario.validarConteudo(); // OK
comentario.responder();       // ERR
comentario.denunciar();       // ERR

console.log("\nTransição: Rascunho → Aprovado");
comentario.avancar();

console.log("\nEstado: Aprovado");
comentario.editar();          // OK
comentario.visualizar();      // ERR
comentario.responder();       // ERR
comentario.validarConteudo(); // ERR

console.log("\nTransição: Aprovado → Publicado");
comentario.avancar();

console.log("\nEstado: Publicado");
comentario.visualizar();      // OK
comentario.responder();       // OK
comentario.denunciar();       // OK
comentario.editar();          // ERR
comentario.validarConteudo(); // ERR