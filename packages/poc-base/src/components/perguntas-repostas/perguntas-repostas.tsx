import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'sy-lib-perguntas-repostas',
  styleUrl: 'scss/index.scss',
  shadow: true,
})
export class PerguntasRepostas {
  render() {
    return (
      <Host>
        <sy-button type="primary">Hello SYDLE UI!</sy-button>
      </Host>
    );
  }
}
