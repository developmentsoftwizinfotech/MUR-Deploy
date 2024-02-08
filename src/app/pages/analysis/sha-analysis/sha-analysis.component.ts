import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MURListDropDown, OtherDropdownList, PortDropDownList, VesselDropList } from '@app-pages/report/report';
import { ReportsService } from '@app-pages/report/reports.service';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { NbColorHelper, NbThemeService } from '@nebular/theme';
import { AnalysisService } from '../analysis.service';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'ngx-sha-analysis',
  templateUrl: './sha-analysis.component.html',
  styleUrls: ['./sha-analysis.component.scss']
})
export class ShaAnalysisComponent {
  vesselListDropDown: VesselDropList[] = [];
  otherListDropDown: OtherDropdownList;
  nbForm: FormGroup;
  checkListRecord: boolean = false;
  SHAAnalysis: any;
  viewListTable: string;
  option: any;
  data: any;
  // activeUser: any;
  analysisType: string = 'MTD';
  chartOptions: any;
  themeSubscription: any;
  customDatePicker = new CustomStateError()
  options = [
    { value: 'amount', label: 'Amount' },
    { value: 'count', label: 'Count' },

  ];
  cols: any;
  analysisDetails: any;
  countData: { labels: string[]; datasets: { data: number[]; label: string; backgroundColor: string; }[]; };
  portListDropDown: PortDropDownList;
  MURListDropDown: MURListDropDown;
  constructor(private reportService: ReportsService, private theme: NbThemeService, private formBuilder: FormBuilder, private analysisService: AnalysisService) {
    this.nbForm = this.formBuilder.group({

      VoyageCommenceRangeStart: [null],
      VoyageCommenceRangeEnd: [null],
      VoyageCompletedRangeStart: [null],
      VoyageCompletedRangeEnd: [null],
      StartCreatedDate: "",
      EndCreatedDate: "",
      DateCommenceRangeControl: [null],
      VesselListIds: [null],
      VesselIds: [null],
      StatusListIds: [null],
      StatusIds: [null],
      OwnerListIds: [null],
      OwnerIds: [null],
      Quarter: [null],
      LTCMURListIds: [null], //done
      LTCMURIds: [null],
      SHAVendors: [null],
      SHAVendorsListIds: [null],
      SCGVendorsListIds: [null],
      SCGVendors: [null],
      SCGStatusIds: [null],
      SCGStatusListIds: [null],
      ITDStatusListIds: [null],
      ITDStatusIds: [null],
      LoadToPortsListIds: [null],
      LoadToPorts: [null],
      DischargePorts: [null],
      DischargePortsListIds: [null],
      CargoToLoadsListIds: [null],
      CargoToLoads: [null],
      HoldPassListIds: [null],
      HoldPassIds: [null],
      SCGPortsListIds: [null],
      SCGPorts: [null]


    });
  }


  ngOnInit(): void {

    this.viewListTable = 'amount';
    this.getReportVessel();
    this.getAllDropdown()
    this.getFormValue();
    this.initialTableDetails();
  }


  initialTableDetails() {

  }

