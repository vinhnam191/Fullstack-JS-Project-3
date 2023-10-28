import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './modules/item-list/item-list.component';
import { NAVIGATES } from './utils/constants';
import { ItemDetailComponent } from './modules/item-detail/item-detail.component';

const routes: Routes = [
  {
    path: NAVIGATES.ITEM_LIST,
    component: ItemListComponent,
  },
  {
    path: NAVIGATES.ITEM_DETAIL + '/:id',
    component: ItemDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
