import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { CurtidosComponent } from './components/curtidos/curtidos.component';

const routes: Routes = [
  { path: '', component: WatchListComponent },
  { path: 'curtidos', component: CurtidosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
