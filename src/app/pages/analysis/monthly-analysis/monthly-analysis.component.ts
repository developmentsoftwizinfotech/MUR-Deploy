import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OtherDropdownList, VesselDropList } from '@app-pages/report/report';
import { ReportsService } from '@app-pages/report/reports.service';
import { NbColorHelper, NbThemeService } from '@nebular/theme';
import { bottom } from '@popperjs/core';
import { AnalysisService } from '../analysis.service';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';

@Component({
  selector: 'ngx-monthly-analysis',
  templateUrl: './monthly-analysis.component.html',
  styleUrls: ['./monthly-analysis.component.scss']
})
export class MonthlyAnalysisComponent implements OnInit {
  vesselListDropDown: VesselDropList[] = [];
  otherListDropDown: OtherDropdownList;
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
  costHeading = [{ costHead: "Total Cleaning Costs" }, { costHead: "Idle Time Cost" }, { costHead: "Additional Crew Bonus $" }, { costHead: "Idle Time Days For Cleaning" }, { costHead: "Hold Advisory by Shore & Roving Supdt Cost" }, { costHead: "Hold Cleaning Equipment" }, { costHead: "Idle Time Bunker $" }, { costHead: "Hold Cleaning Chemicals" }, { costHead: "Shore Cleaning Gang" }, { costHead: "Hold Cleaning Consumables" }];
  costHeadSelected: string;

  constructor(private reportService: ReportsService, private theme: NbThemeService, private formBuilder: FormBuilder, private analysisService: AnalysisService) {
    this.nbForm = this.formBuilder.group({
      YearDate: [null]
    });
  }


  ngOnInit(): void {

    this.viewListTable = 'amount';
    this.getReportVessel();
    this.getAllDropdown()
    this.getFormValue();
    this.initialTableDetails();
    console.log(this.costHeading)
    // this.barChartCode();
  }


