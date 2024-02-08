import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { VoyageService } from './voyage.service';
import { Voyage, VoyageList } from './voyage';
import { NbDialogService } from '@nebular/theme';
import { AddVoyageComponent } from './add-voyage/add-voyage.component';
import { DynamicDialogComponent } from '@app-pages/shared/dynamic-dialog/dynamic-dialog.component';
import { Table } from 'primeng/table';
import { Vessel } from '@app-pages/settings/vessel/vessel';
import { VesselService } from '@app-pages/settings/vessel/vessel.service';
import { Cargo, CargoList, Port, PortList } from '@app-pages/settings/setting';
import { PortService } from '@app-pages/settings/port/port.service';
import { CargoService } from '@app-pages/settings/cargo/cargo.service';
import { startWith } from 'rxjs/operators';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-voyage-list',
  templateUrl: './voyage-list.component.html',
  styleUrls: ['./voyage-list.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class VoyageListComponent implements OnInit {
  @ViewChild('dt') dt: Table;
  checkListRecord: boolean = false
  voyageList1: Voyage[];
  voyageList: any[];
  // VoyageList
  activeIndex: number = 0
  selectedProducts: Voyage[];
  cols: { field: string; header: string; }[];
  exportColumns: { title: string; dataKey: string; }[];
  items: { label: string; }[];
  activeItem: { label: string; };
  emptymessage: string;
  vesselDropdown: Vessel;
  port: Port;
  cargo: Cargo;
  customErrorStateMatcher = new CustomStateError()
  selectedRows: any;
  firstCount: number = 1;
  currentPage: number;
  nextCount: number;
  totalRows: number = 0;
  totalCount: number;
  filterTableValue: any;
  vessel: Vessel[];
  status: string;
  orderBy: string;
  constructor(private router: Router, private cargoService: CargoService, private portService: PortService, private voyageService: VoyageService, private vesselService: VesselService, private messageService: MessageService, private dialogService: NbDialogService) {

  }
  ngOnInit() {
    this.selectedRows = "25"
    this.nextCount = 25;
    this.currentPage = 1;
    this.totalRows = 10;
    this.voyageService.getAllVoyageDataList().subscribe(res => {
      console.log(res, 'vessel according voyage')
    })
    this.changeVoyageList(this.currentPage, this.selectedRows, "", "Commenced")

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
      { label: 'COMMENCED' },
      { label: 'COMPLETED VOYAGES' },
    ];
    this.activeItem = this.items[0];
    this.exportColumns = this.cols.map(col => ({
      title: col.header,
      dataKey: col.field
    }));

    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
    this.getAllDropDownData(1, 100, "");

  }



  getVesselList(cPage, nRows, filter) {
    // this.vesselService.getVesselList(cPage, nRows, filter).subscribe((res: any) => {
    //   this.vesselDropdown = res.VesselData;
    // })
    this.changeVoyageList(this.currentPage, this.selectedRows, filter, "Commenced")
  }

  getPortList(cPage, nRows, filter) {
    this.portService.getPortList(cPage, nRows, filter).subscribe((res: any) => {
      this.port = res.PortData;

    })

  }
  getCargoList(cPage, nRows, filter) {
    this.cargoService.getCargoList(cPage, nRows, filter).subscribe((res: any) => {
      this.cargo = res.CargoData;

    })
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
        this.portService.getPortList(1, 100, '').subscribe((res: any) => {
          this.port = res.PortData;
        })
        break;
      case 'cargoName':
        this.cargoService.getCargoList(1, 10, "").subscribe((res: any) => {
          this.cargo = res.CargoData;
        })
        break;
    }
  }
  async getAllDropDownData(cPage, nRows, filter) {
    await this.vesselService.getVesselList(cPage, nRows, filter).subscribe((res: any) => {
      this.vesselDropdown = res.VesselData;
    })
    await this.cargoService.getCargoList(cPage, nRows, filter).subscribe((res: any) => {
      this.cargo = res.CargoData;
    })
    await this.portService.getPortList(cPage, nRows, filter).subscribe((res: any) => {
      this.port = res.PortData;
    })
  }


  // getAllVoyageData() {
  //   this.voyageService.getVoyageList().subscribe((res: VoyageList) => {
  //     this.voyageList = res.VoyageData

  //     if (res == null) {
  //       this.emptymessage = 'No Record Found'
  //     } else {
  //       setTimeout(() => { this.checkListRecord = true }, 200);
  //     }
  //     console.log(res, "voyageList")
  //   })
  // }



  async changeVoyageList(cPage, nRows, filter, value: string, columnFilter: string = '', orderBy: string = '') {
    ////debugger;
    this.checkListRecord = false
    if (value == "Completed") {
      this.status = value;
      this.activeIndex = 1
      await this.voyageService.getCompletedList(cPage, nRows, filter, columnFilter, orderBy).subscribe((res: any) => {
        debugger;

        if (this.nextCount > this.totalCount) {
          this.nextCount = this.totalCount
        }
        // else{
        //   this.nextCount= 25
        // }
        if (res.length === 0) {
          this.emptymessage = 'No Record Found'
        } else {
          setTimeout(() => { this.checkListRecord = true }, 1000);
          this.voyageList = res.VoyageData
          this.totalCount = res.Count
        }

      })
    } else {
      this.status = 'Commenced';
      this.activeIndex = 0
      await this.voyageService.getCommencedList(cPage, nRows, filter, columnFilter, orderBy).subscribe((res: any) => {

        if (this.nextCount > this.totalCount) {
          this.nextCount = this.totalCount
        }
        // if (+res.Count < 25) {
        //   this.nextCount = this.totalCount
        // }else{
        //   this.nextCount= 25
        // }

        if (res.length === 0) {
          this.emptymessage = 'No Record Found'
        } else {
          this.voyageList = res.VoyageData
          this.totalCount = res.Count
          setTimeout(() => { this.checkListRecord = true }, 1000);

        }
      })
    }
  }
  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.voyageList);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "products");
    });
  }
  exportPdf() {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default('p', 'px', 'a4');
        (doc as any).autoTable(this.exportColumns, this.voyageList);
        doc.save('products.pdf');
      });
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });

    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(data);
    anchor.download = fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION;

    // Check if the download attribute is supported
    if (typeof anchor.download !== 'undefined') {
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    } else {
      // Fallback for browsers that do not support the download attribute
      window.open(URL.createObjectURL(data));
    }
  }

  openWithoutBackdrop() {
    this.open(false, false);
  }
  protected open(closeOnBackdropClick, autoFocus) {
    this.dialogService.open(AddVoyageComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {

      if (data == "Completed") {
        console.log(data, "valiudfughg")
        this.changeVoyageList(this.currentPage, this.selectedRows, "", "Completed");
        this.showPop('success', 'Success', 'Record Saved');
      } if (data == "Commenced" || data == "Proposed") {
        this.changeVoyageList(this.currentPage, this.selectedRows, "", "Commenced");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });
  }

  editDetials(editDetails: Voyage) {
    console.log(editDetails, "editDetailslist")
    this.dialogService.open(AddVoyageComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data == "Completed") {
        console.log(data, "valiudfughg")
        this.changeVoyageList(this.currentPage, this.selectedRows, "", "Completed");
        this.showPop('success', 'Success', 'Record Saved');
      } if (data == "Commenced" || data == "Proposed") {
        this.changeVoyageList(this.currentPage, this.selectedRows, "", "Commenced");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });
    console.log(editDetails, "edits details")
  }

  deleteDetails(deleteRecord: Voyage) {
    const dialogRef = this.dialogService.open(DynamicDialogComponent, {
      context: {
        title: "Dynamic Dialog",
        message: 'Are You Sure Want To Delete',
        buttons: [
          { label: 'Cancel', value: false, status: 'basic' },
          { label: 'Delete', value: true, status: 'danger' },
        ],
      },
    });
    ////debugger;
    dialogRef.onClose.subscribe((result: any) => {
      if (result === true) {
        this.voyageService.deleteVoyage(deleteRecord).subscribe(res => {
          ////debugger;
          if (res) {
            this.changeVoyageList(this.currentPage, this.selectedRows, "", deleteRecord.StatusName);
            this.showPop('error', 'Delete', 'Record Deleted')
          }
        })
      } else if (result === false) {
      } else {
      }
    });

  }
  selectedItem !: VoyageList;
  dialogVisible: boolean = false;
  viewDetails(selectedRow: VoyageList) {
    //debugger
    this.selectedItem = selectedRow
    this.dialogVisible = true;


  }
  dateFilter(event: any) {
    this.voyageList = this.customErrorStateMatcher.filterDateRangeList(event, this.voyageList, 'VoyageCommenceDate')
  }

  clearDateRange(value) {
    debugger
    const clearDate = value.target.value
    if (clearDate.length === 1) {
      if (this.activeIndex === 1) {
        this.changeVoyageList(this.currentPage, this.selectedRows, "", "Completed")
      } else {
        this.changeVoyageList(this.currentPage, this.selectedRows, "", "Commenced")
      }
    }
  }
  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }

  close() {
    // this.dialogRef.close();
  }


  // Pagination Code here
  paginate(pagiNo) {
    console.log(pagiNo)
    this.firstCount = pagiNo.first + 1;
    this.nextCount = pagiNo.first + (+pagiNo.rows);
    this.currentPage = pagiNo.page;
    const status = this.status
    this.changeVoyageList(this.currentPage, +pagiNo.rows, "", status);

  }

  filterBy(inputVal) {
    console.log(inputVal.target.value)
    const filterValue = inputVal.target.value;
    const status = this.status

    this.changeVoyageList(this.currentPage, this.totalRows, filterValue, status);
  }

  getChangeRows(totalRows) {
    debugger;

    this.firstCount = this.firstCount
    this.nextCount = this.firstCount + (+totalRows) - 1;
    const status = this.status

    this.changeVoyageList(this.currentPage, totalRows, "", status)
  }
  viewHold(voyageId, IMONumber) {
    this.router.navigate(['/pages/report/hold-cleaning-reports'], { queryParams: { id: voyageId, IMONumber: IMONumber } });
  }



  sortOrder: number = 1; // 1 for ascending, -1 for descending
  currentSortField: string = ''; // Track the currently sorted field

  onSort(field: any) {
    debugger;
    if (this.currentSortField === field) {
      this.sortOrder = -this.sortOrder;
      this.orderBy = this.sortOrder === 1 ? 'asc' : 'desc'
      this.changeVoyageList(this.currentPage, this.selectedRows, "", this.status, field, this.orderBy)
    } else {
      this.currentSortField = field;
      this.sortOrder = 1;
      this.orderBy = this.sortOrder === 1 ? 'asc' : 'desc'
      this.changeVoyageList(this.currentPage, this.selectedRows, "", this.status, field, this.orderBy)
    }


    console.log(`Sorting by ${this.currentSortField} in ${this.sortOrder === 1 ? 'ascending' : 'descending'} order.`);
  }


}
