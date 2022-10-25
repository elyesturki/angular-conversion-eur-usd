import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HistoriqueDemande } from 'src/app/models/exchange-rates.model';

@Component({
  selector: 'app-historique-list-item',
  templateUrl: './historique-list-item.component.html',
  styleUrls: ['./historique-list-item.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class HistoriqueListItemComponent {

  count = 0;

  @Input() histItem : HistoriqueDemande | undefined ;

  constructor() { }

  check() {
    console.log('running item');
    return true
  }

}
