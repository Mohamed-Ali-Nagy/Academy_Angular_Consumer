import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrancheRoutingModule } from './branche-routing.module';
import { BrancheComponent } from './branche.component';
import { AddBrancheComponent } from './add-branche/add-branche.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BrancheComponent,
    AddBrancheComponent
  ],
  imports: [
    CommonModule,
    BrancheRoutingModule,
    CommonModule,FormsModule
  ]
  ,exports:[
    BrancheComponent,AddBrancheComponent
  ]
})
export class BrancheModule { }
