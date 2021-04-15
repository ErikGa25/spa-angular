import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  heroe:any = {};

  constructor(private activatedRoute:ActivatedRoute, private _heoresService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heoresService.getHeroe(params['id']);
    })
  }

}