  initialTableDetails() {
    this.monthlyAnalysis = {
      "Year": 2023,
      "YearlyBudget": [
        {
          "CleaningType": "TCC",
          "TotalPrice": 5667
        },
        {
          "CleaningType": "ITC",
          "TotalPrice": 451
        },
        {
          "CleaningType": "HCB",
          "TotalPrice": 554
        },
        {
          "CleaningType": "ITD",
          "TotalPrice": 458
        },
        {
          "CleaningType": "SHA",
          "TotalPrice": 627
        },
        {
          "CleaningType": "HCE",
          "TotalPrice": 955
        },
        {
          "CleaningType": "ITB",
          "TotalPrice": 387
        },
        {
          "CleaningType": "HCC",
          "TotalPrice": 500
        },
        {
          "CleaningType": "SCG",
          "TotalPrice": 518
        },
        {
          "CleaningType": "HCX",
          "TotalPrice": 1217
        }
      ],
      "MonthlySummaries": [
        {
          "MonthName": "December",
          "MonthlyBudgets": [
            {
              "CleaningType": "TCC",
              "Amount": 204,
              "Percentage": "3.60%"
            },
            {
              "CleaningType": "ITC",
              "Amount": 23,
              "Percentage": "5.10%"
            },
            {
              "CleaningType": "HCB",
              "Amount": 23,
              "Percentage": "4.15%"
            },
            {
              "CleaningType": "ITD",
              "Amount": 22,
              "Percentage": "4.80%"
            },
            {
              "CleaningType": "SHA",
              "Amount": 22,
              "Percentage": "3.51%"
            },
            {
              "CleaningType": "HCE",
              "Amount": 22,
              "Percentage": "2.30%"
            },
            {
              "CleaningType": "ITB",
              "Amount": 23,
              "Percentage": "5.94%"
            },
            {
              "CleaningType": "HCC",
              "Amount": 23,
              "Percentage": "4.60%"
            },
            {
              "CleaningType": "SCG",
              "Amount": 23,
              "Percentage": "4.44%"
            },
            {
              "CleaningType": "HCX",
              "Amount": 23,
              "Percentage": "1.89%"
            }
          ]
        },
        {
          "MonthName": "July",
          "MonthlyBudgets": [
            {
              "CleaningType": "TCC",
              "Amount": 96,
              "Percentage": "1.69%"
            },
            {
              "CleaningType": "ITC",
              "Amount": 11,
              "Percentage": "2.44%"
            },
            {
              "CleaningType": "HCB",
              "Amount": 11,
              "Percentage": "1.99%"
            },
            {
              "CleaningType": "ITD",
              "Amount": 11,
              "Percentage": "2.40%"
            },
            {
              "CleaningType": "SHA",
              "Amount": 11,
              "Percentage": "1.75%"
            },
            {
              "CleaningType": "HCE",
              "Amount": 13,
              "Percentage": "1.36%"
            },
            {
              "CleaningType": "ITB",
              "Amount": 9,
              "Percentage": "2.33%"
            },
            {
              "CleaningType": "HCC",
              "Amount": 8,
              "Percentage": "1.60%"
            },
            {
              "CleaningType": "SCG",
              "Amount": 11,
              "Percentage": "2.12%"
            },
            {
              "CleaningType": "HCX",
              "Amount": 11,
              "Percentage": "0.90%"
            }
          ]
        },
        {
          "MonthName": "November",
          "MonthlyBudgets": [
            {
              "CleaningType": "TCC",
              "Amount": 90,
              "Percentage": "1.59%"
            },
            {
              "CleaningType": "ITC",
              "Amount": 10,
              "Percentage": "2.22%"
            },
            {
              "CleaningType": "HCB",
              "Amount": 10,
              "Percentage": "1.81%"
            },
            {
              "CleaningType": "ITD",
              "Amount": 10,
              "Percentage": "2.18%"
            },
            {
              "CleaningType": "SHA",
              "Amount": 10,
              "Percentage": "1.59%"
            },
            {
              "CleaningType": "HCE",
              "Amount": 10,
              "Percentage": "1.05%"
            },
            {
              "CleaningType": "ITB",
              "Amount": 10,
              "Percentage": "2.58%"
            },
            {
              "CleaningType": "HCC",
              "Amount": 10,
              "Percentage": "2.00%"
            },
            {
              "CleaningType": "SCG",
              "Amount": 10,
              "Percentage": "1.93%"
            },
            {
              "CleaningType": "HCX",
              "Amount": 10,
              "Percentage": "0.82%"
            }
          ]
        },
        {
          "MonthName": "October",
          "MonthlyBudgets": [
            {
              "CleaningType": "TCC",
              "Amount": 187,
              "Percentage": "3.30%"
            },
            {
              "CleaningType": "ITC",
              "Amount": 11,
              "Percentage": "2.44%"
            },
            {
              "CleaningType": "HCB",
              "Amount": 101,
              "Percentage": "18.23%"
            },
            {
              "CleaningType": "ITD",
              "Amount": 10,
              "Percentage": "2.18%"
            },
            {
              "CleaningType": "SHA",
              "Amount": 11,
              "Percentage": "1.75%"
            },
            {
              "CleaningType": "HCE",
              "Amount": 10,
              "Percentage": "1.05%"
            },
            {
              "CleaningType": "ITB",
              "Amount": 11,
              "Percentage": "2.84%"
            },
            {
              "CleaningType": "HCC",
              "Amount": 11,
              "Percentage": "2.20%"
            },
            {
              "CleaningType": "SCG",
              "Amount": 11,
              "Percentage": "2.12%"
            },
            {
              "CleaningType": "HCX",
              "Amount": 11,
              "Percentage": "0.90%"
            }
          ]
        },
        {
          "MonthName": "September",
          "MonthlyBudgets": [
            {
              "CleaningType": "TCC",
              "Amount": 58,
              "Percentage": "1.02%"
            },
            {
              "CleaningType": "ITC",
              "Amount": 12,
              "Percentage": "2.66%"
            },
            {
              "CleaningType": "HCB",
              "Amount": 2,
              "Percentage": "0.36%"
            },
            {
              "CleaningType": "ITD",
              "Amount": 2,
              "Percentage": "0.44%"
            },
            {
              "CleaningType": "SHA",
              "Amount": 2,
              "Percentage": "0.32%"
            },
            {
              "CleaningType": "HCE",
              "Amount": 12,
              "Percentage": "1.26%"
            },
            {
              "CleaningType": "ITB",
              "Amount": 22,
              "Percentage": "5.68%"
            },
            {
              "CleaningType": "HCC",
              "Amount": 2,
              "Percentage": "0.40%"
            },
            {
              "CleaningType": "SCG",
              "Amount": 2,
              "Percentage": "0.39%"
            },
            {
              "CleaningType": "HCX",
              "Amount": 2,
              "Percentage": "0.16%"
            }
          ]
        }
      ],
      "QuarterlySummaries": null
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
    await this.analysisService.getDetailsMonthlyAnalysis(filterDetails).subscribe((res: any) => {
      this.monthlyAnalysis = res;
      this.analysisDetails = res.MonthlySummaries
      this.checkListRecord = true
      this.costHeadSelected = 'Total Cleaning Costs'
      this.filterGraph(this.costHeadSelected);

    })
  }
  getQuaterlyDetails(filterDetails) {
    this.analysisService.getDetailsQuaterlyAnalysis(filterDetails).subscribe((res: any) => {
      this.monthlyAnalysis = res;
      this.analysisDetails = res.QuarterlySummaries
      console.log(this.analysisDetails)
      this.costHeadSelected = 'Total Cleaning Costs'
      this.filterGraph(this.costHeadSelected);
    })
  }

  getMonthlyBudget(month: any, rowData: any): any {
    if (this.analysisType === 'MTD') {
      return month.MonthlyBudgets.find(b => b.CostHead === rowData.CostHead);
    } else {
      return month.QuarterlyBudgets.find(b => b.CostHead === rowData.CostHead);
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
          label: this.costHeadSelected,
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
        }, {
          type: 'line',
          label: `Linear (${this.costHeadSelected})`,
          data: data,
          borderDash: [10, 5],
          backgroundColor: NbColorHelper.hexToRgbA(colors.danger, 0.0),
        }
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
    const analysisType = this.analysisType === 'MTD' ? 'MonthlyBudgets' : 'QuarterlyBudgets'
    const graphLagends = this.analysisType === 'MTD' ? 'MonthName' : 'Quarter'
    const graphBasedOn = this.viewListTable == 'amount' ? 'Amount' : 'Percentage';
    const graphActual = this.analysisType === 'MTD' ? 'SumOfPreviousMonths' : 'SumOfPreviousQuarters';
    const graphLabels = this.analysisDetails.map(x => (graphLagends === 'MonthName' ? x[graphLagends] : `Q-${x[graphLagends]}`))
    const graphData = this.analysisDetails.map(y => y[analysisType].filter(z => (z.CostHead === selectCostHead)).map(x => x[graphBasedOn])).flat();
    const graphActualData = this.analysisDetails.map(y => y[analysisType].filter(z => (z.CostHead === selectCostHead)).map(x => x[graphActual])).flat();
    const costLine = this.viewListTable == 'amount' ? this.monthlyAnalysis.AnualBudget.find(x => (x.CostHead === selectCostHead))?.TotalCost : 100
    this.barChartCode(graphLabels, graphData, costLine, graphActualData)
    console.log(this.analysisDetails);

  }
  changeToGraph(viewList) {
    this.viewListTable = viewList
    // console.log(this.viewListTable)
    this.filterGraph('Total Cleaning Costs');
  }
  // changeHoldCost(){

  // }
}
