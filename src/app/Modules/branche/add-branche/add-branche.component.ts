import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BrancheService } from 'src/app/Service/branche.service';
import { Branche } from 'src/app/_Model/branche';

@Component({
  selector: 'app-add-branche',
  templateUrl: './add-branche.component.html',
  styleUrls: ['./add-branche.component.css']
})
export class AddBrancheComponent {
  branche:Branche=new Branche(0,"","",0);
  constructor(public brancheService:BrancheService,public http:HttpClient){}
  
  Add(){
    this.brancheService.Add(this.branche).subscribe(value=>{
      console.log(value);
    })
  }

}
