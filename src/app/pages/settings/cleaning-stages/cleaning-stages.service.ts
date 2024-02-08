import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { CleaningStages } from './cleaning-stages';

@Injectable({
  providedIn: 'root'
})
export class CleaningStagesService {


  stageUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addCleaningStagesDetail(stageData: CleaningStages) {
    return this.http.post(this.stageUrl + 'Insert', stageData)
  }
  addCleaningStagesDetailwithCargo(stageData: any) {
    return this.http.post(this.stageUrl + 'InsertCargoStage', stageData)
  }
  finalCleaningStagesDetail(stageData: CleaningStages[]) {
    return this.http.post(this.stageUrl + 'Submit', stageData)
  }
  updateCleaningStagesDetail(stageData: CleaningStages) {
    ////debugger;
    return this.http.put(this.stageUrl + 'Update', stageData)
  }
  deleteCleaningStages(stageData: CleaningStages) {
    ////debugger;
    return this.http.delete(this.stageUrl + 'Delete/' + stageData.CleaningStageId)
  }

  getCleaningStagesList() {
    return this.http.get(this.stageUrl + 'List')
  }
  getPreviousStagesList(cargoId: number) {
    return this.http.get(this.stageUrl + `PreviousCargoStageList?cargoId=${cargoId}`)
  }
  getMatrixStagesList(cargoPreId: number,cargoLoadId:number) {
    return this.http.get(this.stageUrl + `/FinalCargoStageList?previousCargoID=${cargoPreId}&loadtoCargoID=${cargoLoadId}`)
  }
  getNextLoadStagesList(cargoId: number) {
    return this.http.get(this.stageUrl + `LoadToCargoStageList?cargoId=${cargoId}`)
  }
  deleteCargoStage(stageId: number) {
    ////debugger;
    return this.http.delete(this.stageUrl + 'DeleteCargoStage/' + stageId)
  }
  getProductsData() {
    return [
      {
        CleaningStageId: 1,
        CleaningStageName: "Shree 1",
        ProgressWeightage: 33,
        EstimatedCleaningTime: 88,
        CreatedDate: "2023-05-29T10:19:36.283",
        UpdatedDate: "1900-01-01T00:00:00",
        DeletedDate: "1900-01-01T00:00:00",
        Active: true
      },
      {
        CleaningStageId: 2,
        CleaningStageName: "Shree 2",
        ProgressWeightage: 0,
        EstimatedCleaningTime: 88,
        CreatedDate: "2023-05-29T10:20:05.887",
        UpdatedDate: "1900-01-01T00:00:00",
        DeletedDate: "1900-01-01T00:00:00",
        Active: true
      },
      {
        CleaningStageId: 3,
        CleaningStageName: "Nitesh 1",
        ProgressWeightage: 33,
        EstimatedCleaningTime: 88,
        CreatedDate: "2023-05-29T10:21:51.857",
        UpdatedDate: "1900-01-01T00:00:00",
        DeletedDate: "1900-01-01T00:00:00",
        Active: true
      },
      {
        CleaningStageId: 4,
        CleaningStageName: "Nitesh 2",
        ProgressWeightage: 33,
        EstimatedCleaningTime: 88,
        CreatedDate: "2023-05-29T10:24:26.583",
        UpdatedDate: "1900-01-01T00:00:00",
        DeletedDate: "1900-01-01T00:00:00",
        Active: true
      },
      {
        CleaningStageId: 5,
        CleaningStageName: "Nitesh",
        ProgressWeightage: 33,
        EstimatedCleaningTime: 88,
        CreatedDate: "2023-05-29T10:34:11.77",
        UpdatedDate: "1900-01-01T00:00:00",
        DeletedDate: "1900-01-01T00:00:00",
        Active: true
      },
      {
        CleaningStageId: 6,
        CleaningStageName: "update29",
        ProgressWeightage: 29,
        EstimatedCleaningTime: 29,
        CreatedDate: "2023-05-29T10:34:23.033",
        UpdatedDate: "2023-05-29T14:41:34.773",
        DeletedDate: "1900-01-01T00:00:00",
        Active: true
      },
      {
        CleaningStageId: 7,
        CleaningStageName: "Shubham",
        ProgressWeightage: 99,
        EstimatedCleaningTime: 6,
        CreatedDate: "2023-05-29T11:11:36.257",
        UpdatedDate: "1900-01-01T00:00:00",
        DeletedDate: "1900-01-01T00:00:00",
        Active: true
      },
      {
        CleaningStageId: 8,
        CleaningStageName: "string",
        ProgressWeightage: 1,
        EstimatedCleaningTime: 1,
        CreatedDate: "2023-05-29T15:11:49.117",
        UpdatedDate: "2023-05-29T15:13:24.823",
        DeletedDate: "1900-01-01T00:00:00",
        Active: true
      },
      {
        CleaningStageId: 9,
        CleaningStageName: "string",
        ProgressWeightage: 100,
        EstimatedCleaningTime: 100,
        CreatedDate: "2023-05-31T09:31:34.937",
        UpdatedDate: "1900-01-01T00:00:00",
        DeletedDate: "1900-01-01T00:00:00",
        Active: true
      },
      {
        CleaningStageId: 10,
        CleaningStageName: "88",
        ProgressWeightage: 100,
        EstimatedCleaningTime: 100,
        CreatedDate: "2023-05-31T09:31:49.713",
        UpdatedDate: "1900-01-01T00:00:00",
        DeletedDate: "1900-01-01T00:00:00",
        Active: true
      }
    ]
  }

};

