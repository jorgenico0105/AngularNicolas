import { Injectable } from '@angular/core';
import { Character } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters:Character[]=[
    {
      name:'Krillin',
      power:1000
    },{
      name:'Goku',
      power:10000
    }
  ];
  addCharacter(character:Character):void{
    this.characters.push(character)
  }
  deleteCharacter(index:number):void{
    // this.characters.filter(character=>character)
    this.characters.splice(index,1)
    console.log("Eliminando: "+ index)
  }

}
