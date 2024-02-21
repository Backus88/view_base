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
  @State () toggle: boolean = false;
  
  identificaFilho(id_pai: any){
    if (this.identificador === 'tema') return <sy-lib-categoria id_pai={id_pai}/>
    if (this.identificador === 'categoria') return <div>
                                                        <sy-lib-conteudo id_pai={id_pai}/>
                                                        <sy-lib-servico id_pai={id_pai} /></div>
    return null;
  }

  async componentWillLoad(){
    // console.log("identificador:", this.identificador);
    // console.log('id', this.id_pai);
  }

  render() {
    return (
      <Host>
        <div class='classes' role='button'  onClick= {()=> this.toggle = !this.toggle}>{this.nome}</div>
        {this.toggle?
          this.identificaFilho(this.id_pai)
          :
          null
        }
      </Host>
    );
  }
}
