import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'sy-lib-classe',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class Classe {
  @Prop () api: any;
  @Prop () body: any;
  @Prop () identificador: string;
  @Prop () nome: any;
  @State () objetos: any;
  @State () esta_publicado: boolean = false;
  @State () data_criacao: any;
  @State () data_atualizacao: any;
  @State () id_filho: any;

  publicado(objeto: any){
    if (!objeto._source.publishedDate || objeto._source.publishedDate.length === 0) return false;
    return true;
  }

  pegaObjetoId(objeto:any){
    return objeto._source.tipo;
  }
  teste(item:any){
    if(item._source[this.nome]) return item._source[this.nome];
    if(item._source.data[this.nome]) return item._source.data[this.nome];
  }

  async componentWillLoad(){
    let items : any = await this.api.fetch("_search", this.body);
    this.objetos = items?.data.hits.hits;
  }

  render() {
    return (
      <Host>
        {this.objetos.map(item =>
          <sy-lib-objeto esta_publicado= {this.publicado(item)}
                         data_criacao={item._source.publishedDate}
                         data_atualizacao={item._source._lastUpdateDate}
                         nome={this.teste(item)}
                         identificador={this.identificador}
                         id_pai={item._id}
                         >

          </sy-lib-objeto>
        )}
      </Host>
    );
  }
}
