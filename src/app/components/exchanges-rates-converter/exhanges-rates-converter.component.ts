import { Component, OnInit} from '@angular/core';
import { TauxChangeActionTypesEnum, ITauxChangeActionEvent, HistoriqueDemande } from 'src/app/models/exchange-rates.model';
import { ConvertExhangeRatesService } from 'src/app/services/convert-exchange-rates.service';
import { ExhangeRatesService } from 'src/app/services/exchange-rates.service';
import { HistoriqueDemandesService } from 'src/app/services/historique-demandes.service';

@Component({
  selector: 'app-exchanges-rates-converter',
  templateUrl: './exchanges-rates-converter.component.html',
  styleUrls: ['./exchanges-rates-converter.component.scss']
})
export class ExhangesRatesConverterComponent implements OnInit {

  tauxReel : number = 0;
  tauxSaved : number = 0;
  devise = {
    eur : '€',
    dollar : '$'
  };
  fromEurToUsd = true;
  convertResult = 0;
  userAmount : number = 1;
  tauxFixeIsActive : boolean = false;
  historiqueDemande = new HistoriqueDemande();

  constructor(private exhangeRatesService : ExhangeRatesService,
              private convertExhangeRatesService: ConvertExhangeRatesService,
              private historiqueDemandesService : HistoriqueDemandesService){ }

  ngOnInit(): void {
    this.getTauxChange();
  }

  getTauxChange() {
    this.exhangeRatesService.sourceEventTauxChangeSubjectObservable
      .subscribe((event: ITauxChangeActionEvent)=> {
        this.onActionEvent(event)
    })
  }

  getConvertedTauxChange(montant: number, taux?: number) {
    this.tauxSaved = taux ? taux : this.tauxReel;
    this.convertResult = this.convertExhangeRatesService.convertTauxChange(montant, this.tauxSaved);
  }

  convertWithFixeTauxChange(event: any) {
    let tauxFixe = JSON.parse(event.target.value);
    this.tauxFixeIsActive = this.convertExhangeRatesService.tauxFixeIsActive(tauxFixe, this.tauxReel);
    if (this.tauxFixeIsActive) {
      this.exhangeRatesService.publishTauxEvent({type: TauxChangeActionTypesEnum.UPDATE_EXCHANGE_RATES_FIXE,payload: tauxFixe});
    }
  }

  switchDevise() {
    this.exhangeRatesService.publishTauxEvent({type: TauxChangeActionTypesEnum.SWITCH_EXCHANGE_RATES,payload: this.tauxReel});
  }

  setHistoriqueDeConversion() {
    this.historiqueDemandesService.subjectHistoriqueDemande.next(
      {
        amount : this.userAmount,
        rates :this.tauxSaved,
        result : this.convertResult,
        fromEurToUsd : this.fromEurToUsd,
        devise : this.devise
      }
    )
  }

  // action event
  onActionEvent(event: ITauxChangeActionEvent) {
    switch (event.type) {
      case TauxChangeActionTypesEnum.UPDATE_EXCHANGE_RATES:
        this.tauxReel = event.payload;
        this.getConvertedTauxChange(this.userAmount, event.payload);
        break;
      case TauxChangeActionTypesEnum.UPDATE_EXCHANGE_RATES_FIXE:
        this.getConvertedTauxChange(this.userAmount, event.payload);
        this.setHistoriqueDeConversion();
        break;
      case TauxChangeActionTypesEnum.SWITCH_EXCHANGE_RATES:
        this.userAmount = this.convertResult;
        this.getConvertedTauxChange(this.userAmount, event.payload);
        this.setHistoriqueDeConversion();
        this.fromEurToUsd = !this.fromEurToUsd;
        break;
    }
  }
}
