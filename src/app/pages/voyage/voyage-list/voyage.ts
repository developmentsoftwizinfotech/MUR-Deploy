export interface Voyage   {
  VoyageId: number,
  VesselId: number,
  VoyageCommenceDate: Date,
  VesselVoyageCompletedDate: Date,
  VesselVoyageCompletingDate: Date,
  StatusId: number,
  Fixture: string,
  OprTypeId: number,
  LoadToPort: any,
  DischargePort: any,
  CargotoLoad: any,
  PreviousCargo: any,
  TCCBudgetUSD: number,
  TCCActual: number,
  TCCProvisions: number,
  ITDBudget: number,
  ITDActual: number,
  ITDProvisions: number,
  ITCBudget: number,
  ITCActual: number,
  ITCProvisions: number,
  ITBBudget: number,
  ITBActual: number,
  ITBProvisions: number,
  SCGBudget: number,
  SCGActual: number,
  SCGProvisions: number,
  SHABudget: number,
  SHAActual: number,
  SHAProvisions: number,
  HCEBudget: number,
  HCEActual: number,
  HCEProvisions: number,
  HCCBudget: number,
  HCCActual: number,
  HCCProvisions: number,
  HCXBudget: number,
  HCXActual: number,
  HCXProvisions: number,
  HCBBudget: number,
  HCBActual: number,
  HCBProvisions: number,
  VesselName: string,
  StatusName: string,
  VesselOperatorName: string,
  ChartererName: string,
  OprTypeName: string,
  LoadToPortName: string,
  CargoToLoadName: string,
  DischargePortName: string,
  PreviousCargoName: string,
  SHAName: string,
  CreatedDate: Date,
  Active: true,
  UpdatedDate: Date,
  LTCMURId: number,
  OwnerId: number,
  TradeAreaId: number,
  VayageNo: string,
  ITDStatusId: number,
  SCGStatusId: number,
  Remark: string,
  BudgetedDetailsDate: Date,
  FinalRemarks: string,
  HoldPassId: number,
  LTCMURName: string,
  OwnerName: string,
  TradeAreaName: string,
  HoldPassName: string,
  PlanStatusName: string,
  SCGStatus: string
}


export interface VoyageList  {
  VoyageData: [{
  VoyageId: number,
  VesselId: number,
  VoyageCommenceDate: Date,
  VesselVoyageCompletedDate: Date,
  VesselVoyageCompletingDate: Date,
  StatusId: number,
  Fixture: string,
  OprTypeId: number,
  LoadToPortId: number,
  DischargePortId: number,
  CargotoLoadId: number,
  PreviousCargoId: number,
  TCCBudgetUSD: number,
  TCCActual: number,
  TCCProvisions: number,
  ITDBudget: number,
  ITDActual: number,
  ITDProvisions: number,
  ITCBudget: number,
  ITCActual: number,
  ITCProvisions: number,
  ITBBudget: number,
  ITBActual: number,
  ITBProvisions: number,
  SCGBudget: number,
  SCGActual: number,
  SCGProvisions: number,
  SHABudget: number,
  SHAActual: number,
  SHAProvisions: number,
  HCEBudget: number,
  HCEActual: number,
  HCEProvisions: number,
  HCCBudget: number,
  HCCActual: number,
  HCCProvisions: number,
  HCXBudget: number,
  HCXActual: number,
  HCXProvisions: number,
  HCBBudget: number,
  HCBActual: number,
  HCBProvisions: number,
  VesselName: string,
  StatusName: string,
  VesselOperatorName: string,
  ChartererName: string,
  OprTypeName: string,
  LoadToPortName: string,
  CargoToLoadName: string,
  DischargePortName: string,
  PreviousCargoName: string,
  SHAName: string,
  CreatedDate: Date,
  Active: true,
  UpdatedDate: Date,
  LTCMURId: number,
  OwnerId: number,
  TradeAreaId: number,
  VayageNo: string,
  ITDStatusId: number,
  SCGStatusId: number,
  Remark: string,
  BudgetedDetailsDate: Date,
  FinalRemarks: string,
  HoldPassId: number,
  LTCMURName: string,
  OwnerName: string,
  TradeAreaName: string,
  HoldPassName: string,
  PlanStatusName: string,
  SCGStatus: string
}
],
Count: number;
}








export interface LTC {
  LTCMURId:    number;
  LTCMURName:  string;
  CreatedDate: Date;
  UpdatedDate: Date;
  DeletedDate: Date;
  Active:      boolean;
}


export interface PlanStatus {
  PlanStatusId:   number;
  PlanStatusName: string;
  CreatedDate:    Date;
  UpdatedDate:    Date;
  DeletedDate:    Date;
  Active:         boolean;
}


export interface HoldPass {
  HoldPassId:   number;
  HoldPassName: string;
  CreatedDate:  Date;
  UpdatedDate:  Date;
  DeletedDate:  Date;
  Active:       boolean;
}


export interface Owner {
  OwnerId:     number;
  OwnerName:   string;
  CreatedDate: Date;
  UpdatedDate: Date;
  DeletedDate: Date;
  Active:      boolean;
}

export interface TradeArea {
  TradeAreaId:   number;
  TradeAreaName: string;
  CreatedDate:   Date;
  UpdatedDate:   Date;
  DeletedDate:   Date;
  Active:        boolean;
}

export interface VoyageBudget {
    AnualBudgetId: number;
    CostHeadId: number;
    BudgetYear: string;
    CreatedDate: string;
    UpdatedDate: string;
    Active: boolean;
    TotalBudgetCost: number;
}

export interface CostHeads {
  CostHeadId: string;
  CostHeadName: string;
}
