import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExhangesRatesConverterComponent } from './components/exchanges-rates-converter/exhanges-rates-converter.component';

const routes: Routes = [
  {path: "", component: ExhangesRatesConverterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
