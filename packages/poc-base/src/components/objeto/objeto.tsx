import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'sy-lib-objeto',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class Objeto {
  @Prop () nome: any;
  @Prop () data_criacao: any;
  @Prop () data_atualizacao: any; 
  @Prop () esta_publicado: boolean;
  @Prop () identificador: any;
  @Prop () id_pai: any;
  @Prop () id_objeto: any;
  @Prop () id_classe: any;
  @State () toggle: boolean = false;

  url_base = (window as any).sydleApp.config['ui-api'].BASE_API_URL;
  
  identificaFilho(id_pai: any){
    if (this.identificador === 'tema') return <sy-lib-categoria id_pai={id_pai}/>
    if (this.identificador === 'categoria') return <div>
                                                        <sy-lib-conteudo id_pai={id_pai}/>
                                                        <sy-lib-servico id_pai={id_pai} /></div>
    return null;
  }

  estaPublicado(situacao:boolean){
    if(situacao) return "Publicado";
    return "Não Publicado";
  }

  transformaData(data: any){
    if (data) return `${data.slice(8,10)}/${data.slice(5,7)}/${data.slice(2,4)}`
    return 'vazio';
  }

  

  async componentWillLoad(){
    // console.log("identificador:", this.identificador);
    console.log('id class', this.id_classe );
    console.log('id objeto', this.id_objeto );
    console.log(this.data_atualizacao.slice(2,4))
  }

  render() {
    return (
      <Host>
        <div class='container'>
          <h1>{this.identificador}</h1>
          <div class = 'subcontainer'>
            <div class='classes' role='button'  onClick= {()=> window.open(`https://sefazce-dev.sydle.one/workspaces/view/${this.id_classe}/${this.id_objeto}`)}>
              <h1>{this.nome}</h1>
            </div>
            <div class = 'exibe' role='button'  onClick= {()=> this.toggle = !this.toggle}></div>
          </div>
          <h1>{this.estaPublicado(this.esta_publicado)}</h1>
          <h1>{this.transformaData(this.data_criacao)}</h1>
          <h1>{this.transformaData(this.data_atualizacao)}</h1>
        </div>
          {this.toggle?
            this.identificaFilho(this.id_pai)
            :
            null
          }
      </Host>
    );
  }
}
