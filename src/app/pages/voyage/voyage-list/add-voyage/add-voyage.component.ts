import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { VesselService } from '@app-pages/settings/vessel/vessel.service';
import { Vessel } from '@app-pages/settings/vessel/vessel';
import { StatusService } from '@app-pages/settings/status/status.service';
import { Cargo, CargoList, Charterer, OprType, OprTypeList, Port, PortList, SHA, Status } from '@app-pages/settings/setting';
import { VesselOperator } from '@app-pages/settings/vessel-operator/vessel-operator';
import { VesselOperatorService } from '@app-pages/settings/vessel-operator/vessel-operator.service';
import { ChartererService } from '@app-pages/settings/charterer/charterer.service';
import { OprService } from '@app-pages/settings/opr-type/opr.service';
import { PortService } from '@app-pages/settings/port/port.service';
import { CargoService } from '@app-pages/settings/cargo/cargo.service';
import { ShaService } from '@app-pages/settings/sha/sha.service';
import { VoyageService } from '@app-pages/voyage/voyage-list/voyage.service';
import { HoldPass, LTC, Owner, PlanStatus, TradeArea, Voyage } from '@app-pages/voyage/voyage-list/voyage';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { MessageService, ConfirmationService } from 'primeng/api';
import { root } from 'rxjs/internal-compatibility';


@Component({
  selector: 'ngx-add-voyage',
  templateUrl: './add-voyage.component.html',
  styleUrls: ['./add-voyage.component.scss'],
  providers: [MessageService, ConfirmationService,
    { provide: root, useClass: CustomStateError }
  ]
})
export class AddVoyageComponent implements OnInit {
  nbForm!: FormGroup;
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  fourthForm: FormGroup;

  formTitle: string = "Add"
  statusValue = "Completed"
  selectedItem: Voyage;
  vesselDropdown: Vessel;
  statusDropdown: Status[];
  vesselOperatorDropdown: VesselOperator;
  chartererDropdown: Charterer[];
  oprDropdown: OprType[];
  portDropdown: Port[];
  cargoDropdown: Cargo[];
  shaDropdown: SHA[];
  LtcMurList: LTC;
  PlanStatusList: PlanStatus;
  holdPassList: HoldPass;
  OwnerNameList: Owner;
  TradeAreaList: TradeArea;

  customErrorStateMatcher = new CustomStateError()
  linearMode: boolean = true;
  allData: any;
  dataPick: any;
  selectedRows: any;
  firstCount: number = 1;
  currentPage: number;
  nextCount: number;
  totalRows: number = 0;
  totalCount: number;
  filterTableValue: any;
  vessel: Vessel[];

