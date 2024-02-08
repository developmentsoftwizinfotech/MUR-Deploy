import { Component, OnInit, ViewChild } from '@angular/core';

import { ReportsService } from '../reports.service';
import { OtherDropdownList, VesselDropList } from '../report';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NbRangepickerComponent } from '@nebular/theme';

@Component({
  selector: 'ngx-hcc-budget-summary',
  templateUrl: './hcc-budget-summary.component.html',
  styleUrls: ['./hcc-budget-summary.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class HccBudgetSummaryComponent implements OnInit {
  vesselListDropDown: VesselDropList[] = [];
  otherListDropDown: OtherDropdownList;
  nbForm: FormGroup;
  summaryList: any;
  checkListRecord = true;
  startView: 'month' | 'year' = 'year';
  budgetSummary: any
  dateCommence: any;
  selectedCommenceDateRange: Date[]
  date: any;
  preloading: boolean = true;
  filterFn: any;
  cols: { field: string; header: string; }[];
  colHCC: { field: string; header: string; }[];
  HCCBudgetList: any;
  colStatus: { field: string; header: string; }[];
  disableCommenceDatePicker: boolean = false;
  disableCompletedDatePicker: boolean = false;;
  HCCBudgetDetails: any;
  cleaningTypes: { type: string, label: string }[]
  customDatePicker = new CustomStateError();
  constructor(private formBuilder: FormBuilder, private reportService: ReportsService, private messageService: MessageService) {

    this.nbForm = this.formBuilder.group({
      VoyageCommenceRangeStart: [null],
      VoyageCommenceRangeEnd: [null],
      VoyageCompletedRangeStart: [null],
      VoyageCompletedRangeEnd: [null],
      DateCommenceRangeControl: [null],
      DateCompletedRangeControl: [null],
      VesselListIds: [null],
      StatusListIds: [null],
      OwnerListIds: [null],
      VesselIds: [null],
      StatusIds: [null],
      Quarter: [null],
      VoyageCompletingMonth: [''],
      OwnerIds: [null]
    });
    this.initialStageTable();
  }

  ngOnInit(): void {
    this.getReportVessel();
    this.getAllDropdown()
    this.getFormValue();
  }

  initialStageTable() {
    // this.cleaningTypes = [
    //   { type: 'TCC', label: 'Total Cleaning Costs' },
    //   { type: 'TCC', label: 'Additional Crew Bonus' },
    //   { type: 'ITD', label: 'Idle Time Days For Cleaning' },
    //   { type: 'SHA', label: 'Hold Advisory by Shore & Roving Supdt Cost' },
    //   { type: 'ITC', label: 'Idle Time Cost (Fixture Costs)' },
    //   { type: 'HCE', label: 'Hold Cleaning Equipment' },
    //   { type: 'ITB', label: 'Idle Time Bunker $ (LSF+LSG)' },
    //   { type: 'HCC', label: 'Hold Cleaning Chemicals' },
    //   { type: 'SCG', label: 'Shore Cleaning Gang' },
    //   { type: 'HCX', label: 'Hold Cleaning Consumables' }
    // ];
    // this.cols = [
    //   { field: "Summary", header: "Summary" },
    //   { field: "BudgetSum", header: "Budget" },
    //   { field: "ActualSum", header: "Actual" },
    //   { field: "Difference", header: "Diff." },
    // ];
    // this.colHCC = [
    //   { field: "TCCBudget", header: "TCC Budget" },
    //   { field: "TCCActual", header: "TCC Actual" },
    //   { field: "TCCDiff.", header: "TCC Diff." },
    // ];
    this.colStatus = [
      { field: "Status", header: "Status" },
      { field: "CountVoyage", header: "Count of Voyage No." },

    ];
  }

  selectVessel($event) {

  }

  async getReportVessel() {
    await this.reportService.getReportVessels().subscribe((res: VesselDropList[]) => {
      this.vesselListDropDown = res;
    })
  }
  async getAllDropdown() {
    await this.reportService.getOtherDropdownList().subscribe((res: OtherDropdownList) => {
      this.otherListDropDown = res;
    })
  }

  getFormValue() {
    const filterForm = this.nbForm.value;
    this.getReportsDetails(filterForm);
  }

  getReportsDetails(filterDetails) {
    this.preloading = true;
    this.checkListRecord = false;
    this.reportService.getDetailsReports(filterDetails).subscribe(res => {
      this.budgetSummary = res;
      this.checkListRecord = true;
      this.preloading = false;
    })
  }

  async dateFilter(filterDate, controlName) {
    debugger;
    // if (this.disableCommenceDatePicker) {
    //   this.showPop('info', 'Info', `Please Clear ${controlName==='completed'?'Commerce Date':'Complete Date'}`);
    //   return
    // }
    if (!filterDate?.target?.value) {
      this.disableCommenceDatePicker = false;
      this.disableCompletedDatePicker = false;
      this.nbForm.value.VoyageCompletedRangeStart = null
      this.nbForm.value.VoyageCompletedRangeEnd = null
      this.nbForm.value.VoyageCommenceRangeStart = null
      this.nbForm.value.VoyageCommenceRangeEnd = null
    }
    if (filterDate.start && filterDate.end) {
      const startDate = await this.customDatePicker.changeDateTimeZone(filterDate.start);
      const endDate = await this.customDatePicker.changeDateTimeZone(filterDate.end);
      if (controlName === 'completed') {
        this.nbForm.value.VoyageCompletedRangeStart = startDate
        this.nbForm.value.VoyageCompletedRangeEnd = endDate
        this.disableCommenceDatePicker = true;
        this.disableCompletedDatePicker = false;

      } else {
        this.nbForm.value.VoyageCommenceRangeStart = startDate
        this.nbForm.value.VoyageCommenceRangeEnd = endDate
        this.disableCommenceDatePicker = false;
        this.disableCompletedDatePicker = true;

      }
      // this.getFormValue();

    }
    // else {

    //   // this.showPop('success', 'Success', 'Record Saved');
    // }

  }


  // changeDateTimeZone(changeDate) {
  //   const selectedDate: Date = new Date(changeDate);
  //   const timeZoneOffset = selectedDate.getTimezoneOffset();
  //   selectedDate.setMinutes(selectedDate.getMinutes() - timeZoneOffset);
  //   const updatedDate = selectedDate.toISOString().split('T')[0];
  //   return updatedDate
  // }

  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }
  resetForm() {
    this.nbForm.reset();
    if (this.nbForm.value) {

      this.getFormValue();
    }

  }
  // selectAll(controlName, controlList, setValues) {
  //   const formControlName = this.nbForm.get(controlName)
  //   console.log(formControlName, controlName, "values oonf")
  //   switch (controlName) {
  //     case 'VesselListIds':
  //       if (setValues == "all") {
  //         this.nbForm.get(controlName).setValue(controlList);
  //         this.nbForm.get("VesselIds").setValue(controlList.map(x => (x.VesselId)));
  //       } else {
  //         if (formControlName.value) {
  //           this.nbForm.get("VesselIds").setValue(formControlName.value.map(x => (x.VesselId)));
  //         }
  //       }
  //       break;
  //     case 'OwnerListIds':

  //       if (setValues == "all") {
  //         this.nbForm.get(controlName).setValue(controlList);
  //         this.nbForm.get("OwnerIds").setValue(controlList.map(x => (x.OwnerId)));
  //       } else {
  //         if (formControlName.value) {
  //           this.nbForm.get("OwnerIds").setValue(formControlName.value.map(x => (x.OwnerId)));
  //         }
  //       }
  //       break;
  //     case 'StatusListIds':
  //       if (setValues == "all") {
  //         this.nbForm.get(controlName).setValue(controlList);
  //         this.nbForm.get("StatusIds").setValue(controlList.map(x => (x.StatusId)));
  //       } else {
  //         if (formControlName.value) {
  //           this.nbForm.get("StatusIds").setValue(formControlName.value.map(x => (x.StatusId)));
  //         }
  //       }
  //       break;
  //     default:
  //     // code block
  //   }

  // }

  selectAll(controlName: string, controlList: any, setValues: string,indexControl:number,mapKeyIndex:number) {
    this.reportService.getFilterDropdown(controlName,controlList,setValues,indexControl,mapKeyIndex,this.nbForm)
    console.log(this.nbForm.value,"value")
  }
  
  

  setSingleValue(controlName, ControlValue) {

  }

  unselectAll(controlName) {
    this.nbForm.get(controlName).setValue([]);
  }
  searchFilter() {
    const filterForm = this.nbForm.value;
    this.getReportsDetails(filterForm);
  }
}
