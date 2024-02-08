
export interface Port {
    PortId: number,
    CountryId: number,
    CountryName: string,
    PortName: string,
    PortLatitute: string,
    PortLongitude: string,
    CreatedDate: string,
    UpdatedDate: string,
    DeletedDate: string,
    Active: Boolean,
}


export interface PortList {
    PortData: [{
        PortId: number,
        CountryId: number,
        CountryName: string,
        PortName: string,
        PortLatitute: string,
        PortLongitude: string,
        CreatedDate: string,
        UpdatedDate: string,
        DeletedDate: string,
        Active: Boolean,
    }
    ],
    Count: number;
}

export interface Cargo {
    CargoId: number,
    CargoName: string,
    CreatedDate: string,
    UpdatedDate: string,
    DeletedDate: string,
    Active: boolean
}

export interface CargoList {
    CargoData: [{
        CargoId: number,
        CargoName: string,
        CreatedDate: string,
        UpdatedDate: string,
        DeletedDate: string,
        Active: boolean
    }
    ],
    Count: number;
}
export interface Applicability {
    ApplicableId: number,
    ChartererId: number,
    ChartererName: string,
    ApplicableName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
export interface ApplicabilityList {
    ApplicableData: [{
        ApplicableId: number,
        ChartererId: number,
        ChartererName: string,
        ApplicableName: string,
        CreatedDate: Date,
        UpdatedDate: Date,
        DeletedDate: Date,
        Active: boolean
    }
    ],
    Count: number;
}
export interface Charterer {
    ChartererId: number,
    ChartererName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
export interface ChartererList {
    ChartererData: [{
        ChartererId: number,
        ChartererName: string,
        CreatedDate: Date,
        UpdatedDate: Date,
        DeletedDate: Date,
        Active: boolean
    }
    ],
    Count: number;
}
export interface SHA {
    SHAId: number,
    SHAName: string,
    CountryId: number,
    CountriesCovered: string,
    CreatedDate: string,
    UpdatedDate: string,
    DeletedDate: string,
    Active: boolean
}

export interface SHAList {
    SHAData: [{
        SHAId: number,
    SHAName: string,
    CountryId: number,
    CountriesCovered: string,
    CreatedDate: string,
    UpdatedDate: string,
    DeletedDate: string,
    Active: boolean
    }
    ],
    Count: number;
}
export interface CircularCategory {
    CircularCategoryId: number,
    CircularCategoryName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}

export interface CircularCategoryList {
    CircularCategoryData: [{
    CircularCategoryId: number,
    CircularCategoryName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
],
Count: number;
}
// PortData: [{
//  }
// ],
// Count: number;

export interface FleetType {
    FleetTypeId: number,
    FleetTypeName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean

}

export interface FleetTypeList {
    FleetTypeData: [{
    FleetTypeId: number,
    FleetTypeName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
],
Count: number;
}

export interface Fleet {
    FleetId: number,
    FleetName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
export interface FleetList {
    FleetData: [{
    FleetId: number,
    FleetName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
],
Count: number;
}


export interface Country {
    CountryId: number,
    CountryName: string,
    CountryCode: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
export interface CountryList {
    CountryData: [{
    CountryId: number,
    CountryName: string,
    CountryCode: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
],
Count: number;
}
export interface Role {
    RoleId: number,
    RoleName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
export interface RoleList {
    RoleData: [{
    RoleId: number,
    RoleName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
],
Count: number;
}
export interface OprType {
    OprTypeId: number,
    OprTypeName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
export interface OprTypeList {
    OprTypeData: [{
    OprTypeId: number,
    OprTypeName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
],
Count: number;
}
export interface Supply {
    SupplyTypeId: number,
    SupplyTypeName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
export interface SupplyList {
    SupplyTypeData: [{
    SupplyTypeId: number,
    SupplyTypeName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
],
Count: number;
}
export interface Unit {
    UnitId: number,
    UnitName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
export interface UnitList {
    UnitData: [{
    UnitId: number,
    UnitName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
],
Count: number;
}

export interface EquipmentCategory {
    EquipmentCategoryId: number,
    EquipmentCategoryName: string,
    UnitId: number,
    UnitName: string,
    ConsumptionType: string,
    Maker: boolean,
    DateSupplied: boolean,
    PortSupplied: boolean,
    Condition: boolean,
    DateofExpiry: boolean,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
export interface EquipmentCategoryList {
    EquipmentCategoryData: [{
    EquipmentCategoryId: number,
    EquipmentCategoryName: string,
    UnitId: number,
    UnitName: string,
    ConsumptionType: string,
    Maker: boolean,
    DateSupplied: boolean,
    PortSupplied: boolean,
    Condition: boolean,
    DateofExpiry: boolean,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
],
Count: number;
}

export interface ShoreCleaning {
    ShoreCleaningGangId: number,
    ShoreCleaningGangCompanyName: string,
    CountryId: number,
    CountryName: string,
    CountriesCovered: string,
    PICName: string,
    PICPrimaryEmail: string,
    PICSecondaryEmail: string,
    PICPrimaryPhone: string,
    PICSecondaryPhone: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
export interface ShoreCleaningList {

    ShoreCleaningGangData: [{
    ShoreCleaningGangId: number,
    ShoreCleaningGangCompanyName: string,
    CountryId: number,
    CountryName: string,
    CountriesCovered: string,
    PICName: string,
    PICPrimaryEmail: string,
    PICSecondaryEmail: string,
    PICPrimaryPhone: string,
    PICSecondaryPhone: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
],
Count: number;
}
export interface Status {
    StatusId: number,
    StatusName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    DeletedDate: Date,
    Active: boolean
}
export interface Maker {

    MakerId: number,
    MakerName: string,
    CreatedDate: Date,
    UpdatedDate: Date,
    Active: boolean
    EquipmentId:number,
    EquipmentCategoryId:number
}
