import { Injectable } from '@angular/core';
import { ReplaySubject, Subject} from 'rxjs';
import { HistoriqueDemande} from '../models/exchange-rates.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueDemandesService {

  subjectHistoriqueDemande : Subject<HistoriqueDemande> = new ReplaySubject<HistoriqueDemande>();

  constructor() {

  }


}

