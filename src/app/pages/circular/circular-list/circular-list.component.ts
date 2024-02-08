import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { NbDialogService } from "@nebular/theme";
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { AddCircularComponent } from "@app-pages/circular/add-circular/add-circular.component";
import { Voyage } from "@app-pages/voyage/voyage-list/voyage";
import { ViewCircularComponent } from "@app-pages/circular/view-circular/view-circular.component";
import { Circular } from '@app-pages/circular/circular';
import { CircularService } from "@app-pages/circular/circular.service";
import { Vessel } from "@app-pages/settings/vessel/vessel";
import { VesselService } from "@app-pages/settings/vessel/vessel.service";
import { Applicability, ApplicabilityList } from "@app-pages/settings/setting";
import { ApplicabilityService } from "@app-pages/settings/applicability/applicability.service";
import { CustomStateError } from "@app-pages/shared/dynamic-dialog/custom-error";

@Component({
  selector: 'ngx-circular-list',
  templateUrl: './circular-list.component.html',
  styleUrls: ['./circular-list.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class CircularListComponent implements OnInit {
  tabs: any[] = [
    {
      title: 'Route tab #1',
      route: 'tab1',
    },
    {
      title: 'Route tab #2',
      route: 'tab',
    },
  ];

  circular: Circular[];
  checkListRecord: boolean = false;
  voyageList1: Voyage[];
  messageArchived: string;
  // vesselList: Circular[];
  activeIndex: number = 0
  selectedProducts: Voyage[];
  cols: { field: string; header: string; }[];
  exportColumns: { title: string; dataKey: string; }[];
  items: { label: string; }[];
  activeItem: { label: string; };
  statuses: { label: string; value: string; }[];
  emptymessage: string;
  vesselDropdown: Vessel;
  applicability: Applicability[];
  customErrorStateMatcher = new CustomStateError()


  constructor(
    private circularService: CircularService,
    private messageService: MessageService,
    private dialogService: NbDialogService,
    private vesselService: VesselService,
    private applicabilityService: ApplicabilityService
  ) { }
  ngOnInit() {
    this.getApplicabilityListRecords(1, 100, '');
    this.getVesselListRecords(1, 100, '');

    // this.getCircularListRecords();
    this.changeCircularList("Active")
    this.items = [
      { label: 'Active Circulars' },
      { label: 'Archived Circulars' },
    ];
    this.activeItem = this.items[0];
    // this.exportColumns = this.cols.map(col => ({
    //   title: col.header,
    //   dataKey: col.field
    // }));
    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  getVesselListRecords(cPage, nRows, filter){
    this.vesselService.getVesselList(cPage, nRows, filter).subscribe((res: any) => {
      this.vesselDropdown = res.VesselData
    })
  }
  getApplicabilityListRecords(cPage, nRows, filter) {
    this.applicabilityService.getApplicabilityList(cPage, nRows, filter).subscribe((res: ApplicabilityList) => {
      this.applicability = res.ApplicableData;
    })

  }


  changeCircularList(value: string) {

    debugger;

    this.circularService.getCircularList().subscribe((res: Circular[]) => {
      this.checkListRecord=false
      if (res) {
        if (value == "Archived") {
          this.activeIndex = 1
          this.circular = res.filter(isArchived => isArchived.IsArchived == true)
          console.log(this.circular, "this.circular")
          this.messageArchived = 'Move to Active'
          setTimeout(() => { this.checkListRecord = true }, 1000);
        } else {
          this.activeIndex = 0
          this.circular = res.filter(isArchived => isArchived.IsArchived == false)
          console.log(this.circular, "this.circular2")

          this.messageArchived = 'Move to Archived'
          setTimeout(() => { this.checkListRecord = true }, 1000);
        }
      }
      if (res.length == 0) {
        this.emptymessage = 'No Record Found'
      }
    })


  }
  getCircularListRecords() {
    this.checkListRecord = false
    this.circularService.getCircularList().subscribe((res: Circular[]) => {
      this.circular = res;
      if (res.length == 0) {
        this.emptymessage = 'No Record Found'
      }
      setTimeout(() => { this.checkListRecord = true }, 200);
    })
  }
  openWithoutBackdrop() {
    this.open(false, false);
  }
  protected open(closeOnBackdropClick, autoFocus) {
    this.dialogService.open(AddCircularComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.changeCircularList("Active");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
  }
  moveArchived(selected: Circular) {
    console.log(selected)
    this.circularService.getArchivedList(selected).subscribe(res => {
      if (res) {
        if (selected.IsArchived == true) {
          this.changeCircularList("Archived");
        } else {
          this.changeCircularList("Active");
        }
        // this.showPop('error', 'Delete', 'Record Deleted')
      }
    })
  }
  editDetials(editDetails: Circular) {
    this.dialogService.open(AddCircularComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        if (data.IsArchived == true) {
          this.changeCircularList("Archived");
        } else {
          this.changeCircularList("Active");
        }
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
    console.log(editDetails, "edits details")

  }

  deleteDetails(deleteRecord: Circular) {
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
        this.circularService.deleteCircular(deleteRecord).subscribe(res => {
          if (res) {
            if (deleteRecord.IsArchived == true) {
              this.changeCircularList("Archived");
            } else {
              this.changeCircularList("Active");
            }
            this.showPop('error', 'Delete', 'Record Deleted')
          }
        })
      } else if (result === false) {
      } else {
      }
    });
  }
  viewLog(selectedRow) {
    this.dialogService.open(ViewCircularComponent, { context: { selectedItem: selectedRow }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getCircularListRecords();
        this.showPop('success', 'Success', 'Record Saved');
      }
    });
  }

  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }
  selectedTab: number = 1;
  dataForTable1: any[] = [
    { column1: 'Data 1', column2: 'Data 2' },
    { column1: 'Data 3', column2: 'Data 4' },
  ];
  dataForTable2: any[] = [
    { columnA: 'Data A', columnB: 'Data B' },
    { columnA: 'Data C', columnB: 'Data D' },
  ];

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.circular);
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
  dateFilter(event: any) {
    this.circular = this.customErrorStateMatcher.filterDateRangeList(event, this.circular, 'CreatedDate')
  }

  clearDateRange(value) {
    debugger
    const clearDate = value.target.value
    if (clearDate.length === 1) {
      if (this.activeIndex === 1) {
        this.changeCircularList("Archived");
      } else {
        this.changeCircularList("Active");
      }
    }
  }


}







