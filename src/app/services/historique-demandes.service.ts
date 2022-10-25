import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject} from 'rxjs';
import { HistoriqueDemande} from '../models/exchange-rates.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueDemandesService {

 subjectHistoriqueDemande : Subject<HistoriqueDemande> = new ReplaySubject<HistoriqueDemande>();
// subjectHistoriqueDemande = new BehaviorSubject<HistoriqueDemande>(new HistoriqueDemande())

  constructor() {

  }


}

