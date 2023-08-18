import { Component, OnInit } from '@angular/core';
import { BrancheService } from 'src/app/Service/branche.service';
import { Branche } from 'src/app/_Model/branche';

@Component({
  selector: 'app-branche',
  templateUrl: './branche.component.html',
  styleUrls: ['./branche.component.css']
})
export class BrancheComponent implements OnInit {
constructor(public brancheService:BrancheService){}
Branches:Branche[]=[];
  ngOnInit(): void {
    this.brancheService.GetAll().subscribe(value=>{
      console.log(value);
         this.Branches=value;
    });
  }

}
