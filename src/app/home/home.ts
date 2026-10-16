import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Activite } from '../services/activite';


@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})

export class Home {
  nbItems: number = 4;
  btnText: string = "Envoyer";
  objectifText: string = "";

  // ajouter un constructeur pour avoir l'ajout du routeur en paramètre:
  constructor(private monRouteur: Router, public activiteService: Activite){
    // setTimeout(()=> {monRouteur.navigate(['about2'])}, 5000 ); 
  }

  ajoutItem() {
    this.activiteService.objectifs.push(this.objectifText);
    this.nbItems = this.activiteService.objectifs.length;
  }

  ngOnInit() {
    this.nbItems = this.activiteService.objectifs.length;
  }

  ouvrirDetail(i: number) {
    this.monRouteur.navigate(['consultAct', i]);
  }

}
