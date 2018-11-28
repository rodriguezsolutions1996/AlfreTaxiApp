import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  { path: '', 
  loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'QuienesSomos',
   loadChildren: './quienes-somos/quienes-somos.module#QuienesSomosPageModule' },
  { path: 'MetodosDePago', loadChildren: './metodos-de-pago/metodos-de-pago.module#MetodosDePagoPageModule' },
  { path: 'Perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },

 /// { path: 'Tradicional', loadChildren: './tradicional/tradicional.module#TradicionalPageModule' },
 /// { path: 'Premium', loadChildren: './premium/premium.module#PremiumPageModule' },
///  { path: 'Especial', loadChildren: './especial/especial.module#EspecialPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
