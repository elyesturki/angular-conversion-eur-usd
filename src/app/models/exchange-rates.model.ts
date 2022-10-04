export enum TauxChangeActionTypesEnum {
  UPDATE_EXCHANGE_RATES = "[ExchangeRates] Update Exchange Rates",
  UPDATE_EXCHANGE_RATES_FIXE = "[ExchangeRates] Update Exchange Rates Fixe",
  SWITCH_EXCHANGE_RATES = "[ExchangeRates] SWITCH Exchange Rates"
}
export interface ITauxChangeActionEvent {
  type : TauxChangeActionTypesEnum,
  payload? : any
}

export class HistoriqueDemande {
  amount: number = 0;
  rates : number = 0;
  result : number = 0;
  fromEurToUsd : boolean = true;
  devise = {
    eur : '€',
    dollar : '$'
  };
}
