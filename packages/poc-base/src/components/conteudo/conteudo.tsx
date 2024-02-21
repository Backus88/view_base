import { Component, Host, Prop, State, h } from '@stencil/core';
import { CustomAPI } from '@sydle/ui-api';

@Component({
  tag: 'sy-lib-conteudo',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class Conteudo {
  @State () body: any 
  @State () api: any = new CustomAPI('646e247ad961f4232baea9af');
  @Prop  () id_pai: any;

  nome = "contentName";
  identificador = 'conteudo';

  async componentWillLoad(){
    console.log('idpai', this.id_pai)
    this.body = {
      "query":{
        "term":{
          "data.categoria._id": this.id_pai
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
                       identificador={this.identificador}/>
      </Host>
    );
  }
}
