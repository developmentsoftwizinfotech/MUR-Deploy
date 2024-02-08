import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import {  Requisition } from '@app-pages/inventory/inventory';
import { RequisitionList } from './add-requisition/customer';
@Injectable({
  providedIn: 'root'
})
export class RequisitionService {

  RequisitionUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  // addRequisitionDetail(RequisitionData: Requisition) {
  //   //debugger
  //   return this.http.post(this.RequisitionUrl + 'InsertRequisition', RequisitionData)
  // }
  // http://192.168.29.210/MUR.API/CreateRequisition
  addRequisitionDetail(RequisitionData: any) {
    debugger;
    console.log(RequisitionData,"api data")
    return this.http.post(this.RequisitionUrl + 'CreateRequisition', RequisitionData)
  }


  // updateRequisitionDetail(RequisitionData: Requisition) {
  //   ////debugger;
  //   return this.http.put(this.RequisitionUrl + 'UpdateRequisition', RequisitionData)
  // }
  updateRequisitionDetail(RequisitionData: any) {
    debugger;
    ////debugger;
    // return this.http.put(this.RequisitionUrl + 'UpdateRequisitionWithEquipment', RequisitionData)
    return this.http.put(this.RequisitionUrl + 'UpdateRequisitionWithEquipment', RequisitionData)
  }
  updateVendorRequisitionDetail(RequisitionData: any,selectedAction) {
    debugger;
    ////debugger;
    // return this.http.put(this.RequisitionUrl + 'UpdateRequisitionWithEquipment', RequisitionData)
    return this.http.put(this.RequisitionUrl + `VendorOnGoing?Actions=${selectedAction}`, RequisitionData)
  }
  deleteRequisition(RequisitionData: Requisition) {
    ////debugger;
    return this.http.delete(this.RequisitionUrl + 'DeleteRequisition/' + RequisitionData.RequisitionId)
  }
  // getRequisitionList() {
  //   //debugger
  //   return this.http.get(this.RequisitionUrl + 'RequisitionList')
  // }
  getRequisitionList(filter) {
    //debugger
    return this.http.get(this.RequisitionUrl + `FilterByRequisition?filter=${filter}`)
  }
  getRequisitionByVendorList(filter) {
    //debugger
    return this.http.get(this.RequisitionUrl + `FilterByVendor?filter=${filter}`)
  }
  getVendorLoginList(vendorId,filter) {
    //debugger
    return this.http.get(this.RequisitionUrl + `VendorLoginList?vId=${vendorId}&filter=${filter}`)
  }
  getEquipmentMakerList(categoryId) {
    //debugger
    return this.http.get(this.RequisitionUrl + `EquipmentMaker/${categoryId}`)
  }

  getFixtureList(fixture: any) {
    //debugger
    return this.http.get(this.RequisitionUrl + 'FixtureList/' + fixture)
  }

  getRequisitionManagementList(){
    return this.http.get(this.RequisitionUrl + 'RequisitionManagementList')
  }


