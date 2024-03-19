import { Component, OnInit } from '@angular/core';
import { ContribuyentesService } from '../../services/contribuyente/contribuyentes.service';
import { ActivatedRoute } from '@angular/router';
import {ContribuyenteResponse } from '../../interfaces/IContribuyenteResponse';
import { ContribuyenteFacturasComponent } from '../../components/contribuyente-facturas/contribuyente-facturas.component';
import { ContribuyenteFacturas } from '../../interfaces/IContribuyeteFacturas';
import { MontoTotalItbis } from '../../interfaces/MontoTotalItbis';
import { FacturasService } from '../../services/facturas/facturas.service';

@Component({
  selector: 'app-contribuyente-detail',
  templateUrl: './contribuyente-detail.component.html',
  styleUrls: ['./contribuyente-detail.component.css']
})
export class ContribuyenteDetailComponent implements OnInit {
  public id : number = 0;
  public contribuyenteInfo!: ContribuyenteResponse;
  public facturasContribuyentes : ContribuyenteFacturas[] = []
  public montoTotalITBIS! : MontoTotalItbis


  public pageNumber : number = 1;
  private pageSize : number = 2;
  public cantidadRegistros : number = 0;
  public paginasRestantes : number = 0;

  constructor(private contribuyenteService : ContribuyentesService,private facturaServices : FacturasService, private route: ActivatedRoute) {
  }

  getContribuyenteById(id : number){
    this.contribuyenteService.getContribuyenteById(this.id).subscribe({
      next : (res) => {
        this.contribuyenteInfo = res.data;
      }});
  }
  getCantidadContribuyente(id : number){
    this.facturaServices.getCantidadFacturasByContribuyenteId(id).subscribe({
      next : (res) => {
          this.cantidadRegistros = res.data.cantidad;
          if(this.cantidadRegistros/this.pageSize <1){
            this.paginasRestantes = 1
          }else{
            if(this.cantidadRegistros%2 != 0){
              this.paginasRestantes = Math.floor(this.cantidadRegistros/this.pageSize) + 1
            }
            else{
              this.paginasRestantes = Math.floor(this.cantidadRegistros/this.pageSize)
            }
          }
          this.getAllFacturasByContribuyenteId(this.id);
      }
    })
  }
  getAllFacturasByContribuyenteId(id:number){
    this.facturaServices.getAllFacturasByContribuyenteId(this.id,this.pageNumber,this.pageSize).subscribe({
      next : (res) => {
        this.facturasContribuyentes = res.data;
      }});
  }



  getMontoTotalITBIS(id : number){
    this.facturaServices.getMontoTotalITBIS(this.id).subscribe({
      next : (res) => {
          this.montoTotalITBIS = res.data;
      }
    })
  }

  ngOnInit(): void {
      this.route.params.subscribe(param => {
        this.id = param['id'];
        this.getContribuyenteById(this.id );
        this.getCantidadContribuyente(this.id);
        this.getMontoTotalITBIS(this.id);
      });

  }
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }



  nextPage(){
    if(this.pageNumber >=1 && this.pageNumber <this.paginasRestantes){
      this.pageNumber += 1;
      this.getCantidadContribuyente(this.id)
    }else{
      console.log('no');
    }
  };

  prevPage(){
    if(this.pageNumber >1 && this.pageNumber <=this.paginasRestantes){
      this.pageNumber -= 1;
      this.getCantidadContribuyente(this.id)
    }else{
      console.log('no');
    }
  };
}
