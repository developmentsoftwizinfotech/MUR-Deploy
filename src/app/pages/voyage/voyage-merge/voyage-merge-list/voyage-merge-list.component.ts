import { DynamicDialogComponent } from '@app-pages/shared/dynamic-dialog/dynamic-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoyageService } from '@app-pages/voyage/voyage-list/voyage.service';
import { NbDialogService } from '@nebular/theme';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'ngx-voyage-merge-list',
  templateUrl: './voyage-merge-list.component.html',
  styleUrls: ['./voyage-merge-list.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class VoyageMergeListComponent implements OnInit {
  voyageMergeList: any;
  checkListRecord:boolean=true
  emptymessage:any;
  constructor(private router: Router, private voyageService: VoyageService,private messageService: MessageService, private dialogService: NbDialogService) {

  }
  ngOnInit(): void {
    this.getMergeList();
  }
  getMergeList() {
    this.voyageService.getMergedList().subscribe((res:any) => {
      if(res.length===0){
        this.emptymessage = 'No Record Found'
      }else{

        this.voyageMergeList = res
      }
    })
  }
  mergeVoyage() {
    this.router.navigate(['/pages/voyage/merge-voyage']);
  }


  deleteDetails(deleteRecord: any) {
    const dialogRef = this.dialogService.open(DynamicDialogComponent, {
      context: {
        title: "Dynamic Dialog",
        message: 'Are You Sure Want To Delete',
        buttons: [
          { label: 'Cancel', value: false, status: 'basic' },
          { label: 'Delete', value: true, status: 'danger' },
        ],
      },
    });
    ////debugger;
    dialogRef.onClose.subscribe((result: any) => {
      if (result === true) {
        this.voyageService.deleteVoyage(deleteRecord).subscribe(res => {
          ////debugger;
          if (res) {
            this.getMergeList();
            this.showPop('error', 'Delete', 'Record Deleted')
          }
        })
      } else if (result === false) {
      } else {
      }
    });

  }
  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }
}
