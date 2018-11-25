import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'admin', component: AppComponent }
  // { path: '', pathMatch: 'full', redirectTo: '/employee/list' },
  // { path: '**', pathMatch: 'full', redirectTo: '/employee/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingmodule {}
