import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VesselService } from '@app-pages/settings/vessel/vessel.service';
import { VoyageService } from '@app-pages/voyage/voyage-list/voyage.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'ngx-merge-voyage',
  templateUrl: './merge-voyage.component.html',
  styleUrls: ['./merge-voyage.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class MergeVoyageComponent implements OnInit {

  voyageWeb: any;
  voyageDesktop: any;
  selectedVoyageWeb!: any;
  selectedVoyageDesktop!: any;
  vesselDropdown: any;
  emptymessage2: string;
  emptymessage1: string;
  vesselSelected:any;
  constructor(private router: Router, private vesselService: VesselService, private voyageService: VoyageService, private messageService: MessageService) {

  }
  ngOnInit(): void {
    this.getVesselListRecords(1, 100, "")
    setTimeout(() => {
      this.emptymessage1 = "Select Vessel Name"
      this.emptymessage2 = "Select Vessel Name"
    }, 200);

  }
  backToList() {
    this.router.navigate(['/pages/voyage/voyage-merge-list']);
  }
  getVesselListRecords(cPage, nRows, filter) {
    this.vesselService.getVesselList(cPage, nRows, filter).subscribe((res: any) => {
      this.vesselDropdown = res.VesselData;
      console.log(this.vesselDropdown, 'vesselDropdown')
    })
  }
  mergeVoyage() {
    if (this.selectedVoyageDesktop !== undefined) {
      const voyageWebID = this.selectedVoyageWeb?.VoyageId
      const voyageDestopID = this.selectedVoyageDesktop?.VoyageId
      this.voyageService.getMergedVoyageList(voyageWebID, voyageDestopID).subscribe(res => {
        if (res) {
          console.log(res, voyageWebID, voyageDestopID, "code")
          this.showPop('success', 'Success', 'Record Saved');
          // this.getVoyageDesktopList(vesselId);
          // this.getVoyageWebOfficeList(vesselId);
          this.vesselNameget(this.vesselSelected)
        }


      })
    } else {
      this.showPop('error', 'Alert', 'Select Voyage For Match')

    }

  }

  vesselNameget(selectVessel) {
    this.vesselSelected=selectVessel
    console.log(selectVessel, 'sekjksjdf');
    if(!selectVessel){
      this.voyageWeb=null;
      this.voyageDesktop=null;
    }else{
      this.getVoyageWebOfficeList(selectVessel)
      this.getVoyageDesktopList(selectVessel)
    }
  }


  async getVoyageWebOfficeList(vesselId) {
    await this.voyageService.getVoyageWebOfficeList(vesselId).subscribe((res: any) => {

      if (res.length === 0) {
        console.log('null')
        this.emptymessage1 = 'Record Not Found'
        this.voyageWeb = null
      } else {
        this.voyageWeb = res
      }

    })
  }
  async getVoyageDesktopList(vesselId) {
    await this.voyageService.getVoyageDesktopList(vesselId).subscribe((res: any) => {

      if (res.length === 0) {
        this.voyageDesktop = null
        this.emptymessage2 = 'Record Not Found'
      } else {
        this.voyageDesktop = res
      }
    })
  }
  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }
}
