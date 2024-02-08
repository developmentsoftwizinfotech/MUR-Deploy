import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Vendor } from '@app-pages/inventory/inventory';

@Injectable({
  providedIn: 'root'
})
export class VendorService {



  vendorUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addVendorDetail(vendorData:Vendor) {
    //debugger
    return this.http.post(this.vendorUrl+'InsertVendor',vendorData)
   }
   updateVendorDetail(vendorData:Vendor){
     ////debugger;
     return this.http.put(this.vendorUrl+'UpdateVendor',vendorData)
   }
   deleteVendor(vendorData:Vendor){
     ////debugger;
     return this.http.delete(this.vendorUrl+'DeleteVendor/'+ vendorData.VendorId)
   }
   getVendorList(cPage, nRows, filter) {
    //debugger
     return this.http.get(this.vendorUrl+`VendorList?c=${cPage}&p=${nRows}&filter=${filter}`)
   }
}
