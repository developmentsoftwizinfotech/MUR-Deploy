export interface Vendor {

    VendorId: number,
    VendorName: string,
    VendorAddress: string,
    CountryId: number,
    VendorSecondaryEmail: string,
    VendorPrimaryEmail: string,
    VendorPhonelines: string,
    VendorPIC: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean,
    CountryName:string
}

export interface VendorList {
    VendorData: [{
    VendorId: number,
    VendorName: string,
    VendorAddress: string,
    CountryId: number,
    VendorSecondaryEmail: string,
    VendorPrimaryEmail: string,
    VendorPhonelines: string,
    VendorPIC: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean,
    CountryName:string
}
],
Count: number
}

export interface Requisition {

    RequisitionId: number,
    VendorId: number,
    VesselId: number,
    PortId: number,
    SupplyDate: string,
    MURFixtureNo: number,
    TypeOfSupplyId: number,
    VendorName: string,
    VesselName: string,
    PortName: string,
    SupplyTypeName: string
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean,
    Fixture: string
}
export interface Equipment  {
    EquipmentId: number,
    EquipmentName: string,
    MinOrderQty: number,
    CreatedDate:Date,
    UpdatedDate:Date,
    DeletedDate:Date,
    Active: boolean,
    EquipmentCategoryId: number,
    EquipmentCategoryName: string,
    UnitName:string,
    Maker: string,
    DateSupplied: string,
    PortId: number,
    Condition: string,
    DateOfExpiry: string,
  }

  export interface ReqEquipmentList  {
    EquipmentId: number,
    EquipmentName: string,
    MinOrderQty: number,
     Active: boolean,
     UnitId: number,
     UnitName: string,
     EquipmentCategoryId: number,
     EquipmentCategoryName: string,
     ReqEquipmentList: null
  }


export interface Fixture {

    VesselId: number,
    Fixture: string,
    VoyageId: number,
    Active: boolean
}
export interface Maker {
  MakerId: number,
  MakerName: string
}
export interface Condition {
  ConditionId: number,
  ConditionName: string
}
export interface EquipmentFieldList {
  Active: true,
  Condition: true,
  ConditionId: number,
  ConditionName: string,
  DateSupplied: true,
  DateofExpiry: true,
  EquipmentCategoryId: number,
  EquipmentCategoryName: string,
  InventoryDateSupplied: Date,
  InventoryDateofExpiry: Date,
  Maker: true,
  MakerId: number | null,
  MakerName: null,
  PortSupplied: true,
  PortSuppliedId: number,
  PortSuppliedName: number,
  VesselId:number,
  VesselInventoryManagementId: number
}

export interface InventoryVessel {
  VesselInventoryId: number
  VesselId: number
  VesselName: string
  MinimumLevelsMaintained: string
  LastSupplyDate: string
  ActiveInventoryCost: number
  CreatedDate: string
  UpdatedDate: string
  DeletedDate: string
  Active: true
  IsArchived: true
  VesselInventoryManagementId: number
  EquipmentCategoryId: number
  EquipmentCategoryName: string
  Maker: true
  PortSupplied: true
  DateSupplied: true
  Condition: true
  DateofExpiry: true
  MakerId: number
  MakerName: string
  PortSuppliedId: number
  PortSuppliedName: number
  InventoryDateSupplied: string
  ConditionId: number
  ConditionName: string
  InventoryDateofExpiry: string
  VesselInventoryManagementList: EquipmentFieldList[]
}
