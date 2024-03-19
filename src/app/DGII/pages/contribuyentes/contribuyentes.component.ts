import { Component, OnInit } from '@angular/core';
import { ContribuyentesService } from './services/contribuyente/contribuyentes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContribuyenteResponse } from './interfaces/IContribuyenteResponse';

@Component({
  selector: 'app-contribuyentes',
  templateUrl: './contribuyentes.component.html',
  styleUrls: ['./contribuyentes.component.css']
})
export class ContribuyentesComponent implements OnInit {
  public pageNumber : number = 1;
  private pageSize : number = 2;
  public cantidadRegistros : number = 0;
  public paginasRestantes : number = 0;
  /**
   *
   */

  public contribuyenteData : ContribuyenteResponse[] =[];

  constructor(private contribuyenteService : ContribuyentesService, private router : Router, private route: ActivatedRoute) {
  }

  getContribuyentes(){
    this.contribuyenteService.getAllContribuyentes(this.pageNumber, this.pageSize).subscribe({
      next : (res) => {
        this.contribuyenteData = res.data;
      }})
  }

  getCantidadContribuyentes(){
    this.contribuyenteService.getCantidadContribuyentes().subscribe({
      next : (res) => {
        this.cantidadRegistros = res.data.cantidadContribuyentes
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

      }
    })
  }
  ngOnInit(): void {
          this.getCantidadContribuyentes();
          this.getContribuyentes()
  }

  getContribuyenteId(id : number){
      this.router.navigate(['Detalle',id], { relativeTo: this.route });
  }

  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }



  nextPage(){
    if(this.pageNumber >=1 && this.pageNumber <this.paginasRestantes){
      this.pageNumber += 1;
      this.getContribuyentes()
    }else{
      console.log('no');
    }
  };

  prevPage(){
    if(this.pageNumber >1 && this.pageNumber <=this.paginasRestantes){
      this.pageNumber -= 1;
      this.getContribuyentes()
    }else{
      console.log('no');
    }
  };
}
