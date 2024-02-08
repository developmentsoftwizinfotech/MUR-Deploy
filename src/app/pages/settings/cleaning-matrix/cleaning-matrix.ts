import { CleaningStages } from "@app-pages/settings/cleaning-stages/cleaning-stages"

export interface CleaningMatrix {
    PreviousCargoId: number
    CargoToLoadId: number
    ListPreviousCargo: CleaningStages[]
    ListLoadCargo: CleaningStages[]
}

export interface CargoListMatrix {
    CargoStageDetailId: number,
    CleaningStageId: number,
    CleaningStageName: string,
    Active: true
}

export interface MatrixDetailsList {
    PerviousCargoDetails: CargoListMatrix[],
    CargoToLoad: CargoListMatrix[]
}