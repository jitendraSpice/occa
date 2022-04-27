import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpgradeCourseComponent } from './upgrade-course/upgrade-course.component';

const routes: Routes = [
  {path:'', component: UpgradeCourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpgradeCourseRoutingModule { }
