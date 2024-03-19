import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DgiiAppRoutingModule } from './dgii-app-routing.module';
import { ContribuyentesComponent } from './pages/contribuyentes/contribuyentes.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
//import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ContribuyenteTableComponent } from './pages/contribuyentes/components/contribuyente-table/contribuyente-table.component';
import { ContribuyenteDetailComponent } from './pages/contribuyentes/pages/contribuyente-detail/contribuyente-detail.component';
import { ContribuyenteFormComponent } from './pages/contribuyentes/components/contribuyente-form/contribuyente-form.component';
import { ContribuyenteFacturasComponent } from './pages/contribuyentes/components/contribuyente-facturas/contribuyente-facturas.component';


//import { ContribuyentesDetallesComponent } from './pages/contribuyentes/pages/contribuyentes-detalles/contribuyentes-detalles.component';


@NgModule({
  declarations: [
    FacturasComponent,
    ContribuyenteTableComponent,
    ContribuyentesComponent,
    ContribuyenteDetailComponent,
    ContribuyenteFormComponent,
    ContribuyenteFacturasComponent
  ],
  imports: [
    CommonModule,
    DgiiAppRoutingModule,
    SharedModule,

  ],exports:[
    SharedModule
  ]
})
export class DgiiAppModule { }
