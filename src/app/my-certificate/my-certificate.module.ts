import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCertificateRoutingModule } from './my-certificate-routing.module';
import { MyCertificateComponent } from './my-certificate/my-certificate.component';


@NgModule({
  declarations: [
    MyCertificateComponent
  ],
  imports: [
    CommonModule,
    MyCertificateRoutingModule
  ]
})
export class MyCertificateModule { }
