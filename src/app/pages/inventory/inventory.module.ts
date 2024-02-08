import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { AddEquipmentComponent } from './equipment/add-equipment/add-equipment.component';
import { EquipmentComponent } from './equipment/equipment/equipment.component';
import { AddRequisitionComponent } from './requisition/add-requisition/add-requisition.component';
import { RequisitionListComponent } from './requisition/requisition-list/requisition-list.component';
import { ViewRequistionComponent } from './requisition/view-requistion/view-requistion.component';
import { AddVendorComponent } from './vendor/add-vendor/add-vendor.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { ViewVendorComponent } from './vendor/view-vendor/view-vendor.component';
import { AddVesselInventoryComponent } from './vessel-inventory/add-vessel-inventory/add-vessel-inventory.component';
import { VesselInventoryListComponent } from './vessel-inventory/vessel-inventory-list/vessel-inventory-list.component';
import { TooltipModule } from '@swimlane/ngx-charts';
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

import { NbMenuModule, NbTooltipModule, NbFormFieldModule, NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule, NbTabsetModule, NbAutocompleteModule, NbAccordionComponent, NbAccordionModule, NbSpinnerModule } from '@nebular/theme';

import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CKEditorModule } from 'ng2-ckeditor';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ThemeModule } from '@app-theme/theme.module';
import { FormsRoutingModule } from '@app-pages/forms/forms-routing.module';
import { EquipmentCategoryComponent } from './equipment-category/equipment-category/equipment-category.component';
import { AddEquipmentCategoryComponent } from './equipment-category/add-equipment-category/add-equipment-category.component';
import { InventoryComponent } from './inventory.component';
import { VendorRequisitionListComponent } from './vendor-requisition/vendor-requisition-list/vendor-requisition-list.component';
import { AddVendorRequisitionComponent } from './vendor-requisition/add-vendor-requisition/add-vendor-requisition.component';
import { ViewRequisitionDetailsComponent } from './vendor-requisition/view-requisition-details/view-requisition-details.component';
import { DetailInventoryComponent } from './vessel-inventory/detail-inventory/detail-inventory.component';
import { DetailEquipmentComponent } from './vessel-inventory/detail-equipment/detail-equipment.component';
import { ConsumptionLogComponent } from './vessel-inventory/consumption-log/consumption-log.component';



const NG_Prime=[
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
  // ChartModule,
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
  // EditorModule,
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
  // OrganizationChartModule,
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

]


const NB_Module= [
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
  NbAccordionModule,
  NbSpinnerModule
]

@NgModule({
  declarations: [
    AddVendorComponent,
    VendorListComponent,
    ViewVendorComponent,
    AddRequisitionComponent,
    RequisitionListComponent,
    ViewRequistionComponent,
    EquipmentComponent,
    AddEquipmentComponent,
    AddVesselInventoryComponent,
    VesselInventoryListComponent,
    EquipmentCategoryComponent,
    AddEquipmentCategoryComponent,
    InventoryComponent,
    VendorRequisitionListComponent,
    AddVendorRequisitionComponent,
    ViewRequisitionDetailsComponent,
    DetailInventoryComponent,
    DetailEquipmentComponent,
    ConsumptionLogComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ThemeModule,
    Ng2SmartTableModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    CKEditorModule ,
    NgxSkeletonLoaderModule,
    NG_Prime,
    NB_Module,





  ]
})
export class InventoryModule { }








