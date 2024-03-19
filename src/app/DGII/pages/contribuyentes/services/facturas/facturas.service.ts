import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/environments/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(private http : HttpClient) { }

  getCantidadFacturasByContribuyenteId(ContribuyenteId : number):Observable<any>{
    return this.http.get<any>(
      apiUrl + "Factura/ObtenerCantidadFacturasByContribuyenteId?contribuyenteId="+ContribuyenteId
    )
  }
  getAllFacturasByContribuyenteId(ContribuyenteId : number, pageNumber : number, pageSize : number):Observable<any>{
    return this.http.get<any>(
      apiUrl + "Factura/ObtenerTodasLasFacturasByContribyenteId?id="+ContribuyenteId+"&pageNumber="+pageNumber+"&pageSize="+pageSize
    )
  }

  getMontoTotalITBIS(ContribuyenteId : number):Observable<any>{
    return this.http.get<any>(
      apiUrl + "Factura/ObtenerMontoTotalITBISbyContribuidorId?id=" + ContribuyenteId
    )
  }
}
