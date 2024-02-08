import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnalysisService } from '@app-pages/analysis/analysis.service';
import { FixAndPort, VendorAndMakerList, VesselDropList } from '@app-pages/report/report';
import { ReportsService } from '@app-pages/report/reports.service';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { NbColorHelper, NbThemeService } from '@nebular/theme';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'ngx-graph-analysis',
  templateUrl: './graph-analysis.component.html',
  styleUrls: ['./graph-analysis.component.scss']
})
export class GraphAnalysisComponent {
  vesselListDropDown: VesselDropList[] = [];
  fixturePortListDropDown: FixAndPort;
  nbForm: FormGroup;
  checkListRecord: boolean = false;
  GraphAnalysis: any;
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
  vendorandMakerListDropDown: VendorAndMakerList;
  equipmentListDropDown: any;
  constructor(private reportService: ReportsService, private theme: NbThemeService, private formBuilder: FormBuilder, private analysisService: AnalysisService) {
    this.nbForm = this.formBuilder.group({

      StartDate: "",
      EndDate: "",
      DateCommenceRangeControl: [null],
      VesselListIds: [null],
      VesselIds: [null],
      FixtureListIds: [null],
      Fixture: [null],
      VendorMakerListIds: [null],
      VendorMaker: [null],
      EquipmentListIds: [null], //done
      EquipmentIds: [null],
      EquipmentCategoryListIds: [null],
      EquipmentCategoryIds: [null],
      PortListIds: [null],
      PortIds: [null],
      VendorIds: [null],
      VendorListIds: [null],
      UnitListIds: [null],
      UnitIds: [null],

    });
  }


  ngOnInit(): void {

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
    if (!filterDate) {
      // this.disableCommenceDatePicker = false;
      // this.disableCompletedDatePicker = false;
      this.nbForm.value.StartDate = null
      this.nbForm.value.EndDate = null

    } else {

      if (filterDate.start && filterDate.end) {
        const startDate = await this.customDatePicker.changeDateTimeZone(filterDate.start);
        const endDate = await this.customDatePicker.changeDateTimeZone(filterDate.end);

        this.nbForm.value.StartDate = startDate
        this.nbForm.value.EndDate = endDate
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
    this.reportService.getFixtureAndRequisitionListDropdownList().subscribe((res: FixAndPort) => {
      this.fixturePortListDropDown = res;
    })
    this.reportService.getVendorAndMakerList().subscribe((res: VendorAndMakerList) => {
      this.vendorandMakerListDropDown = res;

    })
    this.reportService.getCategoryAndEquipmentList().subscribe((res: any) => {
      this.equipmentListDropDown = res;
    })
  }

  getFormValue() {
    this.dateFilter(this.nbForm.value.DateCommenceRangeControl, '')
    const filterForm = this.nbForm.value;
    if (filterForm.YearDate) {
      const changeDate = this.customDatePicker.changeDateTimeZone(filterForm.YearDate);
      this.nbForm.value.YearDate = changeDate;
    }

    this.getReportsAnalysisDetails(filterForm);

  }

  getReportsAnalysisDetails(filterDetails) {
    this.checkListRecord = true;
    this.analysisService.getDetailsGraphAnalysis(filterDetails).subscribe((res: any) => {
      this.GraphAnalysis = res;
      this.barChartCode(this.GraphAnalysis);
      this.checkListRecord = true
    })
  }

  barChartCode(dataList) {

    const graphLabels = this.GraphAnalysis.EquipmentDetails.map(x => x.EquipmentName)
    const graphCountData = dataList?.EquipmentDetails.map(x => x.QtyReceived)
    const graphAmountData = dataList?.EquipmentDetails.map(x => x.SubTotal)
    const maxDataValue = Math.max(...graphCountData);
    console.log(maxDataValue, "value of graphs")
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: graphLabels,
        datasets: [

          {
            data: graphCountData,
            label: 'Product QTY',
            backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),

          },
          {
            data: graphAmountData,
            label: 'Product Amount',
            backgroundColor: NbColorHelper.hexToRgbA('#E3963E', 0.8),
          },


        ]
      };
      // this.countData = {
      //   labels: graphLabels,
      //   datasets: [

      //     {
      //       data: graphCountData,
      //       label: 'SHA Count',
      //       backgroundColor: NbColorHelper.hexToRgbA('#E3963E', 0.8),
      //     },

      //   ]
      // };


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
                maxDataValue: maxDataValue,
              },
            },
          ],
        },
        plugins: {
          pluginDataLabels,
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
  selectGetAll(controlName: string, controlList: any, setValues: string, fromControlName: string, mapKeyName: string) {
    this.reportService.getSpecialFilterDropdown(controlName, controlList, setValues, fromControlName, mapKeyName, this.nbForm)
    console.log(this.nbForm.value, "value")
  }



  setSingleValue(controlName, ControlValue) {

  }

  unselectAll(controlName) {
    this.nbForm.get(controlName).setValue([]);
  }
  async searchFilter() {
    await this.dateFilter(this.nbForm.value.DateCommenceRangeControl, '')
    const filterForm = this.nbForm.value;

    this.getReportsAnalysisDetails(filterForm);
  }

}
