
export interface Vessel {
        VesselId: number
        VesselName: string
        DWT_T: number
        NoOfHold: number
        FleetId: number
        FleetName: string
        FleetTypeId: number
        FleetTypeName: string
        IMONumber: number
        CreatedDate: string
        DeletedDate: string
        UpdatedDate: string
        Active: true

}
export interface License {

        LicenseId: number,
        VesselId: number,
        LicenseStartDate: Date,
        LicenseEndDate: Date,
        // LicenseAddedBy: string,
        CreatedDate: string,
        UpdatedDate: string,
        DeletedDate: string,
        Active: true

}
// export interface Fleet {

//         Active:true,
//         CreatedDate: Date,
//         DeletedDate: Date,
//         FleetId: number,
//         FleetName: string,
//         UpdatedDate: Date

// }




