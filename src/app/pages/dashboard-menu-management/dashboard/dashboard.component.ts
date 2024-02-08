import { Component, OnInit } from '@angular/core';
import { AfterViewInit, OnDestroy } from '@angular/core';
import { NbColorHelper, NbThemeService } from '@nebular/theme';


import { PrimeNGConfig } from "primeng/api";
import { FormBuilder, } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { AddVesselComponent } from "@app-pages/settings/vessel/add-vessel/add-vessel.component";

import { License, Vessel } from "@app-pages/settings/vessel/vessel";
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { AddLicenseComponent } from "@app-pages/settings/vessel/add-license/add-license.component";
import { LicenseLogComponent } from "@app-pages/settings/vessel/license-log/license-log.component";
import { VesselService } from '@app-pages/settings/vessel/vessel.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {


  data: any;
  activeUser: any;
  options: any;

  constructor(private theme: NbThemeService, private vesselService: VesselService) {
    }


  ngOnInit() {

    const currentUser = localStorage.getItem('currentUser');
    const activeUser = JSON.parse(currentUser);
    if (activeUser.email == 'Admin') {
      this.activeUser = 'Admin';

    }else{
      this.activeUser = 'Vendor';

    }
this.barChartCode();

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    // this.data = {
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    //   datasets: [
    //     {
    //       label: 'My First dataset',
    //       backgroundColor: (colors.primaryLight, 0.8),
    //       borderColor: documentStyle.getPropertyValue('--blue-500'),
    //       data: [65, 59, 80, 81, 56, 55, 40, 35, 80, 55, 69, 98]
    //     },
    //     {
    //       label: 'My Second dataset',
    //       backgroundColor: documentStyle.getPropertyValue('--pink-500'),
    //       borderColor: documentStyle.getPropertyValue('--pink-500'),
    //       data: [28, 48, 40, 19, 86, 27, 90, 80, 65, 95, 25, 40]
    //     },
    //     {
    //       label: 'My Second dataset',
    //       backgroundColor: documentStyle.getPropertyValue('--pink-500'),
    //       borderColor: documentStyle.getPropertyValue('--pink-500'),
    //       data: [28, 48, 40, 19, 86, 27, 90, 80, 65, 95, 25, 40]
    //     }
    //   ]
    // };

    this.options = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

    this.getVesselListRecords(1, 100, '');
    // this.productService.getProducts().then((data) => {
    //   this.vessel = data});

    this.items = [{ label: "ADD NEW CLENING STAGE" }];
    this.cols = [
      { field: "VesselName", header: "Vessel Name" },
      { field: "IMONumber", header: `IMO Number` },
      { field: "FleetTypeName", header: "Fleet Type" },
      { field: "FleetName", header: "Fleet Name" },
      { field: "DWT_T", header: "DWT(T)" },
      { field: "LicenseStartDate", header: "License Start" },
      { field: "LicenseEndDate", header: "License Expiring " },

    ];

    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  option: any = {};
  themeSubscription: any;

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.option = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Countries',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: 'Germany' },
              { value: 310, name: 'France' },
              { value: 234, name: 'Canada' },
              { value: 135, name: 'Russia' },
              { value: 1548, name: 'USA' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }


// Bar Chart -------------------------Code





barChartCode(){
  this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

    const colors: any = config.variables;
    const chartjs: any = config.variables.chartjs;

    this.data = {
      labels: ['AFRICAN BAZA', 'AFRICAN BARI BIRD', 'AFRICAN HORNBILL', 'AFRICAN LOON', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO','AFRICAN CHEETAH','AFRICAN LOON', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO','AFRICAN CHEETAH','AFRICAN SETO','AFRICAN CHEETAH','AFRICAN LOON', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO','AFRICAN CHEETAH','GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO','AFRICAN CHEETAH','GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO','AFRICAN CHEETAH','GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO','AFRICAN CHEETAH','AFRICAN BAZA', 'AFRICAN BARI BIRD', 'AFRICAN HORNBILL', 'AFRICAN LOON', 'GEMINI CONFIDENCE', 'AFRICAN PARROT','AFRICAN PARROT', 'AFRICAN SETO','AFRICAN CHEETAH','AFRICAN LOON','AFRICAN PARROT', 'AFRICAN SETO','AFRICAN CHEETAH','AFRICAN LOON','AFRICAN PARROT', 'AFRICAN SETO','AFRICAN CHEETAH','AFRICAN LOON','AFRICAN CHEETAH','GEMINI CONFIDENCE', 'AFRICAN PARROT','AFRICAN LOON', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO','AFRICAN CHEETAH','AFRICAN LOON', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO','AFRICAN CHEETAH','AFRICAN SETO','AFRICAN CHEETAH','AFRICAN LOON', 'GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO','AFRICAN CHEETAH','GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO','AFRICAN CHEETAH','GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO','AFRICAN CHEETAH','GEMINI CONFIDENCE', 'AFRICAN PARROT', 'AFRICAN SETO','AFRICAN CHEETAH','AFRICAN BAZA', 'AFRICAN BARI BIRD', 'AFRICAN HORNBILL',],
      datasets: [{
        data: [-6.0, -4.0,-2.0,0,2,4,6,8,10,12,11,12,13,14,15,-2.0,0,2,4,6,12,12,11,12,12.0, -4.0,-2.0,0.0,2.0,4,6,8,10,12,12,11,12,13,8,10,12,12,11,12,13,-2.0,0,2,4,-2.0,0,2,4,6,-2.0,0,2,4,6,12.0, -4.0,-2.0,0.0,2.0,4,6,8,,-2.0,0,2,4,-2.0,0,2,4,6,-2.0,0,2,4,6],
        label: 'Sum of ITD Budget',
        backgroundColor: NbColorHelper.hexToRgbA(colors.success, 0.8),
      }, {
        data: [4.0, -4.0,-2.0,0,2,4,6,8,10,12,12,11,12,13,-2.0,0,2,4,6,12,12,11,12,12.0, -4.0,-2.0,0.0,2.0,4,6,8,10,12,12,11,12,13,-2.0,0,2,4,8,10,12,12,11,12,13,-2.0,0,2,4,-2.0,0,2,4,6,-2.0,0,2,4,6,12.0, -4.0,-2.0,0.0,2.0,4,6,8,,-2.0,0,2,4,6,-2.0,0,2,4,6,4.0, -4.0,-2.0,0,2,4,6,8,10,12,12,11,12,13,],
        label: 'Sum of ITD Actual',
        backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
      },
      {
        data: [12.0, -4.0,-2.0,0.0,2.0,4,6,8,10,12,12,11,12,13,-2.0,0,2,4,-2.0,0,2,4,6,-2.0,0,2,4,6,12.0, -4.0,-2.0,0.0,2.0,4,6,8,10,12,12,11,12,13,-2.0,0,2,4,-2.0,0,2,4,6,-2.0,0,2,4,6 ,8,10,12,12,11,12,13,-2.0,0,2,4,-2.0,0,2,4,6,-2.0,0,2,4,6,12.0, -4.0,-2.0,0.0,2.0,4,6,8,],
        label: 'Sum of ITC Diff.',
        backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
      }
    ],
    };

    this.options = {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        labels: {
          fontColor: chartjs.textColor,
        },
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
              fontColor: chartjs.textColor,
            },
          },
        ],
      },
    };
  });
}








  vessel: Vessel[];
  checkListRecord: boolean = false;


  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
  cols: { field: string; header: string; }[];
  emptymessage: string;



  // getVesselListRecords() {
  // this.vesselService.getVesselList().subscribe((res: Vessel[]) => {

  //   this.vessel = res;
  //   if (res.length === 0) {
  //     this.emptymessage = 'No Record Found'
  //   }

  //   setTimeout(() => { this.checkListRecord = true }, 200);
  // })
  // }
  getVesselListRecords(cPage, nRows, filter) {
    this.checkListRecord = false
    this.vesselService.getVesselList(cPage, nRows, filter).subscribe((res: any) => {
      this.vessel = res.VesselData;
      //      this.totalCount = res.Count;
      // this.countValue = res.Count
      // if (res.length === 0) {
      //   this.emptymessage = 'No Record Found'
      // }
      // if (this.currentPageReportTemplate === "") {
      //   this.currentPageReportTemplate = `Showing ${(1)} to ${this.selectedRows} of ${this.totalCount} entries`;
      // }
      setTimeout(() => { this.checkListRecord = true }, 200);
    })
  }











}











