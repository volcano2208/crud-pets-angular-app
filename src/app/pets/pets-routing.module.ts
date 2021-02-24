import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetFormComponent } from '../pet-form/pet-form.component';
import { PetsComponent } from './pets.component';

const routes: Routes = [{ path: '', component: PetsComponent },
{ path: 'pet-form', component: PetFormComponent },
{ path: 'pet-form/:id', component: PetFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
