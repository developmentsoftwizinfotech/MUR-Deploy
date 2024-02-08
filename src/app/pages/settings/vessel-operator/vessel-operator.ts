export interface VesselOperator   {
    VesselOperatorId: number,
    VesselOperatorName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
  }

  export interface VesselOperatorList   {
    VesselOperatorData : [{
    VesselOperatorId: number,
    VesselOperatorName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
  }
],
Count: number
  }

  