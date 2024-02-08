import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OtherDropdownList, VesselDropList } from '@app-pages/report/report';
import { ReportsService } from '@app-pages/report/reports.service';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { NbColorHelper, NbThemeService } from '@nebular/theme';
import { AnalysisService } from '../analysis.service';

@Component({
  selector: 'ngx-scg-analysis',
  templateUrl: './scg-analysis.component.html',
  styleUrls: ['./scg-analysis.component.scss']
})
export class ScgAnalysisComponent {
  vesselListDropDown: VesselDropList[] = [];
  otherListDropDown: OtherDropdownList;
  nbForm: FormGroup;
  checkListRecord: boolean = false;
  viewListTable: string;
  option: any;
  data: any;
  // activeUser: any;
  analysisType: string = 'MTD';
  chartOptions: any;
  themeSubscription: any;
  customDatePicker = new CustomStateError()
  cols: any;
  analysisDetails: any;
  countData: { labels: string[]; datasets: { data: number[]; label: string; backgroundColor: string; }[]; };
  SCGWiseDetails: any;
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
    this.barChartCode();
    
  }


  initialTableDetails() {
  
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
    
      this.getReportsAnalysisDetails(filterForm);
    
  }

  getReportsAnalysisDetails(filterDetails) {
    this.checkListRecord = true;
    this.analysisService.getDetailsSCGAnalysis(filterDetails).subscribe((res: any) => {
      this.SCGWiseDetails = res;
      this.checkListRecord = true
    })
  }
 
  barChartCode() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
  
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
  
      this.data = {
        labels: ['Vessel 1', 'Vessel 2', 'Vessel 3'],
        datasets: [
          {
            type: 'bar',
            label: 'SCG Actual',
            data: [28, 48, 40],
            backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
            barPercentage: 0.5, // Set the width of the bars for the first dataset (adjust as needed)
            order: 1,
          },
          {
            type: 'bar',
            label: 'ITD Actual',
            data: [28, 0, 0],
            backgroundColor: NbColorHelper.hexToRgbA(colors.success, 0.8),
            categoryPercentage: 1.0, // Set the width of the bars for the second dataset (overwrite the first)
            order: 2,
          },
        ],
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
          },
        },
        plotOptions: {
          column: {
            grouping: true,
            shadow: false,
            borderWidth: 0,
          },
        },
      };
    });
  }
  
  


}
