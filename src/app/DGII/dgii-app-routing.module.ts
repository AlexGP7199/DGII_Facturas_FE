import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContribuyentesComponent } from './pages/contribuyentes/contribuyentes.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { ContribuyenteDetailComponent } from './pages/contribuyentes/pages/contribuyente-detail/contribuyente-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'Contribuyentes', pathMatch: 'full'},
  {path: 'Contribuyentes', component: ContribuyentesComponent,
                            children : [
                              {path: 'Detalle/:id', component : ContribuyenteDetailComponent}
                           ]},
  //{path: 'Contribuyentes/Detalle/:id', component : ContribuyenteDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DgiiAppRoutingModule { }
