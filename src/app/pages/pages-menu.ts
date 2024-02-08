import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard-menu-management/dashboard',
    home: true,
  },
  {
    icon: 'shopping-cart-outline',
    title: 'Voyage',
    children: [
      {
        title: 'Voyage Web',
        link: '/pages/voyage/voyage-list',
      },
      // {
      //   title: 'Voyage Desktop',
      //   link: '/pages/voyage/voyage-Web',
      // },
      {
        title: 'Voyage Merge',
        link: '/pages/voyage/voyage-merge-list',
      },
      {
        title: 'Voyage Annual Budget',
        link: '/pages/voyage/voyage-budget',
      },
      ]
  },

  {
    title: 'Hold Cleaning',
    icon: 'layers-outline',
    link: '/pages/holdCleaningManagement/hold-cleaning',
  },
  // {
  //   icon: 'browser-outline',
  //   title: 'Hold Cleaning',
  //   link: '/pages/cleaning-stages',
  // },


  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  {
    title: 'Inventory',
    icon: 'layout-outline',
    children: [
      {
        title: 'Vessel Inventory',
        link: '/pages/inventory/vessel-inventory',
      },
      {
        title: 'Requisition',
        link: '/pages/inventory/requisition',
      },
      {
        title: 'Vendor ',
        link: '/pages/inventory/vendor',
      },
      {
        title: 'Equipment ',
        link: '/pages/inventory/equipment',
      },
      {
        title: 'Equipment Category',
        link: '/pages/inventory/equipment-category',
      },




    ],
  },
  {
    title: 'Reports',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'HCC Summary',
        link: '/pages/report/hcc-budget-summary',
      },
      {
        title: 'MIS Summary',
        link: '/pages/report/mis-summary',
      },

    ],
  },
  {
    title: 'Analytics',
    icon: 'keypad-outline',
    // link: '/pages/ui-features',
    children: [
      {
        title: 'Monthly Analysis',
        link: '/pages/analysis/monthly-analysis',
      },
      {
        title: 'Analysis Template',
        link: '/pages/analysis/analysis-template',
      },
      {
        title: 'Cargo Wise Analysis',
        link: '/pages/analysis/cargo-analysis',
      },
      {
        title: 'SHA Analysis',
        link: '/pages/analysis/sha-analysis',
      },
      {
        title: 'SCG Analysis',
        link: '/pages/analysis/scg-analysis',
      },
    ],
  },
  // holdCleaningManagement

  {
    title: 'Circulars',
    icon: 'archive-outline',
    link: '/pages/circular/circular',
    // children: [
      // {
      //   title: 'Circulars-list',
      //   link: '/pages/circular',
      // },
    //   {
    //     title: 'Window',
    //     link: '/pages/modal-overlays/window',
    //   },
    //   {
    //     title: 'Popover',
    //     link: '/pages/modal-overlays/popover',
    //   },
    //   {
    //     title: 'Toastr',
    //     link: '/pages/modal-overlays/toastr',
    //   },
    //   {
    //     title: 'Tooltip',
    //     link: '/pages/modal-overlays/tooltip',
    //   },
    // ],
  },

  {
    title: 'Master List',
    icon: 'browser-outline',
    children: [
      {
        title: 'Applicability',
        link: '/pages/settings/applicability',
      },
      {
        title: 'Cargo',
        link: '/pages/settings/cargo',
      },

      {
        title: 'Charterer',
        // icon: 'home-outline',
        link: '/pages/settings/charterer',
      },
      {
        title: 'Circular Category ',
        // icon: 'browser-outline',
        link: '/pages/settings/circular-category',
      },
      {
        title: 'Cleaning Stages',
        link: '/pages/settings/cleaning-stages',
      },
        {
        title: 'Cleaning Matrix',
        link: '/pages/settings/cleaning-matrix',
      },

      {
        title: 'Country',
        link: '/pages/settings/country',
      },


      {
        // icon: 'shopping-cart-outline',
        title: 'Fleet Name',
        link: '/pages/settings/fleet-name',
      },

      {
        // icon: 'shopping-cart-outline',
        title: 'Fleet Type',
        link: '/pages/settings/fleet-type',
      },
      {
        title: 'Maker',
        link: '/pages/settings/maker',
      },

      {
        title: 'Opr Type',
        link: '/pages/settings/opr-type',
      },
      {
        title: 'Port',
        link: '/pages/settings/port',
      },
      // {
      //   title: 'Role',
      //   link: '/pages/settings/role',
      // },

      {
        title: 'SHA',
        link: '/pages/settings/sha',
      },
      {
        title: 'Shore Cleaning Gang',
        link: '/pages/settings/shoreClening',
      },

      {
        title: 'Status',
        link: '/pages/settings/status',
      },
      {
        title: 'Supply Type',
        link: '/pages/settings/supply-type',
      },
      {

        title: 'Unit',
        link: '/pages/settings/unit',
      },
      {
        // icon: 'list-outline',
        title: 'Vessel',
        link: '/pages/settings/vessel',
      },
      {
        // icon: 'list-outline',
        title: 'Vessel Operator',
        link: '/pages/settings/operator',
      },



      // {
      //   title: 'Opr Type Name',
      //   link: '/pages/settings/opr-type-name',
      // },

      //
      // {
      //   path: 'vessel',
      //   component: VesselListComponent,
      // },{
      //   path: 'operator',
      //   component: OperatorListComponent,
      // },{
      //   path: 'charterer',
      //   component: ChartererListComponent,
      // },
      // {
      //   path: 'circular',
      //   component: CircularListComponent,
      // },





      // {
      //   path: 'opr-type',
      //   component: OprTypeListComponent,
      // },
      // {
      //   path: 'opr-type-name',
      // {
      //   title: 'Calendar',
      //   link: '/pages/extra-components/calendar',
      // },
      // {
      //   title: 'Progress Bar',
      //   link: '/pages/extra-components/progress-bar',
      // },
      // {
      //   title: 'Spinner',
      //   link: '/pages/extra-components/spinner',
      // },
      // {
      //   title: 'Alert',
      //   link: '/pages/extra-components/alert',
      // },
      // {
      //   title: 'Calendar Kit',
      //   link: '/pages/extra-components/calendar-kit',
      // },
      // {
      //   title: 'Chat',
      //   link: '/pages/extra-components/chat',
      // },
    ],
  },

  {
    title: 'Import/Export',
    icon: 'message-circle-outline',
    link: '/pages/settings/master-docs',

  },
  // {
  //   title: 'Settings',
  //   icon: 'message-circle-outline',
  //     // children: [
  //     //   {
  //     //     title: 'Master-Docs',
  //     //     link: '/pages/settings/master-docs',
  //     //   },
  //     //   {
  //     //     title: 'Inventory-Docs',
  //     //     link: '/pages/settings/inventory-docs',
  //     //   },
  //     // ]
  // },
  {
    title: 'Help',
    icon: 'map-outline',
    // children: [
    //   {
    //     title: 'Google Maps',
    //     link: '/pages/maps/gmaps',
    //   },
    //   {
    //     title: 'Leaflet Maps',
    //     link: '/pages/maps/leaflet',
    //   },
    //   {
    //     title: 'Bubble Maps',
    //     link: '/pages/maps/bubble',
    //   },
    //   {
    //     title: 'Search Maps',
    //     link: '/pages/maps/searchmap',
    //   },
    // ],
  },
  // {
  //   title: 'Charts',
  //   icon: 'map-outline',
  //   children: [
  //     {
  //       title: 'Chartjs',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/charts/echarts',
  //     },

  //   ],
  // },

];


export const VENDOR_MENU:NbMenuItem[]=[

  {
    title: 'Inventory',
    icon: 'layout-outline',
    children: [
      // {
      //   title: 'Vessel Inventory',
      //   link: '/pages/inventory/vessel-inventory',
      // },
      {
        title: 'Vendor Requisition',
        link: '/pages/inventory/vendor-requisition',
      },

      // {
      //   title: 'Equipment ',
      //   link: '/pages/inventory/equipment',
      // },
      // {
      //   title: 'Equipment Category',
      //   link: '/pages/inventory/equipment-category',
      // },




    ],
  },

]
