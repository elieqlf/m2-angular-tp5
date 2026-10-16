import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Activite {
  objectifs: string[] = [];

  removeItem(index: number) {
    this.objectifs.splice(index, 1);
  }

  updateItem(index: number, valeur: string) {
    this.objectifs[index] = valeur;
  }
}

