import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeddingComponent } from './wedding/wedding.component';

const routes: Routes = [
  { path: '', component: WeddingComponent },
  { path: ':id', component: WeddingComponent },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
