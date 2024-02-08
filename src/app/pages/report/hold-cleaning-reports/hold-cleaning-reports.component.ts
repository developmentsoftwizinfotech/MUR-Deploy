import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicabilityComponent } from '@app-pages/settings/applicability/applicability/applicability.component';
import { StatusService } from '@app-pages/settings/status/status.service';
import { NbDialogService } from '@nebular/theme';
import { ConfirmationService, MessageService } from 'primeng/api';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexLegend,
  ApexResponsive,
  ChartComponent
} from "ng-apexcharts";
import { HoldCleaningReportService } from './hold-cleaning-report.service';
import { ActivatedRoute } from '@angular/router';
import { ImageSliderComponent } from '@app-pages/shared/image-slider/image-slider.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive | ApexResponsive[];
};


@Component({
  selector: 'ngx-hold-cleaning-reports',
  templateUrl: './hold-cleaning-reports.component.html',
  styleUrls: ['./hold-cleaning-reports.component.scss'],
  providers: [MessageService, ConfirmationService],

})



export class HoldCleaningReportsComponent implements OnInit {
  status: any[] = [];
  holdStates: any[];
  holdCleaningReportsData: any = []
  voyageListDataDropDown: any
  activeTabHold: any
  remarksDetails: any
  voyageID: number;
  summaryRemarks: any;
  baseImageUrl: string;
  imageUrls: any = [
    'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0-z5FV1DwTxfuMDXRYIchsKI6J5kJYYka1DqIz93O1SlsocjOXs0FLYi5Tb02tW0ONs&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8YwG87Mq29s81KAJjpOvPVPz7TlzDPfrGn6gaNoyjtLLEI_XP6wfc5j6EqN62QVtkkE&usqp=CAU',
    'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0-z5FV1DwTxfuMDXRYIchsKI6J5kJYYka1DqIz93O1SlsocjOXs0FLYi5Tb02tW0ONs&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8YwG87Mq29s81KAJjpOvPVPz7TlzDPfrGn6gaNoyjtLLEI_XP6wfc5j6EqN62QVtkkE&usqp=CAU'
  ];
  holdAllimageUrl:any;
  holdimageUrl: string[] = [
    'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0-z5FV1DwTxfuMDXRYIchsKI6J5kJYYka1DqIz93O1SlsocjOXs0FLYi5Tb02tW0ONs&usqp=CAU',
    'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0-z5FV1DwTxfuMDXRYIchsKI6J5kJYYka1DqIz93O1SlsocjOXs0FLYi5Tb02tW0ONs&usqp=CAU',
    'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg',

  ];
  colHolds: any;
  statusHoldGrid: any;
  holdPercentage: any;


