import { Component, h, Host } from '@stencil/core';



@Component({
  tag: 'sy-lib-base',
  styleUrl: 'scss/index.scss',
  shadow: true,
})

export class Base {
 

  render() {
    return (
      <Host>
        <div class='container-base'>
          <div class = 'classe'><h2>Classe</h2></div>
          <div class = 'titulo'><h2>Titulo</h2></div>
          <div class = 'status'><h2>Status</h2></div>
          <div class = 'data_criacao'><h2>Data de Criação</h2></div>
          <div class = 'data_atualizacao'><h2>Data de Atualização</h2></div>
        </div>
        <sy-lib-tema/>
      </Host>
    );
  }
}
