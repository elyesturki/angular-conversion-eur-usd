import { Component, OnInit } from '@angular/core';
import { HistoriqueDemande } from 'src/app/models/exchange-rates.model';
import { HistoriqueDemandesService } from 'src/app/services/historique-demandes.service';

@Component({
  selector: 'app-historique-list',
  templateUrl: './historique-list.component.html',
  styleUrls: ['./historique-list.component.scss']
})
export class HistoriqueListComponent implements OnInit {

  historiqueDemandes : HistoriqueDemande[] = [];

  constructor(private historiqueDemandesService : HistoriqueDemandesService) { }

  ngOnInit(): void {
    this.setHistoriqueDeConversion();
  }

  setHistoriqueDeConversion() {
    this.historiqueDemandesService.subjectHistoriqueDemande.subscribe((value)=> {
      this.historiqueDemandes.unshift(value);
      this.historiqueDemandes = this.historiqueDemandes.slice(0, 5);
    })

  }

}
