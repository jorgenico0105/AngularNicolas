import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces';

@Component({
  selector: 'app-dbz-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  @Output()
  emitId:EventEmitter<number>=new EventEmitter()
  @Input()
  public characterList:Character[]=[
    {
      name:'Trunks',
      power:50
    }
  ]
  onDeleteCharacter(index:number):void{
    this.emitId.emit(index)
  }
}