  getEditRequisitionWithEquipmentID(RequisitionId){
    return this.http.get(this.RequisitionUrl + `EditRequisitionWithEquipment?id=${RequisitionId}` )
  }
  getVendorStatusList(){
    return this.http.get(this.RequisitionUrl + `VendorStatusList` )
  }
  getProductsData() {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1001',
        name: 'Black Watch',
        code: 'nvklal433',
        description: 'Product Description',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
      },
      {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1004',
        code: 'h456wer53',
        name: 'Bracelet',
        description: 'Product Description',
        image: 'bracelet.jpg',
        price: 15,
        category: 'Accessories',
        quantity: 73,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1005',
        code: 'av2231fwg',
        name: 'Brown Purse',
        description: 'Product Description',
        image: 'brown-purse.jpg',
        price: 120,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      },
      {
        id: '1006',
        code: 'bib36pfvm',
        name: 'Chakra Bracelet',
        description: 'Product Description',
        image: 'chakra-bracelet.jpg',
        price: 32,
        category: 'Accessories',
        quantity: 5,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
      },
      {
        id: '1007',
        code: 'mbvjkgip5',
        name: 'Galaxy Earrings',
        description: 'Product Description',
        image: 'galaxy-earrings.jpg',
        price: 34,
        category: 'Accessories',
        quantity: 23,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1008',
        code: 'vbb124btr',
        name: 'Game Controller',
        description: 'Product Description',
        image: 'game-controller.jpg',
        price: 99,
        category: 'Electronics',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 4
      },
      {
        id: '1009',
        code: 'cm230f032',
        name: 'Gaming Set',
        description: 'Product Description',
        image: 'gaming-set.jpg',
        price: 299,
        category: 'Electronics',
        quantity: 63,
        inventoryStatus: 'INSTOCK',
        rating: 3
      },
      {
        id: '1010',
        code: 'plb34234v',
        name: 'Gold Phone Case',
        description: 'Product Description',
        image: 'gold-phone-case.jpg',
        price: 24,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      },
      {
        id: '1011',
        code: '4920nnc2d',
        name: 'Green Earbuds',
        description: 'Product Description',
        image: 'green-earbuds.jpg',
        price: 89,
        category: 'Electronics',
        quantity: 23,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1012',
        code: '250vm23cc',
        name: 'Green T-Shirt',
        description: 'Product Description',
        image: 'green-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 74,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1013',
        code: 'fldsmn31b',
        name: 'Grey T-Shirt',
        description: 'Product Description',
        image: 'grey-t-shirt.jpg',
        price: 48,
        category: 'Clothing',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 3
      },
      {
        id: '1014',
        code: 'waas1x2as',
        name: 'Headphones',
        description: 'Product Description',
        image: 'headphones.jpg',
        price: 175,
        category: 'Electronics',
        quantity: 8,
        inventoryStatus: 'LOWSTOCK',
        rating: 5
      },
      {
        id: '1015',
        code: 'vb34btbg5',
        name: 'Light Green T-Shirt',
        description: 'Product Description',
        image: 'light-green-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 34,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1016',
        code: 'k8l6j58jl',
        name: 'Lime Band',
        description: 'Product Description',
        image: 'lime-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 12,
        inventoryStatus: 'INSTOCK',
        rating: 3
      },
      {
        id: '1017',
        code: 'v435nn85n',
        name: 'Mini Speakers',
        description: 'Product Description',
        image: 'mini-speakers.jpg',
        price: 85,
        category: 'Clothing',
        quantity: 42,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1018',
        code: '09zx9c0zc',
        name: 'Painted Phone Case',
        description: 'Product Description',
        image: 'painted-phone-case.jpg',
        price: 56,
        category: 'Accessories',
        quantity: 41,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1019',
        code: 'mnb5mb2m5',
        name: 'Pink Band',
        description: 'Product Description',
        image: 'pink-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 63,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1020',
        code: 'r23fwf2w3',
        name: 'Pink Purse',
        description: 'Product Description',
        image: 'pink-purse.jpg',
        price: 110,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      },
      {
        id: '1021',
        code: 'pxpzczo23',
        name: 'Purple Band',
        description: 'Product Description',
        image: 'purple-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 6,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
      },
      {
        id: '1022',
        code: '2c42cb5cb',
        name: 'Purple Gemstone Necklace',
        description: 'Product Description',
        image: 'purple-gemstone-necklace.jpg',
        price: 45,
        category: 'Accessories',
        quantity: 62,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1023',
        code: '5k43kkk23',
        name: 'Purple T-Shirt',
        description: 'Product Description',
        image: 'purple-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 5
      },
      {
        id: '1024',
        code: 'lm2tny2k4',
        name: 'Shoes',
        description: 'Product Description',
        image: 'shoes.jpg',
        price: 64,
        category: 'Clothing',
        quantity: 0,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1025',
        code: 'nbm5mv45n',
        name: 'Sneakers',
        description: 'Product Description',
        image: 'sneakers.jpg',
        price: 78,
        category: 'Clothing',
        quantity: 52,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1026',
        code: 'zx23zc42c',
        name: 'Teal T-Shirt',
        description: 'Product Description',
        image: 'teal-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 3,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
      },
      {
        id: '1027',
        code: 'acvx872gc',
        name: 'Yellow Earbuds',
        description: 'Product Description',
        image: 'yellow-earbuds.jpg',
        price: 89,
        category: 'Electronics',
        quantity: 35,
        inventoryStatus: 'INSTOCK',
        rating: 3
      },
      {
        id: '1028',
        code: 'tx125ck42',
        name: 'Yoga Mat',
        description: 'Product Description',
        image: 'yoga-mat.jpg',
        price: 20,
        category: 'Fitness',
        quantity: 15,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1029',
        code: 'gwuby345v',
        name: 'Yoga Set',
        description: 'Product Description',
        image: 'yoga-set.jpg',
        price: 20,
        category: 'Fitness',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 8
      }
    ];
  }

  getProductsWithOrdersData() {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        orders: [
          {
            id: '1000-0',
            productCode: 'f230fh0g3',
            date: '2020-09-13',
            amount: 65,
            quantity: 1,
            customer: 'David James',
            status: 'PENDING'
          },
          {
            id: '1000-1',
            productCode: 'f230fh0g3',
            date: '2020-05-14',
            amount: 130,
            quantity: 2,
            customer: 'Leon Rodrigues',
            status: 'DELIVERED'
          },
          {
            id: '1000-2',
            productCode: 'f230fh0g3',
            date: '2019-01-04',
            amount: 65,
            quantity: 1,
            customer: 'Juan Alejandro',
            status: 'RETURNED'
          },
          {
            id: '1000-3',
            productCode: 'f230fh0g3',
            date: '2020-09-13',
            amount: 195,
            quantity: 3,
            customer: 'Claire Morrow',
            status: 'CANCELLED'
          }
        ]
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'INSTOCK',
        rating: 4,
        orders: [
          {
            id: '1001-0',
            productCode: 'nvklal433',
            date: '2020-05-14',
            amount: 72,
            quantity: 1,
            customer: 'Maisha Jefferson',
            status: 'DELIVERED'
          },
          {
            id: '1001-1',
            productCode: 'nvklal433',
            date: '2020-02-28',
            amount: 144,
            quantity: 2,
            customer: 'Octavia Murillo',
            status: 'PENDING'
          }
        ]
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
        orders: [
          {
            id: '1002-0',
            productCode: 'zz21cz3c1',
            date: '2020-07-05',
            amount: 79,
            quantity: 1,
            customer: 'Stacey Leja',
            status: 'DELIVERED'
          },
          {
            id: '1002-1',
            productCode: 'zz21cz3c1',
            date: '2020-02-06',
            amount: 79,
            quantity: 1,
            customer: 'Ashley Wickens',
            status: 'DELIVERED'
          }
        ]
      },
      {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        orders: []
      },
      {
        id: '1004',
        code: 'h456wer53',
        name: 'Bracelet',
        description: 'Product Description',
        image: 'bracelet.jpg',
        price: 15,
        category: 'Accessories',
        quantity: 73,
        inventoryStatus: 'INSTOCK',
        rating: 4,
        orders: [
          {
            id: '1004-0',
            productCode: 'h456wer53',
            date: '2020-09-05',
            amount: 60,
            quantity: 4,
            customer: 'Mayumi Misaki',
            status: 'PENDING'
          },
          {
            id: '1004-1',
            productCode: 'h456wer53',
            date: '2019-04-16',
            amount: 2,
            quantity: 30,
            customer: 'Francesco Salvatore',
            status: 'DELIVERED'
          }
        ]
      },
      {
        id: '1005',
        code: 'av2231fwg',
        name: 'Brown Purse',
        description: 'Product Description',
        image: 'brown-purse.jpg',
        price: 120,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
        orders: [
          {
            id: '1005-0',
            productCode: 'av2231fwg',
            date: '2020-01-25',
            amount: 120,
            quantity: 1,
            customer: 'Isabel Sinclair',
            status: 'RETURNED'
          },
          {
            id: '1005-1',
            productCode: 'av2231fwg',
            date: '2019-03-12',
            amount: 240,
            quantity: 2,
            customer: 'Lionel Clifford',
            status: 'DELIVERED'
          },
          {
            id: '1005-2',
            productCode: 'av2231fwg',
            date: '2019-05-05',
            amount: 120,
            quantity: 1,
            customer: 'Cody Chavez',
            status: 'DELIVERED'
          }
        ]
      },
      {
        id: '1006',
        code: 'bib36pfvm',
        name: 'Chakra Bracelet',
        description: 'Product Description',
        image: 'chakra-bracelet.jpg',
        price: 32,
        category: 'Accessories',
        quantity: 5,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
        orders: [
          {
            id: '1006-0',
            productCode: 'bib36pfvm',
            date: '2020-02-24',
            amount: 32,
            quantity: 1,
            customer: 'Arvin Darci',
            status: 'DELIVERED'
          },
          {
            id: '1006-1',
            productCode: 'bib36pfvm',
            date: '2020-01-14',
            amount: 64,
            quantity: 2,
            customer: 'Izzy Jones',
            status: 'PENDING'
          }
        ]
      },
      {
        id: '1007',
        code: 'mbvjkgip5',
        name: 'Galaxy Earrings',
        description: 'Product Description',
        image: 'galaxy-earrings.jpg',
        price: 34,
        category: 'Accessories',
        quantity: 23,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        orders: [
          {
            id: '1007-0',
            productCode: 'mbvjkgip5',
            date: '2020-06-19',
            amount: 34,
            quantity: 1,
            customer: 'Jennifer Smith',
            status: 'DELIVERED'
          }
        ]
      },
      {
        id: '1008',
        code: 'vbb124btr',
        name: 'Game Controller',
        description: 'Product Description',
        image: 'game-controller.jpg',
        price: 99,
        category: 'Electronics',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 4,
        orders: [
          {
            id: '1008-0',
            productCode: 'vbb124btr',
            date: '2020-01-05',
            amount: 99,
            quantity: 1,
            customer: 'Jeanfrancois David',
            status: 'DELIVERED'
          },
          {
            id: '1008-1',
            productCode: 'vbb124btr',
            date: '2020-01-19',
            amount: 198,
            quantity: 2,
            customer: 'Ivar Greenwood',
            status: 'RETURNED'
          }
        ]
      },
      {
        id: '1009',
        code: 'cm230f032',
        name: 'Gaming Set',
        description: 'Product Description',
        image: 'gaming-set.jpg',
        price: 299,
        category: 'Electronics',
        quantity: 63,
        inventoryStatus: 'INSTOCK',
        rating: 3,
        orders: [
          {
            id: '1009-0',
            productCode: 'cm230f032',
            date: '2020-06-24',
            amount: 299,
            quantity: 1,
            customer: 'Kadeem Mujtaba',
            status: 'PENDING'
          },
          {
            id: '1009-1',
            productCode: 'cm230f032',
            date: '2020-05-11',
            amount: 299,
            quantity: 1,
            customer: 'Ashley Wickens',
            status: 'DELIVERED'
          },
          {
            id: '1009-2',
            productCode: 'cm230f032',
            date: '2019-02-07',
            amount: 299,
            quantity: 1,
            customer: 'Julie Johnson',
            status: 'DELIVERED'
          },
          {
            id: '1009-3',
            productCode: 'cm230f032',
            date: '2020-04-26',
            amount: 299,
            quantity: 1,
            customer: 'Tony Costa',
            status: 'CANCELLED'
          }
        ]
      },



    ];
  }
  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 2));
  }

  returnjsondataMini(){
    return Promise.resolve(this.returnjsondata());

  }
  returnjsondata(){
    return  [
      {
        "RequisitionId": 120,
        "VendorId": 1002,
        "VesselId": 10,
        "PortId": 112,
        "SupplyDate": "Date",
        "MURFixtureNo": 987561,
        "TypeOfSupplyId": 12,
        "VendorName": "Vendor Demo",
        "VesselName": "Vessel Demo",
        "PortName": "Mumbai",
        "SupplyTypeName": "XYZ",
        "CreatedDate": "Date",
        "UpdatedDate": "Date",
        "DeletedDate": "Date",
        "Active": true,
        "Fixture": "ABC123",
        "EquipmentCategoryList": [
          {
            "EquipmentCategoryId": 1002,
            "EquipmentCategoryName": "Paint",
            "Equipmentlist": [
              {
                "EquipmentId": 1,
                "MinOrderQty": 20,
                "EquipmentName": "Chemical 123"
              },
              {
                "EquipmentId": 2,
                "MinOrderQty": 10,
                "EquipmentName": "Chemical XYZ"
              },
              {
                "EquipmentId": 3,
                "MinOrderQty": 40,
                "EquipmentName": "Chemical ABC"
              }
            ]
          },

          {
            "EquipmentCategoryId": 1002,
            "EquipmentCategoryName": "Paint",
            "Equipmentlist": [
              {
                "EquipmentId": 1,
                "MinOrderQty": 20,
                "EquipmentName": "Chemical 123"
              },
              {
                "EquipmentId": 2,
                "MinOrderQty": 10,
                "EquipmentName": "Chemical XYZ"
              },
              {
                "EquipmentId": 3,
                "MinOrderQty": 40,
                "EquipmentName": "Chemical ABC"
              }
            ]
          }
        ]
      }
    ]

  }




