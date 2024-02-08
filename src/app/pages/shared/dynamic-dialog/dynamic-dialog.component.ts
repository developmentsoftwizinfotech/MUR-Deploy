import { Component,Output  } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: ['./dynamic-dialog.component.scss']
})
export class DynamicDialogComponent {
 title: string;
  message: string;
  buttons: { label: string, value: any, status?: string }[];
  constructor(private dialogRef: NbDialogRef<DynamicDialogComponent>) {}
  closeDialog(result: any) {
    this.dialogRef.close(result);
  }
}
