import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MetodosDePagoPage } from './metodos-de-pago.page';

const routes: Routes = [
  {
    path: '',
    component: MetodosDePagoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MetodosDePagoPage]
})
export class MetodosDePagoPageModule {}
