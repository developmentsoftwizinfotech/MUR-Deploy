import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CleaningStagesService } from '@app-pages/settings/cleaning-stages/cleaning-stages.service';
import { CargoService } from '@app-pages/settings/cargo/cargo.service';
import { Cargo, CargoList } from '@app-pages/settings/setting';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CargoListMatrix, CleaningMatrix, MatrixDetailsList } from './cleaning-matrix';

@Component({
    selector: 'ngx-cleaning-matrix',
    templateUrl: './cleaning-matrix.component.html',
    styleUrls: ['./cleaning-matrix.component.scss'],
    providers: [MessageService]
})
export class CleaningMatrixComponent implements OnInit {
    dropDownCargo: Cargo[];
    emptymessage: string = 'Select First';
    cleckDropdown: boolean = false
    emptymessage1: string = 'Select First';
    changeVal: number;
    constructor(private formBuilder: FormBuilder, private msg: MessageService, private cleaningService: CleaningStagesService, private cargoService: CargoService) {
        this.nbForm = this.formBuilder.group({
            PreviousCargo: [null, [Validators.required]],
            CargoToLoad: [null, [Validators.required]],
        });
    }
    finalPrevious: CleaningMatrix[] = []
    availableList: CargoListMatrix[] = [];
    previousArr: CargoListMatrix[] = [];
    loadToNext: CargoListMatrix[] = [];
    nbForm: FormGroup;
    currentlyDragging: CargoListMatrix | null = null;

    ngOnInit() {
        this.getcleaninglist();
        this.getCargoListRecord(1, 100, '')
    }
    selectCargo(selectedVal: string) {
        ////debugger;
        this.changeVal = this.nbForm.value[selectedVal]
        if (selectedVal === 'PreviousCargo') {
            this.cleaningService.getPreviousStagesList(this.changeVal).subscribe((res: CargoListMatrix[]) => {
                this.previousArr = res
                if (res.length == 0) {
                    this.emptymessage = 'No Record Found'
                }
            })
        } else {
            //debugger
            this.cleaningService.getNextLoadStagesList(this.changeVal).subscribe((res: CargoListMatrix[]) => {
                ////debugger;
                this.loadToNext = res
                if (res.length == 0) {
                    this.emptymessage1 = 'No Record Found'
                }
            })
        }
    }

    getMatrixList() {
        const formIds = this.nbForm.value;
        const previousId = formIds.PreviousCargo;
        const loadToCargoId = formIds.CargoToLoad;
        if (this.nbForm.valid) {

            this.cleaningService.getMatrixStagesList(previousId, loadToCargoId).subscribe((res: MatrixDetailsList) => {
                this.previousArr = res.PerviousCargoDetails
                this.loadToNext = res.CargoToLoad
                if (res.PerviousCargoDetails.length == 0 || res.CargoToLoad.length == 0) {
                    this.emptymessage = 'No Record Found'
                }
            })
        }


    }

    getCargoListRecord(cPage, nRows, filter) {
        this.cargoService.getCargoList(cPage, nRows, filter).subscribe((res: CargoList) => {
            this.dropDownCargo = res.CargoData
        })
    }


    getcleaninglist() {

        this.cleaningService.getCleaningStagesList().subscribe((res: any) => {
            this.availableList = res
        });
    }
    // On Drag Start
    dragStart(person: CargoListMatrix) {
        this.currentlyDragging = person;
    }

    dragEnter() {
        // Show the toast message on the frontend
        // this.msg.add({
        //     severity: "info",
        //     summary: "Drag Enter",
        //     detail: "onDragEnter Event"
        // })
    }

    dragLeave() {
        // Show the toast message on the frontend
        // this.msg.add({
        //     severity: "error",
        //     summary: "Drag Leave",
        //     detail: "onDragLeave Event"
        // })
    }

    // On Drag End
    dragEnd() {
        this.currentlyDragging = null;
    }

