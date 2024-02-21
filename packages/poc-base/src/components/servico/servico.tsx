import { Component, Host, Prop, State, h } from '@stencil/core';
import { CustomAPI } from '@sydle/ui-api';

@Component({
  tag: 'sy-lib-servico',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class Servico {
  @State () body: any 
  @State () api: any = new CustomAPI('646e20ec5676b30e5c9249f8');
  @Prop  () id_pai: any;

  nome = "contentName";
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
                       />
      </Host>
    );
  }
}
