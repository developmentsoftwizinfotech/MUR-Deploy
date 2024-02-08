import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { Cargo } from '@app-pages/settings/setting';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  cargoUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addCargoDetail(cargoData:Cargo) {
    return this.http.post(this.cargoUrl+'InsertCargo',cargoData)
   }
   updateCargoDetail(cargoData:Cargo){
     ////debugger;
     return this.http.put(this.cargoUrl+'UpdateCargo',cargoData)
   }
   deleteCargo(CargoData:Cargo){
     ////debugger;
     return this.http.delete(this.cargoUrl+'DeleteCargo/'+ CargoData.CargoId)
   }
  //  getCargoList() {
  //    return this.http.get(this.cargoUrl+'CargoList')
  //  }

   getCargoList(cpage,nRows,filter) {
    return this.http.get(this.cargoUrl+`CargoList?c=${cpage}&p=${nRows}&filter=${filter}`)
  }
}
