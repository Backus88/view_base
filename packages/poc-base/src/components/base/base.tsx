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
        <sy-lib-tema/>
      </Host>
    );
  }
}
