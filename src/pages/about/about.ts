import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

nombre: string ="Rossy Ludeña";
ocupacion: string = "estudiante";
edad: number =15;

datos:any ={
 nombre: "Rossy Ludeña",
 ocupacion: "Estudiante",
 edad: 15

};
origen:any ={
  titulo_origen:"origen",
  origen:"lima-perú"
};
email:any= {
  titulo: "E-mail",
  dato:"1dludenarossy@gmail.com"
}

  constructor(public navCtrl: NavController) {

  }

}
