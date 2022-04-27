import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
  path: '', component: DashboardComponent, children: [
    { path: '', component: DashboardDetailComponent },
    {path: 'upgrade-course', loadChildren: () => import('./../upgrade-course/upgrade-course.module').then(m => m.UpgradeCourseModule)},
    {path: 'my-certificate', loadChildren: () => import('./../my-certificate/my-certificate.module').then(m => m.MyCertificateModule)},
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
