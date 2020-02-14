import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }        from './pages/home/home.component';
import { ListTablesComponent }  from './pages/list-tables/list-tables.component';

const routes: Routes = [
  {
    path     : 'home',
    component: HomeComponent,
    data     : { title: 'Home' }
  },
  {
    path     : 'list-tables',
    component: ListTablesComponent,
    data     : { title: 'Tables' }
  },
  {
    path      : '',
    redirectTo: '/list-tables',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
