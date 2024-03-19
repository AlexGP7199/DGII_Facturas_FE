import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  //{path: '**', redirectTo: 'Pokemon', pathMatch: 'full'},
  {path : 'home', loadChildren:() => import('./DGII/dgii-app-routing.module').then((m) => m.DgiiAppRoutingModule)},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
