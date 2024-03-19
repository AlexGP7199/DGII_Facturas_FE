
export interface ContribuyenteResponseDto {
   rncCedula: string;
   nombre: string;
   tipo_Contribuyente: string;
   estatus_Contribuyente: string;
}

export interface ContribuyenteEditResponseDto{
   rncCedula: string;
   nombre: string;
   tipo_Contribuyente: number;
   estatus_Contribuyente: number;
}

export interface ContribuyenteFacturasDto {
  rncCedulaId: number;
  ncf: string;
  monto: number;
  itbis18: number;
  id: number;
}

export interface MontoTotalItbis {
  itbis_Total : number
}


