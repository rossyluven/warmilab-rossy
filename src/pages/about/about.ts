import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  informacion: any[]= [
    {
      titulo:"origen",
      dato:"Liverpool, UK",
      icono:"flag"
    },
    {
      titulo:"E-mail",
      dato:"PauliIMC@hotmail.com",
      icono:"mail"
    },
    {
      titulo:"telefono",
      dato:98764125,
      icono:"call"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
