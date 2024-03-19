import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ContribuyenteResponseDto } from '../../interfaces/IContribuyente';



@Component({
  selector: 'app-contribuyente-table',
  templateUrl: './contribuyente-table.component.html',
  styleUrls: ['./contribuyente-table.component.css']
})
export class ContribuyenteTableComponent {
  @Input() contribuyentes : ContribuyenteResponseDto[] = []
  @Output() contribuyenteId  = new EventEmitter<number>();
  displayedColumns: string[] = ['rncCedula', 'nombre', 'tipo_Contribuyente', 'estatus_Contribuyente', 'acciones'];
  dataSource = new MatTableDataSource(this.contribuyentes);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource)
  }

  editContribuyente(row : any){
  }
  showDetailContribuyente(id : number){
    //console.log('hi', id);
    this.contribuyenteId.emit(id);
  }
}
