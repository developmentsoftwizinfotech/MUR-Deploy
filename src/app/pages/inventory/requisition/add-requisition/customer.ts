export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Customer {
  id?: number;
  name?: number;
  country?: Country;
  company?: string;
  date?: string;
  status?: string;
  representative?: Representative;
}

export interface RequisitionFormData {
  RequisitionId: any;
  VendorId: any;
  VesselId: any;
  PortId: any;
  SupplyDate: any;
  MURFixtureNo: any;
  TypeOfSupplyId: any;
  EquipmentManagementList: any;
};
export interface VendorRequisitionFormData {
  RequisitionId: any;
  VendorId: any;
  VesselId: any;
  PortId: any;
  SupplyDate: any;
  MURFixtureNo: any;
  TypeOfSupplyId: any;
  VendorStatusId: any;
  FilePath: any;
  EquipmentManagementList: any;
};

export interface RequisitionData {
  RequisitionId: number;
  VendorId: number;
  VesselId: number;
  PortId: number;
  SupplyDate: string;
  MURFixtureNo: number;
  TypeOfSupplyId: number;
  VendorName: string;
  VesselName: string;
  PortName: string;
  SupplyTypeName: string;
  CreatedDate: string;
  UpdatedDate: string;
  DeletedDate: string;
  Active: boolean;
  Fixture: string;
  EquipmentCategoryList: [
    {
      EquipmentCategoryId: number;
      EquipmentCategoryName: string;
      EquipmentList: [
        {
          EquipmentId: number;
          MinOrderQty: number;
          EquipmentName: string;
        }
      ];

    }
  ];
}


export interface RequisitionList {
  RequisitionId: number;
  VendorId: number;
  VesselId: number;
  PortId: number;
  SupplyDate: string;
  MURFixtureNo: number;
  TypeOfSupplyId: number;
  VendorName: string;
  VesselName: string;
  PortName: string;
  SupplyTypeName: string;
  CreatedDate: string;
  UpdatedDate: string;
  DeletedDate: string;
  Active: boolean;
  Fixture: string;
  EquipmentCategoryList: EquipmentCategoryList[];
}

export interface EquipmentCategoryList {
  EquipmentCategoryId: number;
  EquipmentCategoryName: string;
  EquipmentList: EquipmentList[];
}

export interface EquipmentList {
  EquipmentId: number;
  MinOrderQty: number;
  EquipmentName: string;
}





