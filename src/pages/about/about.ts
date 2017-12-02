import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {

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
    },{
      titulo:"Hobby",
      dato:"montar bicicleta",
      icono:"alarm"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.agregarDato("Mascota","gato");
    this.agregarDato("colegio","Bertolt Brecht");
    this.agregarDato("cantante favorito","ed sheeran");
  }
  agregarDato(nuevoTitulo: string, nuevoDato: string) {
    this.informacion.push({
      titulo:nuevoTitulo,
      dato:nuevoDato,
      icono:"heart"
    });
  }


}
