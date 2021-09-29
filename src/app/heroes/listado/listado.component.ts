import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spyderman','Ironman','Hulk','Thor'];
  heroeBorrado: string ='';

  borarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '' ;
  }

}
