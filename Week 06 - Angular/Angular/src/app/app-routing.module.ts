import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryViewComponent } from './category/components/category-view/category-view.component';
import { CategoryEditComponent } from './category/components/category-edit-add/category-edit.component';
import { ProductViewComponent } from './products/product-view/product-view.component';
import { ProductEditAddComponent } from './products/product-edit-add/product-edit-add.component';

const routes: Routes = [
  { path: '', component: CategoryViewComponent },
  { path: 'products', component: ProductViewComponent },
  {
    path: 'category',
    canActivate: [],
    children: [
      { path: '', component: CategoryViewComponent },
      { path: ':mode', component: CategoryEditComponent },
      { path: ':mode/:id', component: CategoryEditComponent }
    ]
  },
  {
    path: 'products',
    canActivate: [],
    children: [
      { path: '', component: ProductViewComponent },
      { path: ':mode', component: ProductEditAddComponent },
      { path: ':mode/:id', component: ProductEditAddComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
