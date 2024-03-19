import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/environments/apiUrl';


@Injectable({
  providedIn: 'root'
})
export class ContribuyentesService {
  constructor(private http : HttpClient) { }

  getCantidadContribuyentes(){
    return this.http.get<any>(
      apiUrl + "Contribuyente/ObtenerCantidadDeContribuyentes"
    )
  }

  getAllContribuyentes(pageNumber : number , pageSize : number):Observable<any>{
    return this.http.get<any>(
      apiUrl + "Contribuyente/ObtenerContribuyentes?pageNumber="+pageNumber+"&pageSize=" + pageSize
    )
  }

  getContribuyenteById(id : number):Observable<any>{
    return this.http.get<any>(
      apiUrl + "Contribuyente/ObtenerContribuyenePorId?id=" + id
    )
  }


  
}
