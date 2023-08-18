import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrancheRoutingModule } from './branche-routing.module';
import { BrancheComponent } from './branche.component';


@NgModule({
  declarations: [
    BrancheComponent
  ],
  imports: [
    CommonModule,
    BrancheRoutingModule
  ]
  ,exports:[
    BrancheComponent
  ]
})
export class BrancheModule { }
