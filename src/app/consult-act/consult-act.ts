import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from '../services/activite';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-consult-act',
  styleUrl: './consult-act.scss',
  templateUrl: './consult-act.html',
})
export class ConsultAct {
  param = "valDefault"
  param2 = null

  index: number = -1;
  nom: string = "";
  modif: boolean = false;

  constructor(private actRoute: ActivatedRoute, public activiteService: Activite, private router: Router){
    this.param = actRoute.snapshot.params['idAct']
    this.param2 = actRoute.snapshot.params['idSec']
    this.index = Number(actRoute.snapshot.params['idAct']);
    this.nom = activiteService.objectifs[this.index];
  }

  supprimeElem(index: number) {
    this.activiteService.removeItem(index);
    this.router.navigate(['/']);
  }

  sauvegarde() {
    this.activiteService.updateItem(this.index, this.nom);
    this.modif = false;
  }

  retour() {
    this.router.navigate(['/']);
  }
}


