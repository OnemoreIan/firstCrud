import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Angular crud';
  employs = [
    {name: 'fatz', position: 'manager'},
    {name: 'Lupe', position: 'disigner'},
    {name: 'Mark', position: 'programmer'}
  ]

  model:any ={};

  addEmploy(dat:string):void{
    this.employs.push()
  }

  delEmploy():void{
    this.employs.pop()
  }

  editEmploy():void{

  }

  updateEmploy():void{

  }

}
