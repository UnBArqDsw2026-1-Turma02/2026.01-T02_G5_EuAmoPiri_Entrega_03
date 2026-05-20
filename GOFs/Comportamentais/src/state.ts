// StateComentario — Classe abstrata base (State)
// ======================================================
abstract class StateComentario {
    protected context: Comentario;
  
    constructor(context: Comentario) {
      this.context = context;
    }
  
    visualizar(): void { console.log("[Erro] Ação de visualizar não permitida neste estado."); }
    responder(): void  { console.log("[Erro] Ação de responder não permitida neste estado."); }
    denunciar(): void  { console.log("[Erro] Ação de denunciar não permitida neste estado."); }
    editar(): void     { console.log("[Erro] Ação de editar não permitida neste estado."); }
    validarConteudo(): void     { console.log("[Erro] Ação de validar conteúdo não permitida neste estado."); }
    setState(): void   { console.log("[Erro] Sem transição definida neste estado."); }
  }

  // ComentarioRascunho — Estado concreto 1
  // Permite: visualizar (só autor), editar

  class ComentarioRascunho extends StateComentario {
    override visualizar(): void {
      console.log("[Rascunho] Comentário visível apenas para o autor.");
    }
  
    override editar(): void {
      console.log("[Rascunho] Rascunho editado com sucesso.");
    }

    validarConteudo(): void {
        console.log("[Rascunho] Conteúdo validado com sucesso.");
    }
  
    override setState(): void {
      console.log("[Rascunho → Aprovado] Comentário submetido para aprovação.");
      this.context.setState(this.context.aprovado);
    }
  }
  
  // ComentarioAprovado — Estado concreto 2
  // Permite: editar (uma revisão final)

  class ComentarioAprovado extends StateComentario {
    override editar(): void {
      console.log("[Aprovado] Revisão final aplicada ao comentário.");
    }
  
    override setState(): void {
      console.log("[Aprovado → Publicado] Comentário publicado na plataforma.");
      this.context.setState(this.context.publicado);
    }
  }
  
  // ComentarioPublicado — Estado concreto 3
    // Permite: visualizar (agora para todos os usuários), responder, denunciar
 
  class ComentarioPublicado extends StateComentario {
    override visualizar(): void {
      console.log("[Publicado] Comentário visível para todos os usuários.");
    }
  
    override responder(): void {
      console.log("[Publicado] Resposta registrada no comentário.");
    }
  
    override denunciar(): void {
      console.log("[Publicado] Comentário denunciado. Em análise pela moderação.");
    }
  }
  
  // Comentario — Context

  class Comentario {
    private _state: StateComentario;
  
    readonly rascunho:  ComentarioRascunho;
    readonly aprovado:  ComentarioAprovado;
    readonly publicado: ComentarioPublicado;
  
    constructor() {
      this.rascunho  = new ComentarioRascunho(this);
      this.aprovado  = new ComentarioAprovado(this);
      this.publicado = new ComentarioPublicado(this);
      this._state    = this.rascunho; // estado inicial
    }
  
    setState(state: StateComentario): void {
      this._state = state;
    }
  
    // Aciona a transição do estado atual para o próximo
    avancar(): void    { this._state.setState(); }
  
    // Delegação para o estado atual
    visualizar(): void { this._state.visualizar(); }
    responder(): void  { this._state.responder(); }
    denunciar(): void  { this._state.denunciar(); }
    editar(): void     { this._state.editar(); }
    validarConteudo():void {this._state.validarConteudo();}
  }
  
  //Para testes
  const comentario = new Comentario();
  
  console.log("Estado: Rascunho");
  comentario.visualizar(); // é pra gerar OK pois é permitido
  comentario.editar();     // é pra gerar OK pois é permitido
  comentario.validarConteudo(); // é pra gerar OK pois é permitido
  comentario.responder();  // é pra gerar ERR pois não é permitido
  comentario.denunciar();  // é pra gerar ERR pois não é permitido
  
  console.log("\nTransição: Rascunho → Aprovado");
  comentario.avancar();
  
  console.log("\nEstado: Aprovado");
  comentario.editar();     // é pra gerar OK pois é permitido
  comentario.visualizar(); // é pra gerar ERR pois não é permitido
  comentario.responder();  // é pra gerar ERR pois não é permitido
  comentario.validarConteudo(); // é pra gerar ERR pois não é permitido
  
  console.log("\nTransição: Aprovado → Publicado");
  comentario.avancar();
  
  console.log("\nEstado: Publicado");
  comentario.visualizar(); // é pra gerar OK pois é permitido
  comentario.responder();  // é pra gerar OK pois é permitido
  comentario.denunciar();  // é pra gerar OK pois é permitido
  comentario.editar();     // é pra gerar ERR pois não é permitido
  comentario.validarConteudo(); // é pra gerar ERR pois não é permitido