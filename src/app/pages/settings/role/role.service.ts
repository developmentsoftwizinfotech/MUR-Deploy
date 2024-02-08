import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Role } from '@app-pages/settings/setting';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  roleUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addRoleDetail(roleData:Role) {
    return this.http.post(this.roleUrl+'InsertRole',roleData)
   }
   updateRoleDetail(roleData:Role){
     ////debugger;
     return this.http.put(this.roleUrl+'UpdateRole',roleData)
   }
   deleteRole(roleData:Role){
     ////debugger;
     return this.http.delete(this.roleUrl+'DeleteRole/'+ roleData.RoleId)
   }
  //  getRoleList() {
  //    return this.http.get(this.roleUrl+'RoleList')
  //  }

   getRoleList(cpage,nRows,filter) {
  return this.http.get(this.roleUrl+`RoleList?c=${cpage}&p=${nRows}&filter=${filter}`)
}
}
