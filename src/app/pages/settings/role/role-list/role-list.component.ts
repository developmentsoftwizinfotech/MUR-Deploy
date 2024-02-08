
import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { NbDialogService } from "@nebular/theme";
import { Role, RoleList } from '@app-pages/settings/setting';
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { AddRoleComponent } from "@app-pages/settings/role/add-role/add-role.component";
import { RoleService } from '@app-pages/settings/role/role.service';

@Component({
  selector: 'ngx-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class RoleListComponent implements OnInit {

  role: Role[];
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

  constructor(
    private roleService: RoleService,
    private dialogService: NbDialogService, private messageService: MessageService
  ) {

  }
  ngOnInit() {

    this.selectedRows = "25"
    this.nextCount = 25;
    this.currentPage = 1;
    this.totalRows = 10
    this.getRoleListRecords(this.currentPage, this.selectedRows, "");
    this.items = [{ label: "ADD NEW CLENING STAGE" }];
    this.cols = [
      { field: "Role Name", header: "Role Name" },
    ];

    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  getRoleListRecords(cPage, nRows, filter) {
    this.checkListRecord = false
    this.roleService.getRoleList(cPage, nRows, filter).subscribe((res: RoleList) => {
      this.role = res.RoleData;
      console.log(res, "res")
      console.log(res.Count, "resCount")
      this.countValue = res.Count
      this.totalCount = res.Count
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
    this.dialogService.open(AddRoleComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {

      if (data !== undefined) {
        this.showPop('success', 'Success', 'Record Saved');
        this.getRoleListRecords(this.currentPage, this.selectedRows, "");
      }
    });;
  }

  editDetails(editDetails: Role) {
    this.dialogService.open(AddRoleComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getRoleListRecords(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
    console.log(editDetails, "edits details")
  }


  deleteDetails(deleteRecord: Role) {
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
    dialogRef.onClose.subscribe((result: any) => {
      if (result === true) {
        this.roleService.deleteRole(deleteRecord).subscribe(res => {
          if (res == true) {
            this.getRoleListRecords(this.currentPage, this.selectedRows, "");
            this.showPop('error', 'Delete', 'Record Deleted');
          }
        })
      } else if (result === false) {
      } else {
      }
    });

  }
  hideRow(id) {
    console.log(id)
  }
  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }
  paginate(pagiNo) {
    this.firstCount = pagiNo.first + 1;
    this.nextCount = pagiNo.first + (+pagiNo.rows);
    this.currentPage = pagiNo.page;
    this.getRoleListRecords(this.currentPage, +pagiNo.rows, "");
  }

  filterBy(inputVal) {
    console.log(inputVal.target.value)
    const filterValue = inputVal.target.value
    this.getRoleListRecords(this.currentPage, this.totalRows, filterValue);
  }

  getChangeRows(totalRows) {
    this.firstCount = this.firstCount
    this.nextCount = this.firstCount + (+totalRows) - 1
    this.getRoleListRecords(this.currentPage, totalRows, "")
  }
}









