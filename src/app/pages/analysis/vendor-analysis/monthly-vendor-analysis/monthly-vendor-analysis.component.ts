import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnalysisService } from '@app-pages/analysis/analysis.service';
import { CategoryAndProductList, VesselDropList } from '@app-pages/report/report';
import { ReportsService } from '@app-pages/report/reports.service';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { NbColorHelper, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-monthly-vendor-analysis',
  templateUrl: './monthly-vendor-analysis.component.html',
  styleUrls: ['./monthly-vendor-analysis.component.scss']
})
export class MonthlyVendorAnalysisComponent {

  vesselListDropDown: VesselDropList[] = [];
  nbForm: FormGroup;
  checkListRecord: boolean = false;
  monthlyAnalysis: any;
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
    { value: 'percentage', label: 'Percentage' },

  ];

  cols: any;
  analysisDetails: any;
  costHeading: CategoryAndProductList

  costHeadSelected: number;

  constructor(private reportService: ReportsService, private theme: NbThemeService, private formBuilder: FormBuilder, private analysisService: AnalysisService) {
    this.nbForm = this.formBuilder.group({
      EquipmentCategoryId: [24],
      YearDate: ['2023-02-07T07:06:24.134Z']
    });
  }


  ngOnInit(): void {

    this.viewListTable = 'amount';
    this.getHeading();
    this.getReportVessel();
    this.getFormValue();
    this.initialTableDetails();
    console.log(this.costHeading)
    // this.barChartCode();
  }


  initialTableDetails() {

  }



  async getReportVessel() {
    await this.reportService.getReportVessels().subscribe((res: VesselDropList[]) => {
      this.vesselListDropDown = res;
    })
  }
  getHeading() {
    this.reportService.getCategoryAndEquipmentList().subscribe((res: CategoryAndProductList) => {
      this.costHeading = res;
    })
  }


  getFormValue() {
    const filterForm = this.nbForm.value;
    if (filterForm.YearDate) {
      const changeDate = this.customDatePicker.changeDateTimeZone(filterForm.YearDate);
      this.nbForm.value.YearDate = changeDate;
    }
    if (this.analysisType === 'MTD') {
      this.getReportsAnalysisDetails(filterForm);
    } else {
      this.getQuaterlyDetails(filterForm);
    }
  }

  async getReportsAnalysisDetails(filterDetails) {
    this.checkListRecord = true;
    await this.analysisService.getDetailsVendorMonthlyAnalysis(filterDetails).subscribe((res: any) => {
      this.monthlyAnalysis = res;
      this.analysisDetails = res.MonthlySummaries
      this.checkListRecord = true
      this.costHeadSelected = this.costHeading.EquipmentCategoryList[0].EquipmentCategoryId
      this.filterGraph(this.costHeadSelected);

    })
  }
  getQuaterlyDetails(filterDetails) {
    this.analysisService.getDetailsVendorQuaterlyAnalysis(filterDetails).subscribe((res: any) => {
      this.monthlyAnalysis = res;
      this.analysisDetails = res.QuarterlySummaries
      console.log(this.analysisDetails)
      this.costHeadSelected = this.costHeading.EquipmentCategoryList[0].EquipmentCategoryId
      this.filterGraph(this.costHeadSelected);
    })
  }

  getMonthlyBudget(month: any, rowData: any): any {
    if (this.analysisType === 'MTD') {
      return month.MonthlyBudgets.find(b => b.EquipmentName === rowData.EquipmentName);
    } else {
      return month.QuarterlyBudgets.find(b => b.EquipmentName === rowData.EquipmentName);
    }
  }

  barChartCode(label, data, costLine, costIncData) {

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      let dataLine = Array(12).fill(costLine);
      // let costData = Array(12).fill(costIncData);
      this.data = {
        labels: label,
        datasets: [{
          data: costIncData,
          label: 'Cumulative',
          backgroundColor: NbColorHelper.hexToRgbA(colors.success, 0.8),
        }, {
          data: data,
          label: 'Actual',
          backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
        },
        {
          type: 'line',
          label: '2024 Budget',
          data: dataLine,
          color: NbColorHelper.hexToRgbA(colors.danger, 0.8),
          borderColor: NbColorHelper.hexToRgbA(colors.danger, 0.8),
          backgroundColor: NbColorHelper.hexToRgbA(colors.danger, 0.0),
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
              scaleLabel: {
                display: true,
                labelString: 'Month'
              },
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
                fontColor: chartjs.textColor,

              },
            },
          ],
        },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'end',
            display: true,
            color: chartjs.textColor,
            offset: 10,
          },
        },
      };
    });
  }


  filterGraph(selectCostHead) {
    if (this.analysisDetails) {

      const analysisType = this.analysisType === 'MTD' ? 'MonthlyBudgets' : 'QuarterlyBudgets'
      const graphLagends = this.analysisType === 'MTD' ? 'MonthName' : 'Quarter'
      const graphBasedOn = this.viewListTable == 'amount' ? 'EquipmentSubtotal' : 'Percentage';
      const graphActual = this.analysisType === 'MTD' && this.viewListTable == 'amount' ? 'CumulativeSum' : 'CumulativePercentage';
      const graphLabels = this.analysisDetails.map(x => (graphLagends === 'MonthName' ? x[graphLagends] : `Q-${x[graphLagends]}`))
      const graphData = this.analysisDetails.map(y => y[analysisType].map(x => x[graphBasedOn]).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0).toFixed(2)).flat();
      const graphActualData = this.analysisDetails.map(y => y[analysisType].map(x => x[graphActual]).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0).toFixed(2)).flat();
      const costLine = this.viewListTable == 'amount' ? this.monthlyAnalysis.AnualBudget[0].Budget : null

      this.barChartCode(graphLabels, graphData, costLine, graphActualData)
      console.log(graphActualData);
    }


  }
  changeToGraph(viewList) {
    this.viewListTable = viewList
    // console.log(this.viewListTable)
    this.filterGraph(this.costHeadSelected);
  }
  // changeHoldCost(){

  // }
}
