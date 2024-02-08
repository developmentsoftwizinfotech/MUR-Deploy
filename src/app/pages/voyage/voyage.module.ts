import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoyageRoutingModule } from './voyage-routing.module';
import { VoyageListComponent } from './voyage-list/voyage-list.component';
import { AddVoyageComponent } from './voyage-list/add-voyage/add-voyage.component';
import { ViewVoyageComponent } from './voyage-list/view-voyage/view-voyage.component';



import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule, NbTabsetModule, NbFormFieldModule, NbMenuModule, NbTooltipModule, NbAutocompleteModule, NbStepperModule, NbSpinnerModule } from '@nebular/theme';
import { ThemeModule } from '@app-theme/theme.module';
import { FormsModule, ReactiveFormsModule, FormsModule as ngFormsModule } from '@angular/forms';
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
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { VoyageComponent } from './voyage.component';
import { VoyageMergeListComponent } from './voyage-merge/voyage-merge-list/voyage-merge-list.component';
import { MergeVoyageComponent } from './voyage-merge/merge-voyage/merge-voyage.component';
import { VoyageAnnualBudgetComponent } from './voyage-annual-budget/voyage-annual-budget.component';
import { AddVoyageBudgetComponent } from './voyage-annual-budget/add-voyage-budget/add-voyage-budget.component';

const NB_Module=[
  NbMenuModule,
  Ng2SmartTableModule,
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
  ngFormsModule,
  NbAutocompleteModule,
  NbStepperModule,
  NbSpinnerModule
]
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
    VoyageListComponent,
    AddVoyageComponent,
    ViewVoyageComponent,
    VoyageComponent,
    VoyageMergeListComponent,
    MergeVoyageComponent,
    VoyageAnnualBudgetComponent,
    AddVoyageBudgetComponent

  ],
  imports: [
    CommonModule,
    VoyageRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
  NgxSkeletonLoaderModule,
    NG_Prime,
    NB_Module
  ]
})
export class VoyageModule { }
