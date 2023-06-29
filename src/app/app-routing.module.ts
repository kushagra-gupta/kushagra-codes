import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationRoutes } from 'src/configurations/routes';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule),
    runGuardsAndResolvers: 'always',
    pathMatch: 'full'
    // children: [
    //   {
    //     path: '',
    //     redirectTo: ApplicationRoutes.home,
    //     runGuardsAndResolvers: 'always',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: ApplicationRoutes.home,
    //     loadChildren: () => import('./../pages/home/home.module').then(m => m.HomeModule)
    //   }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
