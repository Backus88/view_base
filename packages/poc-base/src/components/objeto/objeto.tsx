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
                                                        <sy-lib-servico id_pai={id_pai} />
                                                   </div>
    return null;
  }

  estaPublicado(situacao:boolean){
    if(situacao) return "Publicado";
    return "Não Publicado";
  }

  transformaData(data: any, dataAtualizacao: boolean){
    if(dataAtualizacao && data) return `${data.slice(8,10)}/${data.slice(5,7)}/${data.slice(2,4)}-${data.slice(11,16)} ` 
    if(data) return `${data.slice(8,10)}/${data.slice(5,7)}/${data.slice(2,4)}` 
    return 'vazio';
  }

  toggleIcone(toggle:boolean){
    if(toggle) return <ion-icon name="chevron-down-outline"></ion-icon>
    return <ion-icon name="chevron-forward-outline"></ion-icon>
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
          <div class = 'exibe' role='button'  onClick= {()=> this.toggle = !this.toggle}>{this.toggleIcone(this.toggle)}</div>
          <div class = 'classe'>
            <h1>{this.identificador}</h1>
          </div>
          <div class='objeto' role='button'  onClick= {()=> window.open(`https://sefazce-dev.sydle.one/workspaces/view/${this.id_classe}/${this.id_objeto}`)}>
            <h1>{this.nome}</h1>
          </div>
          <div class='status'>
            <h1>{this.estaPublicado(this.esta_publicado)}</h1>
          </div>
          <div class= 'data_criacao'>
            <h1>{this.transformaData(this.data_criacao, false)}</h1>
          </div>
          <div class='data_atualizacao'>
            <h1>{this.transformaData(this.data_atualizacao, true)}</h1>
          </div>
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
