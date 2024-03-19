import { Component, Input, OnInit } from '@angular/core';
import { ContribuyenteResponse } from '../../interfaces/IContribuyenteResponse';

@Component({
  selector: 'app-contribuyente-form',
  templateUrl: './contribuyente-form.component.html',
  styleUrls: ['./contribuyente-form.component.css']
})
export class ContribuyenteFormComponent{
@Input() contribuyenteInfo! : ContribuyenteResponse


constructor() {

}

}
