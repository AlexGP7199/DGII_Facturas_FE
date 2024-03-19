import { Component, OnInit } from '@angular/core';
import { ContribuyentesService } from '../../services/contribuyentes.service';
import { ActivatedRoute } from '@angular/router';
import { ContribuyenteFacturasDto, ContribuyenteResponseDto, MontoTotalItbis } from '../../interfaces/IContribuyente';
import { ContribuyenteFacturasComponent } from '../../components/contribuyente-facturas/contribuyente-facturas.component';

@Component({
  selector: 'app-contribuyente-detail',
  templateUrl: './contribuyente-detail.component.html',
  styleUrls: ['./contribuyente-detail.component.css']
})
export class ContribuyenteDetailComponent implements OnInit {
  public id : number = 0;
  public contribuyenteInfo!: ContribuyenteResponseDto;
  public facturasContribuyentes : ContribuyenteFacturasDto[] = []
  public montoTotalITBIS! : MontoTotalItbis
  constructor(private contribuyenteService : ContribuyentesService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.route.params.subscribe(param => {
        this.id = param['id'];
        console.log(this.id);
        this.contribuyenteService.getContribuyenteById(this.id).subscribe({
          next : (res) => {
            this.contribuyenteInfo = res.data;
            console.log("guardo");
            console.log(this.contribuyenteInfo);
            this.contribuyenteService.getAllFacturasByContribuyenteId(this.id).subscribe({
              next : (res) => {
                console.log(res);
                console.log("facturas")
                this.facturasContribuyentes = res.data;
                console.log(this.facturasContribuyentes);
                this.contribuyenteService.getMontoTotalITBIS(this.id).subscribe({
                  next : (res) => {
                      this.montoTotalITBIS = res.data;
                  }
                })
              }
        })
          }
        })

      });

  }
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }



  prevPage(){};

  nextPage(){};
}