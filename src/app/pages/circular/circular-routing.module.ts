import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircularListComponent } from './circular-list/circular-list.component';
import { CircularComponent } from './circular.component';

const routes: Routes = [


  {
    path: '',
    component: CircularComponent,
    children: [
      {
        path: 'circular',
        component: CircularListComponent,
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CircularRoutingModule { }
