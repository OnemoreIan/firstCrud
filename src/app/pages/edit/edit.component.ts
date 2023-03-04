import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() usuario:any;

  constructor() { }

  ngOnInit(): void {
  }

  updateEmploy():void{
    //alert('datos recompilados');
    console.log(this.usuario);
  }

}
