import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpgradeCourseRoutingModule } from './upgrade-course-routing.module';
import { UpgradeCourseComponent } from './upgrade-course/upgrade-course.component';


@NgModule({
  declarations: [
    UpgradeCourseComponent
  ],
  imports: [
    CommonModule,
    UpgradeCourseRoutingModule
  ]
})
export class UpgradeCourseModule { }
