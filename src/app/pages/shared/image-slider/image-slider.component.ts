import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HoldCleaningReportService } from '@app-pages/report/hold-cleaning-reports/hold-cleaning-report.service';
import { NbDialogRef } from '@nebular/theme';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'ngx-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit,AfterViewInit  {
  selectedItem:any;
  carouselId: string = `carousel-${Math.random().toString(36).substr(2, 9)}`;
  $: any;
  imageUrls: string[]= [
    'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0-z5FV1DwTxfuMDXRYIchsKI6J5kJYYka1DqIz93O1SlsocjOXs0FLYi5Tb02tW0ONs&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8YwG87Mq29s81KAJjpOvPVPz7TlzDPfrGn6gaNoyjtLLEI_XP6wfc5j6EqN62QVtkkE&usqp=CAU',
    'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0-z5FV1DwTxfuMDXRYIchsKI6J5kJYYka1DqIz93O1SlsocjOXs0FLYi5Tb02tW0ONs&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8YwG87Mq29s81KAJjpOvPVPz7TlzDPfrGn6gaNoyjtLLEI_XP6wfc5j6EqN62QVtkkE&usqp=CAU'
  ];
  baseImageUrl: string;

  constructor(private sanitizer: DomSanitizer,private dialogRef: NbDialogRef<ImageSliderComponent>,private holdCleaningReportService:HoldCleaningReportService) {}


  closeDialog(result: any) {
    this.dialogRef.close(result);
  }

  ngOnInit(): void {
    this.baseImageUrl = this.holdCleaningReportService.holdCleaningImagesUrl
    this.imageUrls=this.selectedItem

    console.log(this.selectedItem,"value")
  }

  ngAfterViewInit() {
    this.$('#carouselExampleIndicators').carousel();
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}
