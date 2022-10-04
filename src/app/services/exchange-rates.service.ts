import { Injectable } from '@angular/core';
import { map, Subject, Subscription, timer } from 'rxjs';
import { ITauxChangeActionEvent, TauxChangeActionTypesEnum } from '../models/exchange-rates.model';

@Injectable({
  providedIn: 'root'
})
export class ExhangeRatesService {

  initExchangeRatesValue : number = 1.1;
  radomValue : number = 0;

  timerSubscription: Subscription | undefined;
  timer : number = 3000;

  sourceEventTauxChangeSubject: Subject<ITauxChangeActionEvent> = new Subject<ITauxChangeActionEvent>();
  sourceEventTauxChangeSubjectObservable = this.sourceEventTauxChangeSubject.asObservable();

  constructor() {
    this.startVariableTaux()
  }

  publishTauxEvent(taux: ITauxChangeActionEvent) {
    this.sourceEventTauxChangeSubject.next(taux);
  }

  startVariableTaux() {
    this.timerSubscription = timer(0, 3000).pipe(
      map(() => {
        this.radomValue = this.getRandomValue(-0.05, 0.05);
        let value = this.initExchangeRatesValue + this.radomValue;
        this.publishTauxEvent({
              type: TauxChangeActionTypesEnum.UPDATE_EXCHANGE_RATES,
              payload: Math.round(value * 100) / 100
            });
      })
    ).subscribe();
  }

  getRandomValue(min: number, max: number) {
    let val = Math.random() * (max - min) + min;
    return Math.round(val * 100) / 100;
  }

}

//Math.round(value * 100) / 100