  checkListRecord: boolean = false;
  tabs: any[]
  activeIndex: number = 0;
  scrollableTabs: any[];
  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
  cols: { field: string; header: string; }[];
  emptymessage: string;
  vesselId: number;
  // vessel: { VesselId: number; VesselName: string; IMONumber: number; FleetTypeId: number; FleetId: number; DWT_T: number; Activenumber: boolean; }[];
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  sumaryDetailsTableHolds:any;
  remarkHoldCleaning: string[][];
  voyageIdHold: number;
  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private statusService: StatusService, private holdCleaningReportService: HoldCleaningReportService, private dialogService: NbDialogService, private messageService: MessageService) {
    this.chartOptions = {
      series: [76, 67, 61, 90, 12],
      chart: {
        height: 310,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
      labels: ["Hold1", "Hold2", "Hold3", "Hold4", "Hold5"],
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "left",
        offsetX: 50,
        offsetY: 0,
        labels: {
          useSeriesColors: true
        },
        formatter: function (seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 3
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }
      ]
    };
  }
  ngOnInit() {

    this.baseImageUrl = this.holdCleaningReportService.holdCleaningImagesUrl
    this.route.queryParams.subscribe(params => {
      const itemId = +params['id']; // Convert to a number
      this.voyageIdHold = +params['id']; // Convert to a number
      this.vesselId = +params['IMONumber']
      // Fetch item details based on this.itemId
      console.log(itemId, this.vesselId)
      this.selectVoyage(itemId)
    });
    this.getHoldCleaningReportsList();
    this.getVoyageList()
    this.getSummaryDetailsTable(null);

    this.remarkHoldCleaning=[["value"]]


    // this.productService.getProducts().then((data) => {
    //   this.vessel = data});
    // this.chartOptions.series=[0,0,0,0,0]
    // this.scrollableTabs = [
    //   { Title: "SUMMARY", Holds: 'SUMMARY' },
    //   { Title: "HOLD 1", Holds: 'HOLD' },
    //   { Title: "HOLD 2", Holds: 'HOLD' },
    //   { Title: "HOLD 3", Holds: 'HOLD' },
    //   { Title: "HOLD 4", Holds: 'HOLD' },
    //   { Title: "HOLD 5", Holds: 'HOLD' },
    // ];

    // this.holdStates = [
    //   { hold: "Hold 1", state: 'Pending' },
    //   { hold: "Hold 2", state: 'Planning' },
    //   { hold: "Hold 3", state: 'Pending' },
    //   { hold: "Hold 4", state: 'Pending' },
    //   { hold: "Hold 5", state: 'Pending' },

    // ]



    this.items = [{ label: "ADD NEW CLENING STAGE" }];
    // this.cols = [
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },
    //   { field: "Status", header: "Status" },


    // ];
    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }
  async selectVoyage(selectedVoyage) {
    debugger;
    this.voyageID = selectedVoyage
    await this.holdCleaningReportService.getHoldCleaningReportsList(selectedVoyage).subscribe((res: any[]) => {
      debugger;
      if (res === null) {
        this.emptymessage = 'No Record Found'
        this.holdCleaningReportsData = null
        this.scrollableTabs = null
        this.cols = null
        this.holdStates = null
      } else {
        this.holdCleaningReportsData = null
        this.holdCleaningReportsData = res
        this.scrollableTabs = this.holdCleaningReportsData.NoOfHoldLists
        this.cols = this.holdCleaningReportsData.CargoStagesList
        this.holdStates = this.holdCleaningReportsData.HoldCleaningStatusList
        let percentagedata = this.holdCleaningReportsData.NoOfHoldPercentageList
        const percentage = percentagedata.map((res) => res.Percentage)
        const label = percentagedata.map((res) => res.HoldNo)
        this.chartOptions.series = percentage
        this.chartOptions.labels = label
        let statusList = []
        for (let i = 0; i < this.holdCleaningReportsData.HoldCleaningDetailsList.length; i++) {
          debugger;
          const holdRecords = this.holdCleaningReportsData.HoldCleaningDetailsList[i].HoldRecords.split(";")
          let objHoldRecords = Object.assign({}, holdRecords);
          statusList.push(objHoldRecords)
        }
        this.status = statusList
        console.log(this.status, "data of ")
        this.checkListRecord=true
        // setTimeout(() => { this.checkListRecord = true }, 200);

      }
    })

    await this.holdCleaningReportService.getSummaryRemarksList(selectedVoyage).subscribe((res:any) => {
      debugger;
      this.summaryRemarks = res
      this.holdAllimageUrl= res.map(item => ({
        "Photos": this.summaryPhotos(item["Photos"]),
      }));
     this.imageUrls=this.holdAllimageUrl[1];
      console.log(this.summaryRemarks,"sumary")
      // const images = res[0].Photos.split(',|').slice(1);

      // const holdsAndImages = [];

      // for (const item of images) {
      //   if (item) {
      //     const parts = item.split(',');
      //     const holdLabel = parts[0];
      //     const images = parts.slice(1);
      //     holdsAndImages.push({ "label": holdLabel, "images": images });
      //   }
      // }
      // console.log(holdsAndImages[0].images, "usrls")
      // this.imageUrls = holdsAndImages[0].images;
      // this.holdimageUrl=holdsAndImages
    })
  }


  getSummaryDetailsTable(gridDate){

    this.holdCleaningReportService.getSummaryRemarkTable(this.voyageIdHold,this.vesselId,gridDate).subscribe(res=>{
      this.sumaryDetailsTableHolds=res
    })
    
//  this.sumaryDetailsTableHolds=   [
//       {
//         "HoldStagesName": "Hold1",
//         "PreviousCargoName": "Coal",
//         "NextCargoName": "Grain",
//         "ReportDate": null,
//         "ReportId": 7,
//         "PreviousCargoStagesList": [
//           {
//             "PreviousCargo": "Dry Cleaning",
//             "Status": "In Progress"
//           },
//           {
//             "PreviousCargo": "Hold Block Dried",
//             "Status": "In Progress"
//           },
//           {
//             "PreviousCargo": "Limewash Dried",
//             "Status": "In Progress"
//           }
//         ],
//         "NextCargoStagesList": [
//           {
//             "LoadToCargo": "Chemicals Application",
//             "Status": "Planning"
//           },
//           {
//             "LoadToCargo": "No Organic Material On Deck",
//             "Status": "Planning"
//           },
//           {
//             "LoadToCargo": "Hold Block Dried",
//             "Status": "Planning"
//           },
//           {
//             "LoadToCargo": "Apply to 6m",
//             "Status": "Planning"
//           }
//         ]
//       },
//       {
//         "HoldStagesName": "Hold2",
//         "PreviousCargoName": "Coal",
//         "NextCargoName": "HMC",
//         "ReportDate": null,
//         "ReportId": 7,
//         "PreviousCargoStagesList": [
//           {
//             "PreviousCargo": "Dry Cleaning",
//             "Status": "Completed"
//           },
//           {
//             "PreviousCargo": "No Previous Cargo Residue",
//             "Status": "Completed"
//           },
//           {
//             "PreviousCargo": "Apply to 6m",
//             "Status": "Completed"
//           }
//         ],
//         "NextCargoStagesList": [
//           {
//             "LoadToCargo": "Do Not Paint",
//             "Status": "Completed"
//           },
//           {
//             "LoadToCargo": "Tank Top No Loose Rust",
//             "Status": "Completed"
//           }
//         ]
//       }
//     ]
  }
  getHoldCleaningReportsList() {
    this.statusService.getStatusList().subscribe((res: any[]) => {
      // this.status = res;
      if (res.length === 0) {
        this.emptymessage = 'No Record Found'

      }
      setTimeout(() => { this.checkListRecord = true }, 200);
    })
  }









  // deleteDetails(deleteRecord: Status) {
  //   const dialogRef = this.dialogService.open(DynamicDialogComponent, {
  //     context: {
  //       title: "Dynamic Dialog",
  //       message: 'Are You Sure Want To Delete',
  //       buttons: [
  //         { label: 'Cancel', value: false, status: 'basic' },
  //         { label: 'Delete', value: true, status: 'danger' },
  //       ],
  //     },
  //   });
  //   ////debugger;
  //   dialogRef.onClose.subscribe((result: any) => {
  //     if (result === true) {
  //       // User clicked "Yes", perform the desired action
  //       this.statusService.deleteStatus(deleteRecord).subscribe(res => {
  //         if (res == true) {
  //           this.getstatusListRecords();
  //           this.showPop('error', 'Delete', 'Record Deleted');
  //         }
  //       })
  //     } else if (result === false) {
  //       // User clicked "No", perform a different action
  //     } else {
  //       // Handle other possible button values or dialog closure
  //     }
  //   });

  // }

  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }

  onTabChange(selectTab) {
    debugger;
    this.activeIndex = selectTab.index;
    this.activeTabHold = this.scrollableTabs[this.activeIndex].Holds

    this.holdCleaningReportService.getHoldRemarksList(this.activeTabHold, this.voyageID).subscribe((res:any) => {
      debugger;
      if (res !== null) {
        this.remarksDetails = res
        this.holdimageUrl = res.map(item => ({
          "Photos": this.processPhotos(item["Photos"]),
        }));


        // const images = res[0].Photos.split(',|').slice(1);

        // const holdsAndImages = [];
  
        // for (const item of images) {
        //   if (item) {
        //     const parts = item.split(',');
        //     const holdLabel = parts[0];
        //     const images = parts.slice(1);
        //     holdsAndImages.push({ "label": holdLabel, "images": images });
        //   }
        // }
        // console.log(holdsAndImages[0].images, "usrls")
        // this.holdimageUrl=holdsAndImages

        
      }
      console.log(res, "remarks")
    })
    this.holdGrid();

    console.log('Active Tab Index:', this.activeTabHold);
  }
  changeGrid(getDateGrid) {
    console.log(getDateGrid, this.voyageID, "value of voyage")
    this.holdCleaningReportService.getRemarksGridList(getDateGrid, this.voyageID).subscribe((res: any) => {
      debugger;
      if (res === null) {
        this.emptymessage = 'No Record Found'
        this.holdCleaningReportsData = null
        this.scrollableTabs = null
        this.cols = null
        this.holdStates = null
      } else {
        // this.holdCleaningReportsData = null
        // this.holdCleaningReportsData = res
        // this.scrollableTabs = this.holdCleaningReportsData.NoOfHoldLists
        // this.cols = this.holdCleaningReportsData.CargoStagesList
        // this.holdStates = this.holdCleaningReportsData.HoldCleaningStatusList
        // let percentagedata = this.holdCleaningReportsData.NoOfHoldPercentageList
        // const percentage = percentagedata.map((res) => res.Percentage)
        // this.chartOptions.series = percentage
        let statusList = []
        for (let i = 0; i < res.HoldCleaningDetailsList.length; i++) {
          debugger;
          const holdRecords = res.HoldCleaningDetailsList[i].HoldRecords.split(";")
          let objHoldRecords = Object.assign({}, holdRecords);
          statusList.push(objHoldRecords)
        }
        this.status = statusList
        console.log(this.status, "data of ")
        setTimeout(() => { this.checkListRecord = true }, 200);
      }
    })

  }


  viewImageHold(remarksImages) {
    console.log(remarksImages,"path of images")
    this.dialogService.open(ImageSliderComponent, { context: { selectedItem: remarksImages }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        // this.changeInventoryList('Active');
        // this.showPop('success', 'Success', 'Record Saved');
      }
    });
  }

  async holdGrid() {
    debugger;
    // this.voyageID = selectedVoyage
    await this.holdCleaningReportService.getHoldGridList(this.activeTabHold, this.voyageID, this.vesselId).subscribe((res: any) => {
      debugger;
      if (res === null) {
        this.emptymessage = 'No Record Found'
        this.holdCleaningReportsData = null
        this.scrollableTabs = null
        this.colHolds = null
        this.holdStates = null
      } else {
        // this.holdPercentage = res[0].HoldPercentage
        // this.holdCleaningReportsData = null
        // this.holdCleaningReportsData = res
        // this.scrollableTabs = this.holdCleaningReportsData.NoOfHoldLists
        // this.holdStates = this.holdCleaningReportsData.HoldCleaningStatusList
        // let percentagedata = this.holdCleaningReportsData.NoOfHoldPercentageList
        // const percentage = percentagedata.map((res) => res.Percentage)
        // this.chartOptions.series = percentage
        const statusList = []
        const holdHeader = []
        // for (let i = 0; i < res.length; i++) {
        //   debugger;
        //   const headerHold = res[i].CargoStagesList
        //   const holdRecords = res[i].HoldDetailList.HoldRecords.split(";")
        //   let objHoldRecords = Object.assign({}, holdRecords);
        //   holdHeader.push(headerHold)
        //   statusList.push([objHoldRecords])
        // }
        this.colHolds = holdHeader;
        this.statusHoldGrid = res



        console.log(this.statusHoldGrid, "data of ")
        setTimeout(() => { this.checkListRecord = true }, 200);
      }
    })

    // await this.holdCleaningReportService.getSummaryRemarksList(selectedVoyage).subscribe(res => {
    //   this.summaryRemarks = res
    //   const images=res[0].Photos.split(',').slice(1);
    //   console.log( images,"usrls")
    //   this.imageUrls=images
    // })
  }

  getVoyageList() {
    this.holdCleaningReportService.getVoyageNumberList().subscribe((res: any) => {
      console.log(res, 'rssRecode')
      this.voyageListDataDropDown = res
    }
    )
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }


  processPhotos(photos) {
    if (!photos) return []; 
    // Return an empty array for null or undefined
    // Remove "Hold" and split the filenames into an array
    const filenames = photos.replace(/Hold\d+,/g, '').split(',');
  
    // Filter out empty strings
    return filenames.filter(filename => filename.trim() !== '');
  }


  summaryPhotos(photos) {
    if (!photos) return []; 
    // Return an empty array for null or undefined
  
    // Remove "Hold" and split the filenames into an array
    const filenames = photos.split('|')
      .map(chunk => chunk.replace(/Hold\d+,/g, ''))
      .flatMap(chunk => chunk.split(','))
      .filter(filename => filename.trim() !== '');
  
    return filenames;
  }

}
