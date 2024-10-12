import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  @Output()
  onNewCharacter:EventEmitter<Character>=new EventEmitter();//creamos nuestro emiter

  public character: Character={
    name:'',
    power:0
  }
  saveCharacter():void{
    if(this.character.name.length===0) return;
    this.onNewCharacter.emit(this.character)//mandamos a nuestri padre
    this.character={
      name:'',
      power:0
    }
  }
}