testdata(){
  return [
    {
      "RequisitionId": null,
      "VendorId": 0,
      "VesselId": 0,
      "PortId": 0,
      "SupplyDate": "0001-01-01T00:00:00",
      "MURFixtureNo": 0,
      "TypeOfSupplyId": 0,
      "CreatedDate": "0001-01-01T00:00:00",
      "UpdatedDate": null,
      "DeletedDate": null,
      "Active": false,
      "VendorName": null,
      "VesselName": null,
      "PortName": null,
      "SupplyTypeName": null,
      "Fixture": null,
      "EquipmentCategoryId": 0,
      "EquipmentCategoryName": null,
      "Equipmentlist": null,
      "EquipmentCategorylist": [
        {
          "EquipmentCategoryId": 9010,
          "EquipmentCategoryName": "PPE",
          "Equipmentlist": [
            {
              "EquipmentId": 5008,
              "UnitName": "Units",
              "MinOrderQty": 100,
              "EquipmentName": "Face Mask"
            }
          ]
        },
        {
          "EquipmentCategoryId": 9011,
          "EquipmentCategoryName": "Chemicals",
          "Equipmentlist": [
            {
              "EquipmentId": 5009,
              "UnitName": "KGS",
              "MinOrderQty": 12345,
              "EquipmentName": "Cement Remover"
            }
          ]
        },
        {
          "EquipmentCategoryId": 9012,
          "EquipmentCategoryName": "Consumables",
          "Equipmentlist": [
            {
              "EquipmentId": 5010,
              "UnitName": "Units",
              "MinOrderQty": 4564,
              "EquipmentName": "Aluminium Poles"
            }
          ]
        },
        {
          "EquipmentCategoryId": 9011,
          "EquipmentCategoryName": "Chemicals",
          "Equipmentlist": [
            {
              "EquipmentId": 5011,
              "UnitName": "KGS",
              "MinOrderQty": 3123,
              "EquipmentName": "Alkaline"
            }
          ]
        },
        {
          "EquipmentCategoryId": 9013,
          "EquipmentCategoryName": "Equipment",
          "Equipmentlist": [
            {
              "EquipmentId": 5012,
              "UnitName": "KGS",
              "MinOrderQty": 3244,
              "EquipmentName": "Submersible Pump & Accessories"
            }
          ]
        },
        {
          "EquipmentCategoryId": 9009,
          "EquipmentCategoryName": "Paint & Chemicals",
          "Equipmentlist": [
            {
              "EquipmentId": 5013,
              "UnitName": "LTS",
              "MinOrderQty": 23343,
              "EquipmentName": "Blue"
            }
          ]
        },
        {
          "EquipmentCategoryId": 9009,
          "EquipmentCategoryName": "Paint & Chemicals",
          "Equipmentlist": [
            {
              "EquipmentId": 6008,
              "UnitName": "LTS",
              "MinOrderQty": 20,
              "EquipmentName": "Chemical"
            }
          ]
        }
      ]
    }
  ]
}

}



