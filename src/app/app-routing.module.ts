import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfiniteScrollComponent } from './main/infinite-scroll/infinite-scroll.component';
import { PaginatorComponent } from './main/paginator/paginator.component';

const routes: Routes = [
  { path: '', component: InfiniteScrollComponent },
  { path: 'paginator', component: PaginatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
