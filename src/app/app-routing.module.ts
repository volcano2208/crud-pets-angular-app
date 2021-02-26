import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';

const routes: Routes = [
  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'tags', loadChildren: () => import('./tags/tags.module').then(m => m.TagsModule) },
  { path: 'pets', loadChildren: () => import('./pets/pets.module').then(m => m.PetsModule) },
  { path: '404page', component: ErrorPageComponent },
  { path: 'profile', component: ProfileUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
