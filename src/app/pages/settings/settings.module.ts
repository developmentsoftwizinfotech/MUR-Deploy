import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormsModule as ngFormsModule } from '@angular/forms';

import { ThemeModule } from '@app-theme/theme.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule, NbTabsetModule, NbFormFieldModule, NbMenuModule, NbTooltipModule, NbAutocompleteModule, NbSpinnerModule } from '@nebular/theme';

import { TooltipModule } from '@swimlane/ngx-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MiscellaneousModule } from '@app-pages/miscellaneous/miscellaneous.module';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgSelectModule } from '@ng-select/ng-select';


import { AccordionModule } from 'primeng/accordion';
import { AnimateModule } from 'primeng/animate';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { BlockUIModule } from 'primeng/blockui';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpeedDialModule } from 'primeng/speeddial';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

import { AddPortComponent } from './port/add-port/add-port.component';
import { PortListComponent } from './port/port-list/port-list.component';
import { CargoListComponent } from './cargo/cargo-list/cargo-list.component';
import { AddCargoComponent } from './cargo/add-cargo/add-cargo.component';
import { SettingsComponent } from './settings.component';
import { AddShaComponent } from './sha/add-sha/add-sha.component';
import { ShaListComponent } from './sha/sha-list/sha-list.component';
import { CleaningGangListComponent } from './shore-cleaning/cleaning-gang-list/cleaning-gang-list.component';
import { AddCleaningGangComponent } from './shore-cleaning/add-cleaning-gang/add-cleaning-gang.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { StatusListComponent } from './status/status-list/status-list.component';
import { AddStatusComponent } from './status/add-status/add-status.component';
import { AddFleetNameComponent } from './fleet-name/add-fleet-name/add-fleet-name.component';
import { AddFleetTypeComponent } from './fleet-type/add-fleet-type/add-fleet-type.component';
import { FleetNameListComponent } from './fleet-name/fleet-name-list/fleet-name-list.component';
import { FleetTypeListComponent } from './fleet-type/fleet-type-list/fleet-type-list.component';
import { CleaningStagesComponent } from './cleaning-stages/cleaning-stages.component';
import { OprTypeListComponent } from './opr-type/opr-type-list/opr-type-list.component';
import { AddOprTypeComponent } from './opr-type/add-opr-type/add-opr-type.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { AddRoleComponent } from './role/add-role/add-role.component';
import { AddLicenseComponent } from './vessel/add-license/add-license.component';
import { LicenseLogComponent } from './vessel/license-log/license-log.component';
import { VesselListComponent } from './vessel/vessel-list/vessel-list.component';
import { AddVesselComponent } from './vessel/add-vessel/add-vessel.component';
import { OperatorListComponent } from './vessel-operator/operator-list/operator-list.component';
import { AddOperatorComponent } from './vessel-operator/add-operator/add-operator.component';
import { CircularListComponent } from './circular/circular-list/circular-list.component';
import { AddCircularComponent } from './circular/add-circular/add-circular.component';
import { AddChartererComponent } from './charterer/add-charterer/add-charterer.component';
import { ChartererListComponent } from './charterer/charterer-list/charterer-list.component';
import { AddUnitComponent } from './unit/add-unit/add-unit.component';
import { UnitListComponent } from './unit/unit-list/unit-list.component';
import { SupplyTypeComponent } from './supply/supply-type/supply-type.component';
import { AddSupplyTypeComponent } from './supply/add-supply-type/add-supply-type.component';
import { ApplicabilityComponent } from './applicability/applicability/applicability.component';
import { AddApplicabilityComponent } from './applicability/add-applicability/add-applicability.component';
import { CleaningMatrixComponent } from './cleaning-matrix/cleaning-matrix.component';
import { MasterDocsComponent } from './document/master-docs/master-docs.component';
import { InventoryDocsComponent } from './document/inventory-docs/inventory-docs.component';
import { AddMakerComponent } from './maker/add-maker/add-maker.component';
import { MakerListComponent } from './maker/maker-list/maker-list.component';
import { NotInternetComponent } from './not-internet/not-internet.component';

