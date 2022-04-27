import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import { MaterialModule } from '../core/shared/material/material.module';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardDetailComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    NgCircleProgressModule.forRoot({
      "radius": 70,
      "space": -10,
      // "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "90% Completed",
      "animateTitle": false,
      "animationDuration": 1000,
      "showSubtitle": false,
      "showUnits": false,
      "showBackground": false,
      "clockwise": true,
      "startFromZero": false,
      "titleColor": "#1E1E1E",
      "titleFontSize": "14",
      "titleFontWeight": "600",
      // "lazy": true
    })
  
  ]
})
export class DashboardModule { }
