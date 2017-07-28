import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';

const ROUTES: Routes = [
  { path: '', component: MasterComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: [MasterComponent]
})
export class MasterModule { }
