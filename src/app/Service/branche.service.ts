import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branche } from '../_Model/branche';

@Injectable({
  providedIn: 'root'
})
export class BrancheService {
  branches:Branche[]=[];
  branche:Branche|null=null;
  constructor(public http:HttpClient) { }
  baseURL:string="http://localhost:5120/api/Branche/";
  GetAll(){
    return this.http.get<Branche[]>(this.baseURL);
  }
  Add(newBranche:Branche){
       return this.http.post(this.baseURL,newBranche);
  }
}
