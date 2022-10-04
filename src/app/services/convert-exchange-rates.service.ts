import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertExhangeRatesService {

  convertTauxChange(montant: number, taux: number) : number {
    let res = taux * montant;
    return Math.round(res * 100) / 100;
  }

  tauxFixeIsActive(tauxFixe:number, tauxReel:number) {
    if (tauxFixe!==0) {
      let result = Math.round((tauxFixe/tauxReel) * 100) - 100;
      if (result>0 && result<=2) {
        return true;
      }
    }
    return false
  }

}
