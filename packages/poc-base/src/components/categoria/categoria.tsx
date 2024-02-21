import { Component, Host, Prop, State, h } from '@stencil/core';
import { CustomAPI } from '@sydle/ui-api';

@Component({
  tag: 'sy-lib-categoria',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class Categoria {
  @State () body: any 
  @State () api: any = new CustomAPI('645e2bb0110ddd2cd4054e8f');
  @Prop  () id_pai: any;

  nome = "categoria";
  identificador :string = 'categoria';
  id_classe = '645e2bb0110ddd2cd4054e8f';

  async componentWillLoad(){
    this.body = {
      "query":{
        "term":{
          "tema._id": this.id_pai
        }
      },
      "size": 9999
    }
  }
  render() {
    return (
      <Host>
        <sy-lib-classe api={this.api}
                       body={this.body}
                       nome={this.nome}
                       identificador={this.identificador}
                       id_classe={this.id_classe}
                       />
      </Host>
    );
  }
}
