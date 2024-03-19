import { Component, Input, OnInit } from '@angular/core';
import { ContribuyenteResponseDto } from '../../interfaces/IContribuyente';

@Component({
  selector: 'app-contribuyente-form',
  templateUrl: './contribuyente-form.component.html',
  styleUrls: ['./contribuyente-form.component.css']
})
export class ContribuyenteFormComponent{
@Input() contribuyenteInfo! : ContribuyenteResponseDto


constructor() {

}

}
