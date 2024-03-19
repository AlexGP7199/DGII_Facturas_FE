import { Component, OnInit } from '@angular/core';
import { ContribuyentesService } from './services/contribuyentes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContribuyenteResponseDto } from './interfaces/IContribuyente';

@Component({
  selector: 'app-contribuyentes',
  templateUrl: './contribuyentes.component.html',
  styleUrls: ['./contribuyentes.component.css']
})
export class ContribuyentesComponent implements OnInit {

  /**
   *
   */

  public contribuyenteData : ContribuyenteResponseDto[] =[];

  constructor(private contribuyenteService : ContribuyentesService, private router : Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
      this.contribuyenteService.getAllContribuyentes().subscribe({
        next : (res) => {
          //console.log(res.data);
          this.contribuyenteData = res.data;
          //console.log(this.contribuyenteData)
        }
      })
  }

  getContribuyenteId(id : number){
    console.log("llego algo", id)
      this.router.navigate(['Detalle',id], { relativeTo: this.route });
  }

  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }



  prevPage(){};

  nextPage(){};
}
