import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { TradicionalPage } from '../tradicional/tradicional.page';
import { PremiumPage } from '../premium/premium.page';
import { EspecialPage } from '../especial/especial.page';
import { TradicionalPageModule } from '../tradicional/tradicional.module';
import { PremiumPageModule } from '../premium/premium.module';
import { EspecialPageModule } from '../especial/especial.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: "tradicional",
        outlet: "tradicional",
        component: TradicionalPage
      },

      {
        path: "premium",
        outlet: "premium",
        component: PremiumPage
      },

      {
        path: "especial",
        outlet: "especial",
        component: EspecialPage
      },

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TradicionalPageModule,
    PremiumPageModule,
    EspecialPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
