import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/environments/apiUrl';
import { ContribuyenteResponseDto } from '../interfaces/IContribuyente';

@Injectable({
  providedIn: 'root'
})
export class ContribuyentesService {


  constructor(private http : HttpClient) { }

  getAllContribuyentes():Observable<any>{
    return this.http.get<any>(
      apiUrl + "Contribuyente/ObtenerContribuyentes"
    )
  }

  getContribuyenteById(id : number):Observable<any>{
    return this.http.get<any>(
      apiUrl + "Contribuyente/ObtenerContribuyenePorId?id=" + id
    )
  }

  getAllFacturasByContribuyenteId(ContribuyenteId : number):Observable<any>{
    return this.http.get<any>(
      apiUrl + "Factura/ObtenerTodasLasFacturasByContribyenteId?id="+ContribuyenteId
    )
  }

  getMontoTotalITBIS(ContribuyenteId : number):Observable<any>{
    return this.http.get<any>(
      apiUrl + "Factura/ObtenerMontoTotalITBISbyContribuidorId?id=" + ContribuyenteId
    )
  }
}
