import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';


//
import { NbActionsModule, NbAutocompleteModule, NbButtonModule, NbCalendarModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbFormFieldModule, NbIconModule, NbInputModule, NbMenuModule, NbRadioModule, NbRouteTabsetModule, NbSelectModule, NbSpinnerModule, NbTabsetModule, NbTooltipModule, NbUserModule } from '@nebular/theme';

// import { ThemeModule } from '../@theme/theme.module';
// import { PagesComponent } from './pages.component';
// import { PagesRoutingModule } from './pages-routing.module';
// import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
// import { SplitButtonModule } from 'primeng/splitbutton';
// import { TableModule } from 'primeng/table';

// import { CardModule } from 'primeng/card';
// ..
// import { FormsRoutingModule } from './forms/forms-routing.module';

// Import PrimeNG modules
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
// import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
// import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ImageModule } from 'primeng/image';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
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
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import { AnimateModule } from 'primeng/animate';
import { CardModule } from 'primeng/card';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { DynamicDialogComponent } from './shared/dynamic-dialog/dynamic-dialog.component';
import { NgSelectModule } from '@ng-select/ng-select';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
// import { FileValueAccessorDirective } from './circular/add-circular/file-value-accessor';
//
import { ChartModule } from 'angular2-chartjs';
// import { NgApexchartsModule } from "ng-apexcharts";
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AnalysisComponent } from './analysis.component';
import { AnalysisRoutingModule } from './analsis-routing.module';

import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MonthlyAnalysisComponent } from './monthly-analysis/monthly-analysis.component';
import { AnalysisTemplateComponent } from './analysis-template/analysis-template.component';
import { CargoAnalysisComponent } from './cargo-analysis/cargo-analysis.component';
import { ShaAnalysisComponent } from './sha-analysis/sha-analysis.component';
import { ScgAnalysisComponent } from './scg-analysis/scg-analysis.component';
import { GraphAnalysisComponent } from './vendor-analysis/graph-analysis/graph-analysis.component';
import { MonthlyVendorAnalysisComponent } from './vendor-analysis/monthly-vendor-analysis/monthly-vendor-analysis.component';


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
  NbDatepickerModule,
  NbCalendarModule,
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
  OrganizationChartModule,
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
    AnalysisComponent,
    MonthlyAnalysisComponent,
    AnalysisTemplateComponent,
    CargoAnalysisComponent,
    ShaAnalysisComponent,
    ScgAnalysisComponent,
    GraphAnalysisComponent,
    MonthlyVendorAnalysisComponent
  ],
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    NG_Prime,
    NB_Module,
    NbRouteTabsetModule,
    // NgApexchartsModule,
    ChartModule,
    NgbCarouselModule, NgFor, FormsModule,
    NgxEchartsModule,
    NgxChartsModule,
    NbCardModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AnalysisModule { }