const NB_Module = [
  NbMenuModule,
  NbTooltipModule,
  NbFormFieldModule,
  NbInputModule,
  NbCardModule,
  NbButtonModule,
  NbActionsModule,
  NbUserModule,
  NbCheckboxModule,
  NbRadioModule,
  NbDatepickerModule,
  NbSelectModule,
  NbIconModule,
  NbTabsetModule,
  NbAutocompleteModule,
  NbSpinnerModule
]
const NG_Prime = [
  AvatarModule,
  AccordionModule,
  AutoCompleteModule,
  BadgeModule,
  BreadcrumbModule,
  BlockUIModule,
  ButtonModule,
  CalendarModule,
  CarouselModule,
  CascadeSelectModule,
  CheckboxModule,
  ChipsModule,
  ChipModule,
  ColorPickerModule,
  ConfirmDialogModule,
  ContextMenuModule,
  VirtualScrollerModule,
  DataViewModule,
  DialogModule,
  DividerModule,
  DockModule,
  DragDropModule,
  DropdownModule,
  DynamicDialogModule,
  FieldsetModule,
  FileUploadModule,
  GalleriaModule,
  InplaceModule,
  InputMaskModule,
  InputSwitchModule,
  InputTextModule,
  InputTextareaModule,
  InputNumberModule,
  ImageModule,
  KnobModule,
  ListboxModule,
  MegaMenuModule,
  MenuModule,
  MenubarModule,
  MessageModule,
  MessagesModule,
  MultiSelectModule,
  OrderListModule,
  OverlayPanelModule,
  PaginatorModule,
  PanelModule,
  PanelMenuModule,
  PasswordModule,
  PickListModule,
  ProgressSpinnerModule,
  ProgressBarModule,
  RadioButtonModule,
  RatingModule,
  SelectButtonModule,
  SidebarModule,
  ScrollerModule,
  ScrollPanelModule,
  ScrollTopModule,
  SkeletonModule,
  SlideMenuModule,
  SliderModule,
  SpeedDialModule,
  SpinnerModule,
  SplitterModule,
  SplitButtonModule,
  StepsModule,
  TableModule,
  TabMenuModule,
  TabViewModule,
  TagModule,
  TerminalModule,
  TieredMenuModule,
  TimelineModule,
  ToastModule,
  ToggleButtonModule,
  ToolbarModule,
  TooltipModule,
  TriStateCheckboxModule,
  TreeModule,
  TreeSelectModule,
  TreeTableModule,
  AnimateModule,
  CardModule,
  NgSelectModule,
]

@NgModule({
  declarations: [
    CargoListComponent,
    AddCargoComponent,
    SettingsComponent,
    AddPortComponent,
    PortListComponent,
    AddShaComponent,
    ShaListComponent,
    CleaningGangListComponent,
    AddCleaningGangComponent,
    CountryListComponent,
    AddCountryComponent,
    StatusListComponent,
    AddStatusComponent,
    AddFleetNameComponent,
    AddFleetTypeComponent,
    FleetNameListComponent,
    FleetTypeListComponent,
    CleaningStagesComponent,
    OprTypeListComponent,
    AddOprTypeComponent,
    RoleListComponent,
    AddRoleComponent,
    ShaListComponent,
    AddShaComponent,
    AddPortComponent,
    PortListComponent,
    CargoListComponent,
    AddCargoComponent,
    AddCargoComponent,
    CargoListComponent,
    AddLicenseComponent,
    LicenseLogComponent,
    VesselListComponent,
    AddVesselComponent,
    AddLicenseComponent,
    LicenseLogComponent,
    OperatorListComponent,
    AddOperatorComponent,
    CircularListComponent,
    AddCircularComponent,
    AddChartererComponent,
    ChartererListComponent,
    AddUnitComponent,
    UnitListComponent,
    SupplyTypeComponent,
    AddSupplyTypeComponent,
    ApplicabilityComponent,
    AddApplicabilityComponent,
    CleaningMatrixComponent,
    MasterDocsComponent,
    InventoryDocsComponent,
    AddMakerComponent,
    MakerListComponent,
    NotInternetComponent,

  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ThemeModule,
    MiscellaneousModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    ngFormsModule,
    Ng2SmartTableModule,
    FilePickerModule,
    NG_Prime,
    NB_Module,

  ],
  providers: [DatePipe]
})
export class SettingsModule {
  constructor() {
    console.log("SettingsModule")
  }
}
