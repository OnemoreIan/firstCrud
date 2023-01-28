import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Angular crud';
  employes = [
    {name: 'fatz', position: 'manager',email: 'correo de fatz'},
    {name: 'Lupe', position: 'disigner',email: 'correo de Lupe'},
    {name: 'Mark', position: 'programmer',email: 'correo de Mark'}
  ]

  model:any ={};
  model2:any = {};
  myvalue!:any;
  msg:string = 'Ejemplo';

  addEmploy():void{
    alert('Dato almacenado exitosamente');
    this.employes.push(this.model)
  }

  delEmploy(i:number):void{
    //this.employes.pop()
    let confrimacion = confirm('Are you shure to continue this acction?');
    if (confrimacion) {
      this.employes.splice(i, 1)
    }
  }

  editEmploy(i:number):void{
    this.model2.name = this.employes[i].name;
    this.model2.position = this.employes[i].position;
    this.model2.email = this.employes[i].email;
    this.myvalue = i;
  }

  updateEmploy():void{
    //alert('datos recompilados');
    let i = this.myvalue;
    for (let j = 0; j < this.employes.length; j++) {
      if (i == j) {
        this.employes[i] = this.model2;
        this.model2 = {};
      }
      
    }
    console.log(this.model2);
  }

}
