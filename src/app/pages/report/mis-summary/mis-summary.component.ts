import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OtherDropdownList, VesselDropList } from '../report';
import { ReportsService } from '../reports.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';


@Component({
  selector: 'ngx-mis-summary',
  templateUrl: './mis-summary.component.html',
  styleUrls: ['./mis-summary.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MisSummaryComponent implements OnInit {
  vesselListDropDown: VesselDropList[] = [];
  otherListDropDown: OtherDropdownList;
  nbForm: FormGroup;

  summaryList: any;
  date: any;
  startView: 'month' | 'year' = 'year';
  filterFn: any;
  checkListRecord = true;
  preloading: boolean = true;
  cols: { field: string; header: string; }[];
  colHCC: { field: string; header: string; }[];
  HCCBudgetList: any;
  colStatus: { field: string; header: string; }[]; budgetSummaryDetails: Object;
  yearTotalSummaryDetails: any;
  yearTotalSummary: Object;
  QSSummary: Object;
  QSSummarySummaryDetails: any;
  activeIndex: number;
  ;
  HCCBudgetDetails: any;
  budgetSummary: any;
  customDatePicker = new CustomStateError()
  cleaningTypes: { type: string, label: string }[]

  @ViewChild('firstDiv') firstDiv: ElementRef;
  @ViewChild('secondDiv') secondDiv: ElementRef;
  @ViewChild('thirdDiv') thirdDiv: ElementRef;

  constructor(private formBuilder: FormBuilder, private reportService: ReportsService) {

    this.nbForm = this.formBuilder.group({
      YearDate: [''],

    });
    this.initialStageTable();
  }

  ngOnInit(): void {
    this.activeIndex = 1
    this.getReportVessel();
    this.getAllDropdown()
    this.getFormValue();







    // console.log(this.budgetSummary)




  }

  initialStageTable() {

  }

  selectVessel($event) {

  }
  getMonthlyBudget(month: any, rowData: any, selectedBudget: string): any {
    switch (selectedBudget) {
      case "monthly":
        return month.MonthlyBudgets.find(b => b.CleaningType === rowData.CleaningType);
      case "yearly":
        return month.YearlyBudgets.find(b => b.CleaningType === rowData.CleaningType);
      case "quaterly":
        return month.QuarterlyBudgets.find(b => b.CleaningType === rowData.CleaningType);
      default:
        return null;
    }
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
    let yearDateSelected = this.nbForm.value.YearDate
    if (yearDateSelected) {
      this.nbForm.value.YearDate = this.customDatePicker.changeDateTimeZone(yearDateSelected)
    }
    const filterForm = this.nbForm.value;
    this.getMisReportsDetails(filterForm);
  }

  async getMisReportsDetails(filterForm) {
    // this.preloading = true;
    this.checkListRecord = false;
    await this.reportService.getDetailsMisReports(filterForm).subscribe(res => {
      this.budgetSummary = res;
      this.budgetSummaryDetails = res[0]?.MonthlyBudgets;
      this.preloading = false
      this.checkListRecord = true
    })
    await this.reportService.getDetailsYTDReports(filterForm).subscribe(res => {
      this.yearTotalSummary = res;
      this.yearTotalSummaryDetails = res[0]?.YearlyBudgets;
      this.preloading = false
      this.checkListRecord = true
    })
    await this.reportService.getDetailsQSReports(filterForm).subscribe(res => {
      this.QSSummary = res;
      this.QSSummarySummaryDetails = res[0]?.QuarterlyBudgets;
      this.preloading = false
      this.checkListRecord = true
    })
  }


  activeState(value: string) {
    debugger;
    switch (value) {
      case "MTD":
        this.activeIndex = 0;
        this.scrollToElementById('firstDiv','startDocument')
        // window.scrollTo({ top: MTD, behavior: 'smooth' });
        break;
      case "YTD":
        this.activeIndex = 1
        this.scrollToElementById('secondDiv','startDocument')
        // window.scrollTo({ top: YTD, behavior: 'smooth' });
        break;
      case "QTD":
        this.activeIndex = 2
        this.scrollToElementById('thirdDiv','startDocument')
        // const QTD = this.thirdDiv.nativeElement.getBoundingClientRect().top;
        // window.scrollTo({ top: QTD, behavior: 'smooth' });
        break;
      default:
        this.activeIndex = 0
    }

  }
  ngAfterViewInit() {
    // Access the elements here
    console.log('firstDiv Element:', this.firstDiv?.nativeElement);
    console.log('secondDiv Element:', this.secondDiv?.nativeElement);
    console.log('thirdDiv Element:', this.thirdDiv?.nativeElement);
  }



  scrollToElementById(id: string,bodyId:string) {
    const element = this.__getElementById(id,bodyId);
    this.scrollToElement(element);
  }

  private __getElementById(id: string,bodyId:string): HTMLElement {
    console.log("element id : ", id);
    const container = document.getElementById(bodyId);
    const element = <HTMLElement>document.querySelector(`#${id}`) as HTMLElement;
    // const element = documentBody.getElementById(id);
    return element;
  }

  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
