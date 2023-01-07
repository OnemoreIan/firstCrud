import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Angular crud';
  employes = [
    {name: 'fatz', position: 'manager',mail: 'correo de ejemplo'},
    {name: 'Lupe', position: 'disigner',mail: 'correo de ejemplo'},
    {name: 'Mark', position: 'programmer',mail: 'correo de ejemplo'}
  ]

  model:any ={};
  model2:any = {};

  addEmploy():void{
    alert('Dato almacenado exitosamente');
    this.employes.push(this.model)
  }

  delEmploy():void{
    //this.employes.pop()
  }

  editEmploy():void{

  }

  updateEmploy():void{

  }

}
