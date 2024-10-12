
import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main',
  templateUrl: 'main.component.html'
})

export class MainComponent  {
  //debugger sirve para solucionar problemas en el codigo
  constructor(public dbzService:DbzService){
  }
}
