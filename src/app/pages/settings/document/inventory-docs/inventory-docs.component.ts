import { Component, OnInit } from '@angular/core';
import { ValidationError } from 'ngx-awesome-uploader';
import { DemoFilePickerAdapter } from '../file-picker.adapter';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-inventory-docs',
  templateUrl: './inventory-docs.component.html',
  styleUrls: ['./inventory-docs.component.scss']
})
export class InventoryDocsComponent {
  activeIndex:number=0;
  dropDownMasterlist:any[];
  public adapter = new DemoFilePickerAdapter(this.http);
  constructor(private http: HttpClient) {}
ngOnInit(): void {
  this.dropDownMasterlist = [
    {
    id : 1,
    name : 'Applicability'
  },
    {
    id : 2,
    name : 'Cargo'
  },
]
}
exportData(select){

}
importData(select){

}
changeDocs(value: string) {
  ////debugger;
  if (value == "Export") {
    this.activeIndex = 1
    // this.voyageService.getCompletedList().subscribe((res: Voyage[]) => {
    //   this.voyageList = res
    //   console.log(res, "voyageList")
    //   if (res == null) {
    //     this.emptymessage = 'No Record Found'
    //   } else {
    //     setTimeout(() => { this.checkListRecord = true }, 200);
    //   }

    // })
  } else {
    this.activeIndex = 0
    // this.voyageService.getCommencedList().subscribe((res: Voyage[]) => {
    //   this.voyageList = res
    //   console.log(res, "voyageList1")

    //   if (res == null) {
    //     this.emptymessage = 'No Record Found'
    //   } else {
    //     setTimeout(() => { this.checkListRecord = true }, 200);
    //   }
    // })
  }
}

public uploadSuccess(event): void {
  console.log(event);
}

public onValidationError(error: ValidationError): void {
  alert(`Validation Error ${error.error} in ${error.file?.name}`);
}
}