  constructor(private formBuilder: FormBuilder, private voyageService: VoyageService, private shaService: ShaService, private cargoService: CargoService, private portService: PortService, private oprService: OprService, private chartererService: ChartererService, private vesselOperatorService: VesselOperatorService, private vesselService: VesselService, private statusService: StatusService, protected dialogRef: NbDialogRef<AddVoyageComponent>) {
    //  this.nbForm = this.formBuilder.group({

    //   VoyageId: [''],
    //   LTCMURId: [null, Validators.required],
    //   VesselId: [null, Validators.required],
    //   VoyageCommenceDate: ['', Validators.required],
    //   VesselVoyageCompletedDate: ['', Validators.required],
    //   VesselVoyageCompletingDate: ['', Validators.required],
    //   StatusId: [null, Validators.required],
    //   VesselOperatorId: [null, Validators.required],
    //   ChartererId: [null, Validators.required],
    //   Fixture: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(5), Validators.pattern(/^\S(.*\S)?$/)]],
    //   OprTypeId: [null, Validators.required],
    //   LoadToPortId: [null, Validators.required],
    //   DischargePortId: [null, Validators.required],
    //   CargotoLoadId: [null, Validators.required],
    //   PreviousCargoId: [null, Validators.required],
    //   TCCBudgetUSD: ['', [Validators.required]],
    //   TCCActual: ['', Validators.required],
    //   TCCProvisions: ['', Validators.required],
    //   ITDBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   ITDActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   ITDProvisions: ['', Validators.required],
    //   ITCBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   ITCActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   ITCProvisions: ['', Validators.required],
    //   ITBBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   ITBActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   ITBProvisions: ['', Validators.required],
    //   SCGBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   SCGActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   SCGProvisions: ['', Validators.required],
    //   VendorId: [null, Validators.required],
    //   SHABudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   SHAActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   SHAProvisions: ['', Validators.required],
    //   HCEBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   HCEActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   HCEProvisions: ['', Validators.required],
    //   HCCBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   HCCActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   HCCProvisions: ['', Validators.required],
    //   HCXBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   HCXActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   HCXProvisions: ['', Validators.required],
    //   HCBBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   HCBActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
    //   HCBProvisions: ['', Validators.required],
    //   OwnerId: [null, Validators.required],
    //   TradeAreaId: [null, Validators.required],
    //   VayageNo: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
    //   ITDStatusId: [null, Validators.required],
    //   SCGStatusId: [null, Validators.required],
    //   Remark: [''],
    //   BudgetedDetailsDate: ['', Validators.required],
    //   FinalRemarks: [''],
    //   HoldPassId: [null, Validators.required],

    // },
    //   { validators: this.customErrorStateMatcher.dateRangeValidator('VoyageCommenceDate', 'VesselVoyageCompletedDate') }
    // );


    this.firstForm = this.formBuilder.group({
      VoyageId: [''],
      LTCMURId: [null, Validators.required],
      VesselId: [null, Validators.required],
      VoyageCommenceDate: ['', Validators.required],
      VesselVoyageCompletedDate: ['', Validators.required],
      StatusId: [null, Validators.required],
      TradeAreaId: [null, Validators.required],
      OwnerId: [null, Validators.required],
      VayageNo: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(1)]],
      Fixture: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(5), Validators.pattern(/^\S(.*\S)?$/)]],

    },
      { validators: this.customErrorStateMatcher.dateRangeValidator('VoyageCommenceDate', 'VesselVoyageCompletedDate') }
    );

    this.secondForm = this.formBuilder.group({
      HoldPassId: [null, Validators.required],
      OprTypeId: [null, Validators.required],
      LoadToPort: [null, Validators.required],
      DischargePort: [null, Validators.required],
      CargotoLoad: [null, Validators.required],
      PreviousCargo: [null, Validators.required],
    });

    this.thirdForm = this.formBuilder.group({
      TCCBudgetUSD: ['', [Validators.required]],
      TCCActual: ['', Validators.required],
      TCCProvisions: ['', Validators.required],
      ITDBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      ITDActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      ITDProvisions: ['', Validators.required],
      ITCBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      ITCActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      ITCProvisions: ['', Validators.required],
      ITBBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      ITBActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      ITBProvisions: ['', Validators.required],
      SCGBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      SCGActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      SCGProvisions: ['', Validators.required],
      SHABudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      SHAActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      SHAProvisions: ['', Validators.required],
      HCEBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      HCEActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      HCEProvisions: ['', Validators.required],
      HCCBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      HCCActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      HCCProvisions: ['', Validators.required],
      HCXBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      HCXActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      HCXProvisions: ['', Validators.required],
      HCBBudget: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      HCBActual: ['', [Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]],
      HCBProvisions: ['', Validators.required],
      ITDStatusId: [null, Validators.required],
      SCGStatusId: [null, Validators.required],
    });
    this.fourthForm = this.formBuilder.group({
      VesselVoyageCompletingDate: ['', Validators.required],
      BudgetedDetailsDate: ['' || null],
      Remark: ['', [Validators.maxLength(2000)]],
      FinalRemarks: ['', [Validators.maxLength(2000)]],
    });
  }
  ngOnInit() {
    this.selectedRows = "25"
    this.nextCount = 25;
    this.currentPage = 1;
    this.totalRows = 10
    // this.getLtcList();
    // this.getPlanStatusList();
    // this.getHoldPassList();
    // this. getTradeAreaList();
    // this.getOwnerNameList();
    // VoyageId: [''],
    // , Validators.pattern('^[a-zA-Z0-9]+$')
    this.getVesselListRecords(1, 100, '')
    this.getPortList(1, 100, '')
    this.getOprTypeListRecords(1, 100, '');
    this.getCargoListRecords(1, 100, '')

    this.getAllDropDown();
    this.setFieldVal();
    // this.onSelectStatus(1004)
  }

  getOprTypeListRecords(cPage, nRows, filter) {
    this.oprService.getOprTypeList(cPage, nRows, filter).subscribe((res: OprTypeList) => {
      debugger
      this.oprDropdown = res.OprTypeData
      console.log(this.oprDropdown, 'oprDropdown')
    })
  }

  getCargoListRecords(cPage, nRows, filter) {
    this.cargoService.getCargoList(cPage, nRows, filter).subscribe((res: CargoList) => {
      debugger
      this.cargoDropdown = res.CargoData
      console.log(this.cargoDropdown, 'cargoDropdown')
    })
  }

  getVesselListRecords(cPage, nRows, filter) {
    this.vesselService.getVesselList(cPage, nRows, filter).subscribe((res: any) => {
      this.vesselDropdown = res.VesselData;
      console.log(this.vesselDropdown, 'vesselDropdown')
    })
  }

  getPortList(cPage, nRows, filter) {
    // console.log(filter.target.value,"value")
    this.portService.getPortList(cPage, nRows, filter).subscribe((res: PortList) => {
      this.portDropdown = res.PortData;
      console.log(this.portDropdown, "portDropdown")
    })
  }

  onSelectStatus(statusValue) {
    ////debugger;
    const selectedId = statusValue;
    console.log(this.statusDropdown, "this.statusDropdownthis.statusDropdownthis.statusDropdown")
    const selectedOption = this.statusDropdown.find(option => option.StatusId === selectedId);
    console.log(selectedOption.StatusName, "sdjfhhfdsf vakey of sleet")
    if (selectedOption) {
      const selectedName = selectedOption.StatusName;
      this.statusValue = selectedName;
      if (selectedName.toLowerCase() !== "completed") {
        this.thirdForm.get('TCCActual').setValidators(null);
        this.thirdForm.get('TCCActual').updateValueAndValidity();
        this.thirdForm.get('ITDActual').setValidators(null);
        this.thirdForm.get('ITDActual').updateValueAndValidity();
        this.thirdForm.get('ITCActual').setValidators(null);
        this.thirdForm.get('ITCActual').updateValueAndValidity();
        this.thirdForm.get('ITBActual').setValidators(null);
        this.thirdForm.get('ITBActual').updateValueAndValidity();
        this.thirdForm.get('SCGActual').setValidators(null);
        this.thirdForm.get('SCGActual').updateValueAndValidity();
        this.thirdForm.get('SHAActual').setValidators(null);
        this.thirdForm.get('SHAActual').updateValueAndValidity();
        this.thirdForm.get('HCEActual').setValidators(null);
        this.thirdForm.get('HCEActual').updateValueAndValidity();
        this.thirdForm.get('HCCActual').setValidators(null);
        this.thirdForm.get('HCCActual').updateValueAndValidity();
        this.thirdForm.get('HCXActual').setValidators(null);
        this.thirdForm.get('HCXActual').updateValueAndValidity();
        this.thirdForm.get('HCBActual').setValidators(null);
        this.thirdForm.get('HCBActual').updateValueAndValidity();
      } else {
        this.thirdForm.get('TCCActual').setValidators([Validators.required]);
        this.thirdForm.get('TCCActual').updateValueAndValidity();
        this.thirdForm.get('ITDActual').setValidators([Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
        this.thirdForm.get('ITDActual').updateValueAndValidity();
        this.thirdForm.get('ITCActual').setValidators([Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
        this.thirdForm.get('ITCActual').updateValueAndValidity();
        this.thirdForm.get('ITBActual').setValidators([Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
        this.thirdForm.get('ITBActual').updateValueAndValidity();
        this.thirdForm.get('SCGActual').setValidators([Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
        this.thirdForm.get('SCGActual').updateValueAndValidity();
        this.thirdForm.get('SHAActual').setValidators([Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
        this.thirdForm.get('SHAActual').updateValueAndValidity();
        this.thirdForm.get('HCEActual').setValidators([Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
        this.thirdForm.get('HCEActual').updateValueAndValidity();
        this.thirdForm.get('HCCActual').setValidators([Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
        this.thirdForm.get('HCCActual').updateValueAndValidity();
        this.thirdForm.get('HCXActual').setValidators([Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
        this.thirdForm.get('HCXActual').updateValueAndValidity();
        this.thirdForm.get('HCBActual').setValidators([Validators.required, Validators.pattern(/^\d{0,6}(\.\d{1,2})?$/)]);
        this.thirdForm.get('HCBActual').updateValueAndValidity();
      }
    }
  }
  setFieldVal() {


    if (this.selectedItem !== undefined) {
      const LoadToPort = this.selectedItem.LoadToPort.split(",")
      const DischargePort = this.selectedItem.DischargePort.split(",")
      const CargotoLoad = this.selectedItem.CargotoLoad.split(",")
      const PreviousCargo = this.selectedItem.PreviousCargo.split(",")
      this.formTitle = "Update"
      this.firstForm.setValue({
        VoyageId: this.selectedItem.VoyageId,
        LTCMURId: this.selectedItem.LTCMURId,
        VesselId: this.selectedItem.VesselId,
        VoyageCommenceDate: this.selectedItem.VoyageCommenceDate,
        VesselVoyageCompletedDate: this.selectedItem.VesselVoyageCompletedDate,
        StatusId: this.selectedItem.StatusId,
        Fixture: this.selectedItem.Fixture,
        OwnerId: this.selectedItem.OwnerId,
        TradeAreaId: this.selectedItem.TradeAreaId,
        VayageNo: this.selectedItem.VayageNo,
      });
      this.secondForm.setValue({
        HoldPassId: this.selectedItem.HoldPassId,
        OprTypeId: this.selectedItem.OprTypeId,
        LoadToPort: LoadToPort,
        DischargePort: DischargePort,
        CargotoLoad: CargotoLoad,
        PreviousCargo: PreviousCargo,
      });

      this.thirdForm.setValue({
        TCCBudgetUSD: this.selectedItem.TCCBudgetUSD,
        TCCActual: this.selectedItem.TCCActual,
        TCCProvisions: this.selectedItem.TCCBudgetUSD - this.selectedItem.TCCActual,
        ITDBudget: this.selectedItem.ITDBudget,
        ITDActual: this.selectedItem.ITDActual,
        ITDProvisions: this.selectedItem.ITDBudget - this.selectedItem.ITDActual,
        ITCBudget: this.selectedItem.ITCBudget,
        ITCActual: this.selectedItem.ITCActual,
        ITCProvisions: this.selectedItem.ITCBudget - this.selectedItem.ITCActual,
        ITBBudget: this.selectedItem.ITBBudget,
        ITBActual: this.selectedItem.ITBActual,
        ITBProvisions: this.selectedItem.ITBBudget - this.selectedItem.ITBActual,
        SCGBudget: this.selectedItem.SCGBudget,
        SCGActual: this.selectedItem.SCGActual,
        SCGProvisions: this.selectedItem.SCGBudget - this.selectedItem.SCGActual,
        SHABudget: this.selectedItem.SHABudget,
        SHAActual: this.selectedItem.SHAActual,
        SHAProvisions: this.selectedItem.SHABudget - this.selectedItem.SHAActual,
        HCEBudget: this.selectedItem.HCEBudget,
        HCEActual: this.selectedItem.HCEActual,
        HCEProvisions: this.selectedItem.HCEBudget - this.selectedItem.HCEActual,
        HCCBudget: this.selectedItem.HCCBudget,
        HCCActual: this.selectedItem.HCCActual,
        HCCProvisions: this.selectedItem.HCCBudget - this.selectedItem.HCCActual,
        HCXBudget: this.selectedItem.HCXBudget,
        HCXActual: this.selectedItem.HCXActual,
        HCXProvisions: this.selectedItem.HCXBudget - this.selectedItem.HCXActual,
        HCBBudget: this.selectedItem.HCBBudget,
        HCBActual: this.selectedItem.HCBActual,
        HCBProvisions: this.selectedItem.HCBBudget - this.selectedItem.HCBActual,
        ITDStatusId: this.selectedItem.ITDStatusId,
        SCGStatusId: this.selectedItem.SCGStatusId,
      });
      this.fourthForm.setValue({
        Remark: this.selectedItem.Remark,
        FinalRemarks: this.selectedItem.FinalRemarks,
        VesselVoyageCompletingDate: this.selectedItem.VesselVoyageCompletingDate,
        BudgetedDetailsDate: this.selectedItem.BudgetedDetailsDate,
      });

    }


  }

  getAllDropDown() {

    this.statusService.getStatusList().subscribe((res: Status[]) => {
      this.statusDropdown = res;
      console.log(this.statusDropdown, 'statusDropdown')
      if (this.selectedItem !== undefined) {

        this.onSelectStatus(this.selectedItem.StatusId)
      }
      // if (this.statusDropdown.length > 0) {
      //   this.onSelectStatus(this.selectedItem.StatusId);
      // }
    })
    // this.vesselOperatorService.getOperatorList().subscribe((res: VesselOperator) => {
    //   debugger
    //   this.vesselOperatorDropdown = res
    //   console.log(this.vesselOperatorDropdown ,'vesselOperatorDropdown')
    // })
    // this.chartererService.getChartererList(1,100,"").subscribe((res: Charterer) => {
    //   debugger
    //      this.chartererDropdown = res
    //   console.log(this.chartererDropdown ,'chartererDropdown')
    // })

    // this.portService.getPortList(1,100,"").subscribe((res: Port) => {
    //   debugger
    //   this.portDropdown = res
    //   console.log(this.portDropdown ,'portDropdown')
    // })

    // this.shaService.getSHAList(1,100,'').subscribe((res: SHA) => {
    //   debugger
    //   this.shaDropdown = res
    //   console.log(this.shaDropdown ,'shaDropdown')
    // })

    this.voyageService.getLtcList().subscribe((res: LTC) => {
      debugger
      this.LtcMurList = res
      console.log(this.LtcMurList, 'LtcMurList')
    })
    this.voyageService.getPlanStatusList().subscribe((res: PlanStatus) => {
      debugger
      this.PlanStatusList = res
      console.log(this.PlanStatusList, 'PlanStatusList')
    })
    this.voyageService.getOwnerNameList().subscribe((res: Owner) => {
      this.OwnerNameList = res

    })
    this.voyageService.getTradeAreaList().subscribe((res: TradeArea) => {
      debugger
      this.TradeAreaList = res
      console.log(this.TradeAreaList, 'TradeAreaList')
    })

    this.voyageService.getHoldPassList().subscribe((res: HoldPass) => {
      debugger
      this.holdPassList = res
      console.log(this.holdPassList, 'holdPassList')
    })


  }
  calculate(value: string) {
    if (value == "TCC") {
      const input1 = this.thirdForm.value.TCCBudgetUSD;
      const input2 = this.thirdForm.value.TCCActual;
      // if (input1 !== "" && input2 !== "") {
      const calculateVal = input1 - input2
      this.thirdForm.get('TCCProvisions').setValue(calculateVal)
      // }
    }
    if (value == "ITD") {
      const input1 = this.thirdForm.value.ITDBudget;
      const input2 = this.thirdForm.value.ITDActual;
      // if (input1 !== "" && input2 !== "") {
      const calculateVal = input1 - input2
      this.thirdForm.get('ITDProvisions').setValue(calculateVal)
      // }
    }
    if (value == "ITC") {
      const input1 = this.thirdForm.value.ITCBudget;
      const input2 = this.thirdForm.value.ITCActual;
      // if (input1 !== "" && input2 !== "") {
      const calculateVal = input1 - input2
      this.thirdForm.get('ITCProvisions').setValue(calculateVal)
      // }
    }
    if (value == "ITB") {
      const input1 = this.thirdForm.value.ITBBudget;
      const input2 = this.thirdForm.value.ITBActual;
      // if (input1 !== "" && input2 !== "") {
      const calculateVal = input1 - input2
      this.thirdForm.get('ITBProvisions').setValue(calculateVal)
      // }
    }
    if (value == "SCG") {
      const input1 = this.thirdForm.value.SCGBudget;
      const input2 = this.thirdForm.value.SCGActual;
      // if (input1 !== "" && input2 !== "") {
      const calculateVal = input1 - input2
      this.thirdForm.get('SCGProvisions').setValue(calculateVal)
      // }
    }
    if (value == "SHA") {
      const input1 = this.thirdForm.value.SHABudget;
      const input2 = this.thirdForm.value.SHAActual;
      // if (input1 !== "" && input2 !== "") {
      const calculateVal = input1 - input2
      this.thirdForm.get('SHAProvisions').setValue(calculateVal)
      // }
    }
    if (value == "HCE") {
      const input1 = this.thirdForm.value.HCEBudget;
      const input2 = this.thirdForm.value.HCEActual;
      // if (input1 !== "" && input2 !== "") {
      const calculateVal = input1 - input2
      this.thirdForm.get('HCEProvisions').setValue(calculateVal)
      // }
    }
    if (value == "HCC") {
      const input1 = this.thirdForm.value.HCCBudget;
      const input2 = this.thirdForm.value.HCCActual;
      // if (input1 !== "" && input2 !== "") {
      const calculateVal = input1 - input2
      this.thirdForm.get('HCCProvisions').setValue(calculateVal)
      // }
    }
    if (value == "HCX") {
      const input1 = this.thirdForm.value.HCXBudget;
      const input2 = this.thirdForm.value.HCXActual;
      // if (input1 !== "" && input2 !== "") {
      const calculateVal = input1 - input2
      this.thirdForm.get('HCXProvisions').setValue(calculateVal)
      // }
    }
    if (value == "HCB") {
      const input1 = this.thirdForm.value.HCBBudget;
      const input2 = this.thirdForm.value.HCBActual;
      // if (input1 !== "" && input2 !== "") {
      const calculateVal = input1 - input2
      this.thirdForm.get('HCBProvisions').setValue(calculateVal)
      // }
    }

    const propertiesBudget = ['ITDBudget', 'ITCBudget', 'ITBBudget', 'SCGBudget', 'SHABudget', 'HCEBudget', 'HCCBudget', 'HCXBudget', 'HCBBudget']; // Array of property names
    const propertiesActual = ['ITDActual', 'ITCActual', 'ITBActual', 'SCGActual', 'SHAActual', 'HCEActual', 'HCCActual', 'HCXActual', 'HCBActual']; // Array of property names
    let TotalBudget: number | null = null;
    let TotalActual: number | null = null;

    for (const property of propertiesBudget) {

      if (this.thirdForm.value.hasOwnProperty(property)) {
        if (this.thirdForm.value[property] !== "") {
          TotalBudget += this.thirdForm.value[property];
        }
      }
    }
    for (const propertyActual of propertiesActual) {
      if (this.thirdForm.value.hasOwnProperty(propertyActual)) {
        if (this.thirdForm.value[propertyActual] !== "") {
          TotalActual += this.thirdForm.value[propertyActual];
        }
      }
    }
    this.thirdForm.get('TCCBudgetUSD').setValue(TotalBudget);
    this.thirdForm.get('TCCActual').setValue(TotalActual);
    this.thirdForm.get('TCCProvisions').setValue(TotalBudget - TotalActual);
  }

  close() {
    this.dialogRef.close();
  }
  changeOffsetTimeZone(control, event) {
    // //debugger
    // this.dataPick = '' || null
    // ////debugger;
    // // let dataValu = `${{event
    // console.log(event)
    // const selectedDate: Date = new Date(event);;
    // const timeZoneOffset = selectedDate.getTimezoneOffset();
    // selectedDate.setMinutes(selectedDate.getMinutes() - timeZoneOffset);
    // // const selectedDateFormatted = selectedDate.toISOString().split('T')[0];
    // const dataPicks = selectedDate.toISOString().split('T')[0];
    // switch (control) {


    //   case control = "VoyageCommenceDate":
    //     //debugger
    //    const a= this.firstForm.get('VoyageCommenceDate').setValue('');
    //    //debugger
    //     console.log(a,"a")
    //     break;
    //   case control = "VesselVoyageCompletedDate":
    //     //debugger
    //     this.firstForm.get('VesselVoyageCompletedDate').setValue(this.dataPick);
    //     break;
    //   case control = "VesselVoyageCompletingDate":
    //     //debugger
    //     this.fourthForm.get('VesselVoyageCompletingDate').setValue(this.dataPick);
    //     break;
    //   case control = "BudgetedDetailsDate":
    //     //debugger
    //     this.fourthForm.get('BudgetedDetailsDate').setValue(dataPicks);
    //     break;

    // }
  }

  submit() {

    const LoadToPort = this.secondForm.value.LoadToPort.join(",")
    const DischargePort = this.secondForm.value.DischargePort.join(",")
    const CargotoLoad = this.secondForm.value.CargotoLoad.join(",")
    const PreviousCargo = this.secondForm.value.PreviousCargo.join(",")
    this.secondForm.get('LoadToPort').setValue(LoadToPort);
    this.secondForm.get('DischargePort').setValue(DischargePort);
    this.secondForm.get('CargotoLoad').setValue(CargotoLoad);
    this.secondForm.get('PreviousCargo').setValue(PreviousCargo);


    this.allData = {

      ...this.firstForm.value,
      ...this.secondForm.value,
      ...this.thirdForm.value,
      ...this.fourthForm.value,
    };

    console.log(this.allData, "SaveData")

    if (this.allData) {

      if (this.selectedItem !== undefined) {
        this.firstForm.get('VoyageId').setValue(this.selectedItem.VoyageId);
        const voyageDetails = this.allData
        debugger
        this.voyageService.updateVoyageDetail(this.allData).subscribe(res => {
          debugger;
          if (res == true) {

            this.statusService.getStatusList().subscribe((res: Status[]) => {
              const StatusVal = res.filter(x => x.StatusId === this.firstForm.value.StatusId)

              this.dialogRef.close(StatusVal[0].StatusName);
            })

            // this.close();
          }
        })
      } else {
        debugger;
        const voyageDetails = this.allData
        console.log(voyageDetails)
        this.voyageService.addVoyageDetail(voyageDetails).subscribe(res => {
          debugger;
          if (res == true) {
            debugger;
            this.statusService.getStatusList().subscribe((res: Status[]) => {
              const StatusVal = res.filter(x => x.StatusId === this.firstForm.value.StatusId)

              this.dialogRef.close(StatusVal[0].StatusName);
            })

            // this.close();
          }
        })
      }

    }
    // else {
    //   this.nbForm.markAllAsTouched();
    // }

  }

  onFirstSubmit() {
    //debugger
    //  let v= this.firstForm.get('VoyageCommenceDate').setValue(this.dataPick);
    // let b=  this.firstForm.get('VesselVoyageCompletedDate').setValue(this.dataPick);

    //debugger
    if (this.firstForm.invalid) {
      this.firstForm.markAllAsTouched();
      // this.firstForm.markAsDirty();
    } else {
      const selectedDate: Date = new Date(this.firstForm.value.VoyageCommenceDate);;
      const timeZoneOffset = selectedDate.getTimezoneOffset();
      selectedDate.setMinutes(selectedDate.getMinutes() - timeZoneOffset);
      const dataPickVoyageCommenceDate = selectedDate.toISOString().split('T')[0];

      const selectedDate1: Date = new Date(this.firstForm.value.VesselVoyageCompletedDate);
      const timeZoneOffset1 = selectedDate1.getTimezoneOffset();
      selectedDate1.setMinutes(selectedDate1.getMinutes() - timeZoneOffset1);
      const dataPickVesselVoyageCompletedDate = selectedDate1.toISOString().split('T')[0];
      this.firstForm.get('VoyageCommenceDate').setValue(dataPickVoyageCommenceDate);
      this.firstForm.get('VesselVoyageCompletedDate').setValue(dataPickVesselVoyageCompletedDate);
      console.log(this.firstForm.value, "formValue")
    }
    // this.nbForm.markAllAsTouched();
  }

  onSecondSubmit() {
    //debugger
    if (this.secondForm.invalid) {
      this.secondForm.markAllAsTouched();

    } else {


      console.log(this.secondForm.value, "secondForm")
    }
    // this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    if (this.thirdForm.invalid) {
      this.thirdForm.markAllAsTouched();

    } else {


      console.log(this.thirdForm.value, "thirdForm")

    }
  }
  onfourthSubmit() {
    //debugger
    if (this.fourthForm.invalid) {
      this.fourthForm.markAllAsTouched();

    } else {
      ////debugger;
      const selectedDate: Date = new Date(this.fourthForm.value.VesselVoyageCompletingDate);;
      const timeZoneOffset = selectedDate.getTimezoneOffset();
      selectedDate.setMinutes(selectedDate.getMinutes() - timeZoneOffset);
      const dataPickVesselVoyageCompletingDate = selectedDate.toISOString().split('T')[0];
      this.fourthForm.get('VesselVoyageCompletingDate').setValue(dataPickVesselVoyageCompletingDate);
      if (this.fourthForm.value.BudgetedDetailsDate !== null) {
        const selectedDate1: Date = new Date(this.fourthForm.value.BudgetedDetailsDate);;
        const timeZoneOffset1 = selectedDate1.getTimezoneOffset();
        selectedDate1.setMinutes(selectedDate1.getMinutes() - timeZoneOffset1);
        const dataPickBudgetedDetailsDate = selectedDate1.toISOString().split('T')[0];
        this.fourthForm.get('BudgetedDetailsDate').setValue(dataPickBudgetedDetailsDate);
      }
      console.log(this.fourthForm.value, "fourthForm")
      this.submit();

    }
  }

  clearForm() {
    this.firstForm.reset();

  }

  toggleLinearMode() {
    this.linearMode = !this.linearMode;
  }
  vesselDataAPI() {
    const VoyageData = [
      {
        "Vessel Name": "AFRICAN ARROW",
        "Fixture No": 20230102,
        "Counterparty Short Name": "SABIC",
        "Voyage No": 1,
        "Voyage Status": "Completed",
        "Trade Area Name": "PG EXPORTS FERTILIZER",
        "Commence Date Gmt": "2023-02-13T13:18:00",
        "Complete Date Gmt": "2023-03-31T04:42:00",
        "Load Port Name": "JUBAIL",
        "Load Cargo Short Name": "UREA",
        "Discharge Port Name": "KOHSICHANG TPP",
        "Discharge Cargo Short Name": "UREA",
        "Cargo Grades List": ""
      },
      {
        "Vessel Name": "AFRICAN ARROW",
        "Fixture No": "",
        "Counterparty Short Name": "",
        "Voyage No": 2,
        "Voyage Status": "Completed",
        "Trade Area Name": "TC RELET",
        "Commence Date Gmt": "2023-03-31T04:42:00",
        "Complete Date Gmt": "2023-06-01T07:20:00",
        "Load Port Name": "",
        "Load Cargo Short Name": "",
        "Discharge Port Name": "",
        "Discharge Cargo Short Name": "",
        "Cargo Grades List": "UREA"
      },
      {
        "Vessel Name": "AFRICAN ARROW",
        "Fixture No": 20230266,
        "Counterparty Short Name": "Aditya Birla Global Trading",
        "Voyage No": 3,
        "Voyage Status": "Completed",
        "Trade Area Name": "TC RELET",
        "Commence Date Gmt": "2023-06-01T07:20:00",
        "Complete Date Gmt": "2023-07-22T18:42:00",
        "Load Port Name": "RAS LAFFAN",
        "Load Cargo Short Name": "SULPHUR",
        "Discharge Port Name": "RICHARDS BAY",
        "Discharge Cargo Short Name": "SULPHUR",
        "Cargo Grades List": ""
      },
      {
        "Vessel Name": "AFRICAN ARROW",
        "Fixture No": 20230352,
        "Counterparty Short Name": "The Chemours Company FC LLC Wilm",
        "Voyage No": 4,
        "Voyage Status": "Commenced",
        "Trade Area Name": "SOUTHERN AFRICA TO USG",
        "Commence Date Gmt": "2023-07-22T18:42:00",
        "Complete Date Gmt": "2023-10-03T19:05:00",
        "Load Port Name": "RICHARDS BAY",
        "Load Cargo Short Name": "TITANIUM SLAG",
        "Discharge Port Name": "ALTAMIRA",
        "Discharge Cargo Short Name": "TITANIUM SLAG",
        "Cargo Grades List": "SULPHUR"
      },
      {
        "Vessel Name": "AFRICAN ARROW",
        "Fixture No": 20230352,
        "Counterparty Short Name": "The Chemours Company FC LLC Wilm",
        "Voyage No": 4,
        "Voyage Status": "Commenced",
        "Trade Area Name": "SOUTHERN AFRICA TO USG",
        "Commence Date Gmt": "2023-07-22T18:42:00",
        "Complete Date Gmt": "2023-10-03T19:05:00",
        "Load Port Name": "RICHARDS BAY",
        "Load Cargo Short Name": "TITANIUM SLAG",
        "Discharge Port Name": "NEW ORLEANS",
        "Discharge Cargo Short Name": "TITANIUM SLAG",
        "Cargo Grades List": "SULPHUR"
      },
      {
        "Vessel Name": "AFRICAN ARROW",
        "Fixture No": 20230352,
        "Counterparty Short Name": "The Chemours Company FC LLC Wilm",
        "Voyage No": 4,
        "Voyage Status": "Commenced",
        "Trade Area Name": "SOUTHERN AFRICA TO USG",
        "Commence Date Gmt": "2023-07-22T18:42:00",
        "Complete Date Gmt": "2023-10-03T19:05:00",
        "Load Port Name": "EHOALA",
        "Load Cargo Short Name": "TITANIUM SLAG",
        "Discharge Port Name": "ALTAMIRA",
        "Discharge Cargo Short Name": "TITANIUM SLAG",
        "Cargo Grades List": "SULPHUR"
      },
      {
        "Vessel Name": "AFRICAN ARROW",
        "Fixture No": 20230352,
        "Counterparty Short Name": "The Chemours Company FC LLC Wilm",
        "Voyage No": 4,
        "Voyage Status": "Commenced",
        "Trade Area Name": "SOUTHERN AFRICA TO USG",
        "Commence Date Gmt": "2023-07-22T18:42:00",
        "Complete Date Gmt": "2023-10-03T19:05:00",
        "Load Port Name": "EHOALA",
        "Load Cargo Short Name": "TITANIUM SLAG",
        "Discharge Port Name": "NEW ORLEANS",
        "Discharge Cargo Short Name": "TITANIUM SLAG",
        "Cargo Grades List": "SULPHUR"
      }
    ]

    //Fixture No Code Here

    const uniqueFixtureNumbers = [];
    const uniqueFixtureObjects = [];

    for (const voyage of VoyageData) {
      const fixtureNo = voyage["Fixture No"];

      if (fixtureNo && !uniqueFixtureNumbers.includes(fixtureNo)) {
        uniqueFixtureNumbers.push(fixtureNo);
        uniqueFixtureObjects.push({ "Fixture No": fixtureNo });
      }


    }
    // this.voyageService.getAllVoyageDataList().subscribe(res=>{
    //   console.log(res)
    // })
  }
}
