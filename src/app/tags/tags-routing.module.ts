import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagFormComponent } from '../tag-form/tag-form.component';
import { TagsComponent } from './tags.component';

const routes: Routes = [
  { path: '', component: TagsComponent },
  { path: 'tag-form', component: TagFormComponent },
  { path: 'tag-form/:id', component: TagFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
