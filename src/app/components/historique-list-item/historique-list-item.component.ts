import { Component, Input } from '@angular/core';
import { HistoriqueDemande } from 'src/app/models/exchange-rates.model';

@Component({
  selector: 'app-historique-list-item',
  templateUrl: './historique-list-item.component.html',
  styleUrls: ['./historique-list-item.component.scss']
})
export class HistoriqueListItemComponent {

  @Input() histItem : HistoriqueDemande | undefined ;

  constructor() { }

}
