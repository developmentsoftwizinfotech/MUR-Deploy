import { Component, OnInit } from '@angular/core';
import { Voyage } from '@app-pages/voyage/voyage-list/voyage';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-view-voyage',
  templateUrl: './view-voyage.component.html',
  styleUrls: ['./view-voyage.component.scss']
})
export class ViewVoyageComponent implements OnInit {
  selectedItem: any;
  dialogVisible: boolean = true;
  constructor(protected dialogRef: NbDialogRef<ViewVoyageComponent>){

  }
  ngOnInit(): void {
    this.dialogVisible=true
    console.log(this.selectedItem,"nilesh")
    // selectedItem
  }
  close() {
    this.dialogRef.close();
  }

  showDialog(){
    this.dialogVisible= true;
  }

}
