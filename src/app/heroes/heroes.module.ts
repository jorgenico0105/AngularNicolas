import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListComponent,HeroComponent],
  declarations: [ListComponent,HeroComponent],
})
export class HeroesModule { }
