
import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Vendor } from '@app-pages/inventory/inventory';

@Component({
  selector: 'ngx-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.scss']
})
export class ViewVendorComponent implements OnInit  {
  title: string = "Details";
  selectedItem: Vendor;

 
   
    
  
     
      constructor(protected dialogRef: NbDialogRef<ViewVendorComponent>){
    
      }
      ngOnInit(): void {
     
      }
      close() {
        this.dialogRef.close();
      }
     
    }
    
