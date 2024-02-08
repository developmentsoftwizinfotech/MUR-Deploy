import { Component } from '@angular/core';
import { Circular } from '@app-pages/circular/circular';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-view-circular',
  templateUrl: './view-circular.component.html',
  styleUrls: ['./view-circular.component.scss']
})
export class ViewCircularComponent {
  selectedItem: Circular;
  constructor(protected dialogRef: NbDialogRef<ViewCircularComponent>){
  }
  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }
 }