    // On Drop of Item to droppable area
    drop(selectArr) {
        ////debugger;

        if (selectArr === "previousArr") {
            if (this.nbForm.value.PreviousCargo === null) {
                this.msg.add({ severity: "info", summary: "Alert!", detail: "Select Previous Cargo" })
            } else {
                if (this.currentlyDragging) {
                    let currentlyDraggingIndex = this.findIndex(this.currentlyDragging, this.availableList);
                    const checkDuplicate = this.previousArr.some(x => x.CleaningStageId === this.currentlyDragging.CleaningStageId);
                    if (checkDuplicate) {
                        this.msg.add({ severity: "error", summary: "Dropped", detail: "Duplicate Record" })
                    } else {

                        this.previousArr = [...this.previousArr, this.currentlyDragging];
                        //   this.available =
                        //       this.available.filter((val, i) => i !=
                        //           currentlyDraggingIndex);
                        this.currentlyDragging = null;
                        this.msg.add({ severity: "success", summary: "Dropped", detail: "onDrop Event" })

                    }

                }
            }
        } else {
            if (this.nbForm.value.CargoToLoad === null) {
                this.msg.add({ severity: "info", summary: "Alert!", detail: "Select Cargo To Load" })
            } else {
                const checkDuplicate = this.loadToNext.some(x => x.CleaningStageId === this.currentlyDragging.CleaningStageId);
                if (checkDuplicate) {
                    this.msg.add({ severity: "error", summary: "Dropped", detail: "Duplicate Record" })
                } else {
                    if (this.currentlyDragging) {
                        let currentlyDraggingIndex = this.findIndex(this.currentlyDragging, this.availableList);
                        this.loadToNext = [...this.loadToNext, this.currentlyDragging];
                        //   this.available =
                        //       this.available.filter((val, i) => i !=
                        //           currentlyDraggingIndex);
                        this.currentlyDragging = null;
                        // Show the toast message on the frontend
                        this.msg.add({ severity: "success", summary: "Dropped", detail: "onDrop Event" })

                    }
                }
            }
        }

    }
    // drop1() {
    //     ////debugger;
    //     if (this.currentlyDragging) {
    //         let currentlyDraggingIndex = this.findIndex(this.currentlyDragging, this.availableList);
    //         this.loadToNext = [...this.loadToNext, this.currentlyDragging];
    //         //   this.available =
    //         //       this.available.filter((val, i) => i !=
    //         //           currentlyDraggingIndex);
    //         this.currentlyDragging = null;
    //     }


    //     // Show the toast message on the frontend
    //     this.msg.add({
    //         severity: "success",
    //         summary: "Dropped",
    //         detail: "onDrop Event"
    //     })
    // }

    // Find the Index of a Person
    findIndex(person: CargoListMatrix, availableList) {
        ////debugger;
        let index = -1;
        for (let i = 0; i < availableList.length; i++) {
            if (person.CleaningStageId === availableList[i].CleaningStageId) {
                index = i;
                break;
            }
        }
        return index;
    }
    deleteDetails(previousArrVal: CargoListMatrix, selectArr) {
        ////debugger;
        const selectedId = previousArrVal.CargoStageDetailId
        if (selectArr === 'loadToNext') {
            this.cleaningService.deleteCargoStage(selectedId).subscribe(res => {
                if (res) {
                    // const newArr = this.loadToNext.splice(this.findIndex(previousArrVal, this.loadToNext), 1);
                    // this.selectCargo(selectArr);
                }
            })
            const newArr = this.loadToNext.splice(this.findIndex(previousArrVal, this.loadToNext), 1);
            this.msg.add({ severity: "error", summary: "Deleted", detail: "Deleted Record" })
            console.log(this.loadToNext)
            // this.loadToNext = this.loadToNext
        } else {
            this.cleaningService.deleteCargoStage(selectedId).subscribe(res => {
                if (res) {
                    // const newArr = this.previousArr.splice(this.findIndex(previousArrVal, this.previousArr), 1);
                    // this.selectCargo(selectArr);
                }
            })
            console.log(this.loadToNext)
            const newArr = this.previousArr.splice(this.findIndex(previousArrVal, this.previousArr), 1);
            this.msg.add({ severity: "error", summary: "Deleted", detail: "Deleted Record" })
            // this.previousArr = this.previousArr
        }
    }
    submitRecords() {
        debugger;
        const perivousCargo: any = { 'PreviousCargoId': this.nbForm.value.PreviousCargo }
        const loadCargo: any = { 'CargoToLoadId': this.nbForm.value.CargoToLoad }
        const perivousCargoList: any = { 'ListPreviousCargo': this.previousArr }
        const loadCargoList: any = { 'ListLoadCargo': this.loadToNext }
        // this.previousArr.push(perivousCargo);

        if (perivousCargo !== null && loadCargo !== null && perivousCargoList.ListPreviousCargo.length > 0 && loadCargoList.ListLoadCargo.length > 0) {
            this.finalPrevious.push(perivousCargo, perivousCargoList, loadCargo, loadCargoList)
            this.cleaningService.addCleaningStagesDetailwithCargo(this.finalPrevious).subscribe(res => {
                if (res) {
                    this.finalPrevious = []
                    this.msg.add({ severity: "success", summary: "Dropped", detail: "Saved All Stages Records" })
                }
            })
            console.log(this.previousArr, "perivious")
            console.log(this.finalPrevious, "this.finalPrevious")
        } else {
            this.msg.add({ severity: "error", summary: "Error!", detail: "Something wents wrong" })
        }


    }

}
