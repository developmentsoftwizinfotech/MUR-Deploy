import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { License, Vessel } from './vessel';

@Injectable({
  providedIn: 'root'
})
export class VesselService {
  vesselUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }
 
  addVesselDetail(vesselData:Vessel) {
   return this.http.post(this.vesselUrl+'InsertVessel',vesselData)
  }
  updateVesselDetail(vesselData:Vessel){
    ////debugger;
    return this.http.put(this.vesselUrl+'UpdateVessel',vesselData)
  }
  deleteVessel(vesselData:Vessel){
    ////debugger;
    return this.http.delete(this.vesselUrl+'DeleteVessel/'+ vesselData.VesselId)
  }
  getVesselList(cpage,nRows ,filter) {
    return this.http.get(this.vesselUrl+`VesselList?c=${cpage}&p=${nRows}&filter=${filter}`)
  }

  // dropdownFleetList(){
  //   return this.http.get(this.vesselUrl+'FleetList')
  // }

  dropdownFleetTypeList(cpage,nRows,filter){
    return this.http.get(this.vesselUrl+`FleetTypeList?c=${cpage}&p=${nRows}&filter=${filter}`)

  }

  dropdownFleetList(cpage,nRows,filter) {
    return this.http.get(this.vesselUrl+`FleetList?c=${cpage}&p=${nRows}&filter=${filter}`)
  }
  manageLicense(licenseDetails:License){
    return this.http.post(this.vesselUrl+'InsertLicense',licenseDetails)
  }
  getLicense(id:string){
    return this.http.get(this.vesselUrl+'LicenseLog/'+id)
  }

  updateLicenseDetail(licenseData:License){
    ////debugger;
    return this.http.put(this.vesselUrl+'UpdateLicense',licenseData)
  }

  geLicenseList(licenseId:License) {
    return this.http.get(this.vesselUrl+'LicenseLog/'+licenseId.VesselId)
  }

}
