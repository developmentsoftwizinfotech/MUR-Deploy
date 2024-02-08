
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voyage } from './voyage';
import { environment } from '@env/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class VoyageService {


  voyageUrl: string = environment.baseApiUrl;
  voyageDataReports:string=environment.baseApplicationUrl;


  constructor(private http: HttpClient) { }
  addVoyageDetail(voyageData: Voyage) {
    return this.http.post(this.voyageUrl + 'InsertVoyage', voyageData)
  }
  updateVoyageDetail(voyageData: Voyage) {
    ////debugger;
    return this.http.put(this.voyageUrl + 'UpdateVoyage', voyageData)
  }
  deleteVoyage(voyageData: Voyage) {
    ////debugger;
    return this.http.delete(this.voyageUrl + 'DeleteVoyage/' + voyageData.VoyageId)
  }
  getCompletedList(cPage, nRows, filter,columnFilter,orderBy) {
    // &filter=${filter/}
    return this.http.get(this.voyageUrl + `FilterByCompleted?c=${cPage}&p=${nRows}&filter=${filter}&filterColumn=${columnFilter}&orderBy=${orderBy}`)
  }
  getCommencedList(cPage, nRows, filter,columnFilter,orderBy) {
    return this.http.get(this.voyageUrl + `FilterByStatus?c=${cPage}&p=${nRows}&filter=${filter}&filterColumn=${columnFilter}&orderBy=${orderBy}`)
  }
  getVoyageList() {
    return this.http.get(this.voyageUrl + 'VoyageList')
  }








  Voyage: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  productNames: string[] = [
    "Bamboo Watch",
    "Black Watch",
    "Blue Band",
    "Blue T-Shirt",
    "Bracelet",
    "Brown Purse",
    "Chakra Bracelet",
    "Galaxy Earrings",
    "Game Controller",
    "Gaming Set",
    "Gold Phone Case",
    "Green Earbuds",
    "Green T-Shirt",
    "Grey T-Shirt",
    "Headphones",
    "Light Green T-Shirt",
    "Lime Band",
    "Mini Speakers",
    "Painted Phone Case",
    "Pink Band",
    "Pink Purse",
    "Purple Band",
    "Purple Gemstone Necklace",
    "Purple T-Shirt",
    "Shoes",
    "Sneakers",
    "Teal T-Shirt",
    "Yellow Earbuds",
    "Yoga Mat",
    "Yoga Set",
  ];



  getProductsSmall() {
    return this.http.get<any>('assets/products-small.json')
      .toPromise()
      .then(res => <Voyage[]>res.data)
      .then(data => { return data; });
  }

  getProducts() {
    return this.http.get<any>('assets/products.json')
      .toPromise()
      .then(res => <Voyage[]>res.data)
      .then(data => { return data; });
  }

  getProductsWithOrdersSmall() {
    return this.http.get<any>('assets/products-orders-small.json')
      .toPromise()
      .then(res => <Voyage[]>res.data)
      .then(data => { return data; });
  }

  //   generatePrduct(): Voyage {
  //       const product: Voyage =  {
  //           id: this.generateId(),
  //           name: this.generateName(),
  //           description: "Product Description",
  //           price: this.generatePrice(),
  //           quantity: this.generateQuantity(),
  //           category: "Product Category",
  //           inventoryVoyage: this.generateVoyage(),
  //           rating: this.generateRating()
  //       };

  //       product.image = product.name.toLocaleLowerCase().split(/[ ,]+/).join('-')+".jpg";;
  //       return product;
  //   }

  generateId() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  generateName() {
    return this.productNames[Math.floor(Math.random() * Math.floor(30))];
  }

  generatePrice() {
    return Math.floor(Math.random() * Math.floor(299) + 1);
  }

  generateQuantity() {
    return Math.floor(Math.random() * Math.floor(75) + 1);
  }

  generateVoyage() {
    return this.Voyage[Math.floor(Math.random() * Math.floor(3))];
  }

  generateRating() {
    return Math.floor(Math.random() * Math.floor(5) + 1);
  }




  // export interface Empty {
  //     LTCMURId:    number;
  //     LTCMURName:  string;
  //     CreatedDate: Date;
  //     UpdatedDate: Date;
  //     DeletedDate: Date;
  //     Active:      boolean;
  // }


  getLtcList() {
    return this.http.get(this.voyageUrl + 'LTCMURList')
  }
  getOwnerNameList() {
    return this.http.get(this.voyageUrl + 'OwnerList')
  }


  getPlanStatusList() {
    return this.http.get(this.voyageUrl + 'PlanStatusList')
  }

  getTradeAreaList() {
    return this.http.get(this.voyageUrl + 'TradeAreaList')
  }


  getHoldPassList() {
    return this.http.get(this.voyageUrl + 'HoldPassList')
  }
  getAllVoyageDataList() {
    return this.http.get(this.voyageDataReports + `v1/imos/reports/Hold%20Cleaning?apiToken=bf775b98e7850ad0a1186c9ef81155aa79e3df1024ce839be5e76280239225e2&filter=VesselName=="AFRICAN%20ARROW"`)
  }

  getMergedVoyageList(webId,DesktopId){
    return this.http.delete(this.voyageUrl + `MergedVoyage?voyageWebId=${webId}&voyageDesktopId=${DesktopId}`)
  }

  getVoyageWebOfficeList(vesselId:number){
    return this.http.get(this.voyageUrl + `VoyageWeb?vesselName=${vesselId}`)
  }
  getVoyageDesktopList(vesselId:number){
    return this.http.get(this.voyageUrl + `VoyageDesktop?vesselName=${vesselId}`)
  }
  getMergedList(){
    return this.http.get(this.voyageUrl + 'MergedVoyageList')
  }
}
