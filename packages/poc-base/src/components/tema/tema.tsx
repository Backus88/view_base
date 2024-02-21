import { Component, h, Host, State } from '@stencil/core';
import { CustomAPI } from '@sydle/ui-api';

@Component({
  tag: 'sy-lib-tema',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class Tema {
  @State () body: any = {"size": 9999};
  @State () api: any = new CustomAPI('645e2bbe73716b2345bb08e4');
  
  nome = "tema";
  identificador: string = "tema";
  id_classe = '645e2bbe73716b2345bb08e4';

  render() {
    return (
      <Host>
        <sy-lib-classe 
            api={this.api} 
            body={this.body} 
            nome={this.nome}
            identificador={this.identificador}
            id_classe = {this.id_classe}
            />
      </Host>
    );
  }
}
