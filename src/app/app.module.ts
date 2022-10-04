import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExhangesRatesConverterComponent } from './components/exchanges-rates-converter/exhanges-rates-converter.component';
import { CodeDevisePipe } from './pipes/code-devise.pipe';
import { HistoriqueListComponent } from './components/historique-list/historique-list.component';
import { HistoriqueListItemComponent } from './components/historique-list-item/historique-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ExhangesRatesConverterComponent,
    CodeDevisePipe,
    HistoriqueListComponent,
    HistoriqueListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
