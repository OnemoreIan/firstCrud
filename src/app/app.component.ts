import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Crud en Angular Cli';
  employes = [
    {name: 'fatz', position: 'manager',email: 'correo de fatz'},
    {name: 'Lupe', position: 'disigner',email: 'correo de Lupe'},
    {name: 'Mark', position: 'programmer',email: 'correo de Mark'}
  ]

  model:any ={};
  model2:any = {};
  myvalue!:any;
  msgS:string = '';
  msgW:string = '';
  msgD:string = '';
  seeEditform: boolean = false;

  close():void{
    this.msgS = '';
    this.msgW = '';
    this.msgD = '';
  }

  addEmploy():void{
    alert('Dato almacenado exitosamente');
    this.employes.push(this.model)
    this.model={}
    this.msgS= 'Registro creado';
    this.mensage()
  }

  delEmploy(i:number):void{
    //this.employes.pop()
    let confrimacion = confirm('Are you shure to continue this acction?');
    if (confrimacion) {
      this.employes.splice(i,1)
    }
    this.msgS = 'Registro Eliminado';
  }

  editEmploy(i:number):void{
    this.model2.name = this.employes[i].name;
    this.model2.position = this.employes[i].position;
    this.model2.email = this.employes[i].email;
    this.myvalue = i;
    this.seeEditform = true
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
    this.msgW  = 'Registro editado';
    this.seeEditform = false;
  }

  

  mensage(){
    Swal.fire({
      icon: 'success',
      title: 'Registro de datos exitoso',
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false
    })
  }

}
