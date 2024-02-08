
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { VoyageService } from '@app-pages/voyage/voyage-list/voyage.service';
import { Voyage } from '@app-pages/voyage/voyage-list/voyage';
import { NbDialogService } from '@nebular/theme';
import { AddVoyageComponent } from '@app-pages/voyage/voyage-list/add-voyage/add-voyage.component';
import { DynamicDialogComponent } from '@app-pages/shared/dynamic-dialog/dynamic-dialog.component';
import { ViewVoyageComponent } from '@app-pages/voyage/voyage-list/view-voyage/view-voyage.component';
import { Table } from 'primeng/table';
import { NbRangepickerComponent } from '@nebular/theme';
import { CargoService } from '@app-pages/settings/cargo/cargo.service';
import { PortService } from '@app-pages/settings/port/port.service';
import { Port, Cargo, Status, CargoList, PortList } from '@app-pages/settings/setting';
import { Vessel } from '@app-pages/settings/vessel/vessel';
import { VesselService } from '@app-pages/settings/vessel/vessel.service';
import { StatusService } from '@app-pages/settings/status/status.service';
import { HoldCleaningReportService } from '@app-pages/report/hold-cleaning-reports/hold-cleaning-report.service';
import { Router } from '@angular/router';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';

@Component({
  selector: 'ngx-hold-cleaning-list',
  templateUrl: './hold-cleaning-list.component.html',
  styleUrls: ['./hold-cleaning-list.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class HoldCleaningListComponent implements OnInit {
  @ViewChild('dt') dt: Table;
  // @ViewChild('formpicker', { static: false, read: NbRangepickerComponent }) formpicker!: NbRangepickerComponent;
  checkListRecord: boolean = false
  voyageList1: Voyage[];
  holdCleaningVoyage: any[];
  activeIndex: number = 0
  selectedProducts: Voyage[];
  cols: { field: string; header: string; }[];
  exportColumns: { title: string; dataKey: string; }[];
  items: { label: string; }[];
  activeItem: { label: string; };
  emptymessage: string;
  columnCount: number[] = [1, 2, 3];
  customErrorStateMatcher = new CustomStateError();
  holdStages = [
    {
      "VesselName": "xyz",
      "VoyageCommenceDate": "03/15/2023",
      "VesselVoyageCompletingDate": "03/15/2023",
      "LoadToPortName": "DEF",
      "CargoToLoadName": "rice",
      "PreviousCargoName": "iron ore",
      "holdStages": [
        {
          "name": "Hold 1",
          "progress": "90%",
          "stages": "DEF",
          "onSchedule": 1
        },
        {
          "name": "Hold 2",
          "progress": "70%",
          "stages": "GHI",
          "onSchedule": 0
        },
        {
          "name": "Hold 3",
          "progress": "85%",
          "stages": "JKL",
          "onSchedule": 1
        }
      ]
    },

  ];
  vesselDropdown: Vessel;
  port: Port[];
  cargo: Cargo[];
  status: Status[];



  //new changes
  holdNewData = [
    {
      "id": "1000",
      "code": "f230fh0g3",
      "name": "Bamboo Watch",
      "description": "Product Description",
      "image": "bamboo-watch.jpg",
      "price": 65,
      "category": "Accessories",
      "quantity": 24,
      "inventoryStatus": "INSTOCK",
      "rating": 5,
      "orders": [
        {
          "id": "Hold 1",
          "productCode": "f230fh0g3",
          "date": "2020-09-13",
          "amount": 25,
          "quantity": 1,
          "customer": "This is Stage 1",
          "status": "PENDING"
        },
        {
          "id": "Hold 3",
          "productCode": "f230fh0g3",
          "date": "2020-09-13",
          "amount": 45,
          "quantity": 1,
          "customer": "This is Stage 2",
          "status": "PENDING"

        },
        {
          "id": "Hold 3",
          "productCode": "f230fh0g3",
          "date": "2020-09-13",
          "amount": 100,
          "quantity": 1,
          "customer": "This is Stage 3",
          "status": "Completed"
        }
      ]
    },

  ]
  constructor(private router: Router, private holdCleaningReportService: HoldCleaningReportService, private statusService: StatusService, private cargoService: CargoService, private portService: PortService, private voyageService: VoyageService, private vesselService: VesselService, private messageService: MessageService, private dialogService: NbDialogService) { }
  ngOnInit() {
    //data of hold cleaning on load
    // this.productService.getProductsWithOrdersSmall().then((data) => (this.holdNewData = data));
    this.getVoyageHoldCleaningList()
    this.checkListRecord = true
    this.changeVoyageList("ONGOING")
    this.cols = [
      { field: "VesselName", header: "VESSEL Name" },
      { field: "StatusName", header: "Status Name" },
      { field: "ecDate", header: "Expected Completed date" },
      { field: "fixture", header: "Fixture" },
      { field: "loadPort", header: "Load Port" },
      { field: "cargoToLoad", header: "Cargo to Load" },
      { field: "previousLoad", header: "Previous Cargo" },
      { field: "ITD", header: "ITD (days)" },
      { field: "ITC", header: "ITC (USD)" },
      { field: "ITB", header: "ITB (USD)" },
      { field: "SCG", header: "SCG (USD)" },
      { field: "SHA", header: "SHA (USD)" },
      { field: "HCE", header: "HCE (USD)" },
      { field: "HCC", header: "HCC (USD)" },
      { field: "HCX", header: "HCX (USD)" },
      { field: "HCB", header: "HCB (USD)" }
    ];
    this.items = [
      { label: 'ONGOING' },
      { label: 'COMPLETED VOYAGES' },
    ];
    this.activeItem = this.items[0];
    this.exportColumns = this.cols.map(col => ({
      title: col.header,
      dataKey: col.field
    }));
    this.viewData()

    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);


    this.getCargoList(1, 100, "");
    this.getVesselList(1, 100, "");
    this.getPortList(1, 100, "")
  }

  //function of new changes


  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }

  getStatusSeverity(status: string) {
    switch (status) {
      case 'PENDING':
        return 'warning';
      case 'Completed':
        return 'success';
      case 'CANCELLED':
        return 'danger'
    }
  }

  filterBy(inputVal) {
    console.log(inputVal.target.value)
    const filterValue = inputVal.target.value;
    const status = this.status

    // this.changeVoyageList(this.currentPage, this.totalRows, filterValue, status);
  }


  filterData(selectedVal) {
    switch (selectedVal) {
      case 'vesselName':
        // this.vesselService.getVesselList().subscribe((res: Vessel) => {
        //   this.vesselDropdown = res
        // })
        this.vesselService.getVesselList(1, 100, '').subscribe((res: any) => {
          debugger
          this.vesselDropdown = res.VesselData;
        })
        break;
      case 'portName':
        // this.portService.changeVoyageList(1,100,'').subscribe((res: Port[]) => {
        //   this.port = res;
        // })
        this.portService.getPortList(1, 100, '').subscribe((res: PortList) => {
          this.port = res.PortData;
        })
        break;
      case 'cargoName':
        this.cargoService.getCargoList(1, 10, "").subscribe((res: CargoList) => {
          this.cargo = res.CargoData;
        })
        break;
    }
  }



  getVesselList(cPage, nRows, filter) {
    this.vesselService.getVesselList(cPage, nRows, filter).subscribe((res: any) => {
      this.vesselDropdown = res.VesselData;
      console.log(this.vesselDropdown, " res.VesselData")
    })
  }

  getPortList(cPage, nRows, filter) {
    this.portService.getPortList(cPage, nRows, filter).subscribe((res: PortList) => {
      this.port = res.PortData;
    })
    console.log(filter.target.value, "value")
  }
  getCargoList(cPage, nRows, filter) {
    this.cargoService.getCargoList(cPage, nRows, filter).subscribe((res: CargoList) => {
      this.cargo = res.CargoData;
    })
  }


  viewData() {
    // this.voyageService.getVoyageList().subscribe((res: Voyage[]) => {
    //   this.selectedItem = res
    // })
    // this.vesselService.getVesselList().subscribe((res: Vessel) => {
    //   this.vesselDropdown = res
    // })
    // this.portService.getPortList().subscribe((res: Port[]) => {
    //   this.port = res;
    // })
    // this.cargoService.getCargoList(1,100,"").subscribe((res: Cargo[]) => {
    //   ////debugger;
    //   this.cargo = res;
    //   console.log(this.cargo, "cargo")
    // })
    this.statusService.getStatusList().subscribe((res: Status[]) => {
      ////debugger;
      this.status = res;
      console.log(this.status, "status")
    })
  }

  holdCleaningList(sara:any,data:any,data1:any){

  }

  getVoyageHoldCleaningList() {
    this.checkListRecord = false
    this.holdCleaningReportService.getVoyageHoldCleaningList().subscribe((res: Voyage[]) => {
      this.holdCleaningVoyage = res
      if (res == null) {
        this.emptymessage = 'No Record Found'
      } else {
        setTimeout(() => { this.checkListRecord = true }, 200);
      }
      console.log(res, "voyageList")
    })
  }

  viewLog(voyageId) {
    console.log(voyageId, 'edit view')
    this.router.navigate(['/pages/report/hold-cleaning-reports', voyageId]);
  }
  filterGlobal(data) {
    //debugger
    console.log(data)
  }
  changeVoyageList(value: string) {
    ////debugger;
    // if (value == "Completed") {
    //   this.activeIndex = 1
    //   this.voyageService.getCompletedList().subscribe((res: Voyage[]) => {
    //     this.voyageList = res
    //     console.log(res, "voyageList")
    //     if (res == null) {
    //       this.emptymessage = 'No Record Found'
    //     } else {
    //       setTimeout(() => { this.checkListRecord = true }, 200);
    //     }

    //   })
    // } else {
    //   this.activeIndex = 0
    //   this.voyageService.getCommencedList().subscribe((res: Voyage[]) => {
    //     this.voyageList = res
    //     console.log(res, "voyageList1")

    //     if (res == null) {
    //       this.emptymessage = 'No Record Found'
    //     } else {
    //       setTimeout(() => { this.checkListRecord = true }, 200);
    //     }
    //   })
    // }
  }
  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.holdCleaningVoyage);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "products");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }

  openWithoutBackdrop() {
    this.open(false, false);
  }
  protected open(closeOnBackdropClick, autoFocus) {
    this.dialogService.open(AddVoyageComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.changeVoyageList("ONGOING");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
  }

  // editDetials(editDetails: Voyage) {
  //   console.log(editDetails, "editDetailslist")
  //   this.dialogService.open(AddVoyageComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
  //     if (data == "Completed") {
  //       console.log(data, "valiudfughg")
  //       this.changeVoyageList("Completed");
  //       this.showPop('success', 'Success', 'Record Saved');
  //     } if (data == "ONGOING" || data == "Proposed") {
  //       this.changeVoyageList("ONGOING");
  //       this.showPop('success', 'Success', 'Record Saved');
  //     }
  //   });;
  //   console.log(editDetails, "edits details")
  // }

  // deleteDetails(deleteRecord: Voyage) {
  //   const dialogRef = this.dialogService.open(DynamicDialogComponent, {
  //     context: {
  //       title: "Dynamic Dialog",
  //       message: 'Are You Sure Want To Delete',
  //       buttons: [
  //         { label: 'Cancel', value: false, status: 'basic' },
  //         { label: 'Delete', value: true, status: 'danger' },
  //       ],
  //     },
  //   });
  //   ////debugger;
  //   dialogRef.onClose.subscribe((result: any) => {
  //     if (result === true) {
  //       this.voyageService.deleteVoyage(deleteRecord).subscribe(res => {
  //         ////debugger;
  //         if (res) {
  //           this.changeVoyageList(deleteRecord.StatusName);
  //           this.showPop('error', 'Delete', 'Record Deleted')
  //         }
  //       })
  //     } else if (result === false) {
  //     } else {
  //     }
  //   });

  // }
  selectedItem !: Voyage[];
  dialogVisible: boolean = false;
  viewDetails(selectedRow: Voyage[]) {
    //debugger
    this.selectedItem = selectedRow
    this.dialogVisible = true;
    // this.dialogService.open(ViewVoyageComponent, { context: { selectedItem: selectedRow }, closeOnBackdropClick: false, autoFocus: false });
  }
  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }


  dateFilter(event: any) {
    this.holdCleaningVoyage = this.customErrorStateMatcher.filterDateRangeList(event, this.holdCleaningVoyage, 'VoyageCommenceDate')
  }

  clearDateRange(value) {
    debugger
    const clearDate = value.target.value
    if (clearDate.length === 1) {

      this.getVoyageHoldCleaningList();

      // if (this.activeIndex === 1) {
      //   this.changeVoyageList(this.currentPage, this.selectedRows, "", "Completed")
      // } else {
      //   this.changeVoyageList(this.currentPage, this.selectedRows, "", "Commenced")
      // }
    }
  }

  close() {
    // this.dialogRef.close();
  }
  tableData = [
    { stage: 'Stage 1', progress: '80%', onSchedule: 'Yes' },
    { stage: 'Stage 2', progress: '65%', onSchedule: 'No' },
  ];
  dynamicHeaders: string[] = ['Current Stage', 'Progress %', 'On Schedule'];
  dynamicField: string = 'ITDActual';
  dynamicHeaderText: string = 'Hold 1';
  head = [
    { name: 1 },
    { name: 2 },
  ]
  get headerColspan() {
    return this.dynamicHeaders.length;
  }
}
interface TableData {
  headers: string[];
  rows: any[];
  dynamicHeaderText?: string[];
}
