import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
    providedIn: 'root'
  })
  export class CustomerService {
    constructor(private http: HttpClient) { }

    getCustomersMedium() {
        return this.http.get<any>('assets/customers-medium.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }
}

[{
  "RequisitionId": null,
  "VendorId": 1007,
  "VesselId": 2004,
  "PortId": 4220,
  "SupplyDate": "2023-09-13",
  "MURFixtureNo": 5007,
  "TypeOfSupplyId": 6,
  "EquipmentManagementList": [
      {
          "EquipmentCategoryId": 9011,
          "EquipmentCategoryName": "Chemicals",
          "VesselId": 0,
          "EquipmentList": [
              {
                  "RequisitionId": 0,
                  "EquipmentId": 5009,
                  "UnitName": "KGS",
                  "VesselId": 0,
                  "MinOrderQty": 12345,
                  "CreatedDate": "0001-01-01T00:00:00",
                  "Active": false,
                  "EquipmentName": "Cement Remover"
              },
              {
                  "RequisitionId": 0,
                  "EquipmentId": 5011,
                  "UnitName": "KGS",
                  "VesselId": 0,
                  "MinOrderQty": 3123,
                  "CreatedDate": "0001-01-01T00:00:00",
                  "Active": false,
                  "EquipmentName": "Alkaline"
              }
          ]
      },
      {
          "EquipmentCategoryId": 9012,
          "EquipmentCategoryName": "Consumables",
          "VesselId": 0,
          "EquipmentList": [
              {
                  "RequisitionId": 0,
                  "EquipmentId": 5010,
                  "UnitName": "Units",
                  "VesselId": 0,
                  "MinOrderQty": 4564,
                  "CreatedDate": "0001-01-01T00:00:00",
                  "Active": false,
                  "EquipmentName": "Aluminium Poles"
              }
          ]
      },
      {
          "EquipmentCategoryId": 9013,
          "EquipmentCategoryName": "Equipment",
          "VesselId": 0,
          "EquipmentList": [
              {
                  "RequisitionId": 0,
                  "EquipmentId": 5012,
                  "UnitName": "KGS",
                  "VesselId": 0,
                  "MinOrderQty": 3244,
                  "CreatedDate": "0001-01-01T00:00:00",
                  "Active": false,
                  "EquipmentName": "Submersible Pump & Accessories"
              }
          ]
      },
      {
          "EquipmentCategoryId": 9009,
          "EquipmentCategoryName": "Paint & Chemicals",
          "VesselId": 0,
          "EquipmentList": [
              {
                  "RequisitionId": 0,
                  "EquipmentId": 5013,
                  "UnitName": "LTS",
                  "VesselId": 0,
                  "MinOrderQty": 23343,
                  "CreatedDate": "0001-01-01T00:00:00",
                  "Active": false,
                  "EquipmentName": "Blue"
              },
              {
                  "RequisitionId": 0,
                  "EquipmentId": 6008,
                  "UnitName": "LTS",
                  "VesselId": 0,
                  "MinOrderQty": 20,
                  "CreatedDate": "0001-01-01T00:00:00",
                  "Active": false,
                  "EquipmentName": "Chemical"
              }
          ]
      },
      {
          "EquipmentCategoryId": 9010,
          "EquipmentCategoryName": "PPE",
          "VesselId": 0,
          "EquipmentList": [
              {
                  "RequisitionId": 0,
                  "EquipmentId": 5008,
                  "UnitName": "Units",
                  "VesselId": 0,
                  "MinOrderQty": 100,
                  "CreatedDate": "0001-01-01T00:00:00",
                  "Active": false,
                  "EquipmentName": "Face Mask"
              }
          ]
      }
  ]
}]
