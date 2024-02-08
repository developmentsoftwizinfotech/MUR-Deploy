import { Component, OnInit, ViewChild } from "@angular/core";
import { ConfirmationService, LazyLoadEvent, MessageService, PrimeNGConfig, SelectItem } from "primeng/api";
import { AddPortComponent } from "@app-pages/settings/port/add-port/add-port.component";
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { NbDialogService } from "@nebular/theme";
import { PortService } from '@app-pages/settings/port/port.service';
import { Port, PortList } from '@app-pages/settings/setting';
import { Paginator } from "primeng/paginator";
@Component({
  selector: 'ngx-port-list',
  templateUrl: './port-list.component.html',
  styleUrls: ['./port-list.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class PortListComponent implements OnInit {

  port: Port[];
  checkListRecord: boolean = false;
  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
  cols: { field: string; header: string; }[];
  emptymessage: string;
  tableRows: any[]
  selectedRows: any;
  firstCount: number = 1;
  currentPage: number;
  nextCount: number;
  totalRows: number = 0;
  totalCount: number;
  filterTableValue: any;
  currentPageReportTemplate: string = '';
  countValue: number;
  loading: boolean

  // @ViewChild(Paginator) dataTable: Paginator | undefined;
  constructor(
    private portService: PortService,
    private dialogService: NbDialogService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {
 

  }
  ngOnInit() {

    this.selectedRows = "25"
    this.nextCount = 25;
    this.currentPage = 1;
    this.totalRows = 10
    this.getPortList(this.currentPage, this.selectedRows, "");
    // this.productService.getProducts().then((data) => {
    //   this.Port= data});
    this.tableRows = [{ label: 'Row 1', value: 1 },
    { label: 'Row 2', value: 2 },
    { label: 'Row 3', value: 3 },];

    this.items = [{ label: "ADD NEW CLENING STAGE" }];
    this.cols = [
      { field: "Country", header: "Country" },
      { field: "PortName", header: "Port Name" },
      { field: "PortLatitute", header: "Port Lat & Lang" },
    ];
    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);

  }


  getPortList(cPage, nRows, filter) {
    this.checkListRecord = false
    debugger
    this.portService.getPortList(cPage, nRows, filter).subscribe((res: PortList) => {
      this.port = res.PortData;
      console.log(this.port, 'pord data')
      if ( this.port.length === 0) {
        this.emptymessage = 'No Record Found'
      }
      this.totalCount = res.Count;
      this.countValue = res.Count;
      if (this.currentPageReportTemplate === "") {
        this.currentPageReportTemplate = `Showing ${(1)} to ${this.selectedRows} of ${this.totalCount} entries`;
      }
    
      setTimeout(() => { this.checkListRecord = true }, 200);
    })
  }

  openWithoutBackdrop() {
    this.open(false, false);
  }
  protected open(closeOnBackdropClick, autoFocus) {
    debugger
    this.dialogService.open(AddPortComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
      console.log(data, "value of")
      if (data !== undefined) {

        this.showPop('success', 'Success', 'Record Saved');
        this.getPortList(this.currentPage, this.selectedRows, "");
      }
    });;
  }



  editDetails(editDetails: Port) {
    debugger
    // console.log(editDetails,"editDetails")
    this.dialogService.open(AddPortComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      debugger
      if (data !== undefined) {
        debugger
        console.log(data, "data")
        this.getPortList(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;

    // this.open(false);
    // this.product = { ...product };
    // this.productDialog = true;
  }


  deleteDetails(deleteRecord: Port) {
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
        // User clicked "Yes", perform the desired action
        this.portService.deletePort(deleteRecord).subscribe(res => {
          if (res) {
            this.getPortList(this.currentPage, this.selectedRows, "");

            this.showPop('error', 'Delete', 'Record Deleted');
            //     this.showPop('success','Success','Record Saved');
            // this.showPop('error','Delete','Record Deleted');
          }
        })
      } else if (result === false) {
        // User clicked "No", perform a different action
      } else {
        // Handle other possible button values or dialog closure
      }
    });

  }
  hideRow(id) {
    console.log(id)
  }
  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }
  // private messageService:MessageService
  //     this.showPop('success','Success','Record Saved');
  // this.showPop('error','Delete','Record Deleted');
  // showPop(status:string,summary:string,detail:string){
  //   this.messageService.add({severity:status,summary:summary,detail:detail})
  // }



  // Pagination Code here


  paginate(pagiNo) {
    this.firstCount = pagiNo.first + 1;
    this.nextCount = pagiNo.first + (+pagiNo.rows);
  if(this.totalCount <= this.nextCount){
    this.nextCount = this.totalCount
  }
    this.currentPage = pagiNo.page + 1;
    this.getPortList(this.currentPage, +pagiNo.rows, "");
  }

  filterBy(inputVal) {
    console.log(inputVal.target.value)
    const filterValue = inputVal.target.value
    this.getPortList(this.currentPage, this.totalRows, filterValue);
  }

  getChangeRows(totalRows) {
    this.firstCount = 1
    this.nextCount = this.firstCount + (+totalRows) - 1
    this.getPortList(1, totalRows, "")
  }


}