  async dateFilter(filterDate, controlName) {
    debugger;
    // if (this.disableCommenceDatePicker) {
    //   this.showPop('info', 'Info', `Please Clear ${controlName==='completed'?'Commerce Date':'Complete Date'}`);
    //   return
    // }
    if (!filterDate?.target?.value) {
      // this.disableCommenceDatePicker = false;
      // this.disableCompletedDatePicker = false;
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
        // this.disableCommenceDatePicker = true;
        // this.disableCompletedDatePicker = false;

      } else {
        this.nbForm.value.VoyageCommenceRangeStart = startDate
        this.nbForm.value.VoyageCommenceRangeEnd = endDate
        // this.disableCommenceDatePicker = false;
        // this.disableCompletedDatePicker = true;

      }


    }


  }

  async getReportVessel() {
    await this.reportService.getReportVessels().subscribe((res: VesselDropList[]) => {
      this.vesselListDropDown = res;
    })
  }
  async getAllDropdown() {
    this.reportService.getOtherDropdownList().subscribe((res: OtherDropdownList) => {
      this.otherListDropDown = res;
    })
    this.reportService.getPortDropdownList().subscribe((res: PortDropDownList) => {
      this.portListDropDown = res;
      console.log(this.portListDropDown, "ports")
    })
    this.reportService.getMURDropdownList().subscribe((res: MURListDropDown) => {
      this.MURListDropDown = res;
    })
  }

  getFormValue() {
    const filterForm = this.nbForm.value;
    if (filterForm.YearDate) {
      const changeDate = this.customDatePicker.changeDateTimeZone(filterForm.YearDate);
      this.nbForm.value.YearDate = changeDate;
    }

    this.getReportsAnalysisDetails(filterForm);

  }

  getReportsAnalysisDetails(filterDetails) {
    this.checkListRecord = true;
    this.analysisService.getDetailsSHAAnalysis(filterDetails).subscribe((res: any) => {
      this.SHAAnalysis = res;
    this.barChartCode(this.SHAAnalysis,this.viewListTable);
      this.checkListRecord = true
    })
  }

  barChartCode(dataList,viewList) {

    const graphLabels= this.SHAAnalysis.SHAAnalysis.map(x=>x.CargotoLoad)
    const graphCountData=dataList?.SHAAnalysis.map(x=> x.CountOfCargotoLoad)
    const graphAmountData=dataList?.SHAAnalysis.map(x=> x.SumOfSHAActual)
    const maxDataValue = viewList === 'amount' ? Math.max(...graphAmountData) : Math.max(...graphCountData);
    console.log(maxDataValue,"value of graphs")
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: graphLabels,
        datasets: [

          {
            data: graphAmountData,
            label: 'SHA Amount',
            backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
          },

        ]
      };
      this.countData = {
        labels: graphLabels,
        datasets: [

          {
            data: graphCountData,
            label: 'SHA Count',
            backgroundColor: NbColorHelper.hexToRgbA('#E3963E', 0.8),
          },

        ]
      };


      this.chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
          position: 'bottom',
          top: 10
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {

              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                beginAtZero: true,
                fontColor: chartjs.textColor,
                maxDataValue: maxDataValue +2,
              },
            },
          ],
        },
        plugins: {pluginDataLabels,
          datalabels: {
            anchor: 'end',
            align: 'end',
            display: true,
            color: chartjs.textColor,
            offset: 0,
            
          },
        },
      };
    });
  }

  resetForm() {
    this.nbForm.reset();
    if (this.nbForm.value) {

      this.getFormValue();
    }

  }


  selectAll(controlName: string, controlList: any, setValues: string, indexControl: number, mapKeyIndex: number) {
    this.reportService.getFilterDropdown(controlName, controlList, setValues, indexControl, mapKeyIndex, this.nbForm)
    console.log(this.nbForm.value, "value")
  }
  selectPlannedAll(controlName: string, controlList: any, setValues: string, indexControl: number, mapKeyIndex: number) {
    this.reportService.getPlannedFilterDropdown(controlName, controlList, setValues, indexControl, mapKeyIndex, this.nbForm)
    console.log(this.nbForm.value, "value")
  }
  selectNameAll(controlName: string, controlList: any, setValues: string, indexControl: number, mapKeyIndex: number) {
    this.reportService.getNameFilterDropdown(controlName, controlList, setValues, indexControl, mapKeyIndex, this.nbForm)
    console.log(this.nbForm.value, "value")
  }



  setSingleValue(controlName, ControlValue) {

  }

  unselectAll(controlName) {
    this.nbForm.get(controlName).setValue([]);
  }
  searchFilter() {
    const filterForm = this.nbForm.value;
    this.getReportsAnalysisDetails(filterForm);
  }

}
