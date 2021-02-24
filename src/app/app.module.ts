import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoryFormComponent } from './category-form/category-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagFormComponent } from './tag-form/tag-form.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { DisplayTagsPipe } from './display-tag.pipe';
import { StatusComponent } from './status/status.component';
import { DropdownlistCategoryComponent } from './pet-form/dropdownlist-category/dropdownlist-category.component';
import { LoggingInterceptor } from './logging.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    CategoryFormComponent,
    TagFormComponent,
    PetFormComponent,
    DisplayTagsPipe,
    StatusComponent,
    DropdownlistCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
