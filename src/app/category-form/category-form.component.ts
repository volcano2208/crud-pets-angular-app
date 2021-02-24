import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
export interface Category {
  id: number;
  name: string;
}
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})

export class CategoryFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { }
  categories: any[] = JSON.parse(localStorage.getItem('categories') || '[]');
  categoryForm = this.formBuilder.group({
    id: null,
    name: new FormControl(null, Validators.required),
  });
  flag = false;
  ngOnInit(): void {
    if (this.router.url.length > 25) {
      this.getCateUpdate();
    }
  }
  // tslint:disable-next-line: typedef
  addCategory() {
    const lastCate: Category = _.cloneDeep(this.categories).pop();
    this.categoryForm.value.id = lastCate ? lastCate.id + 1 : 1;
    this.categories.push(this.categoryForm.value);
    localStorage.setItem('categories', JSON.stringify(this.categories));
    this.categoryForm.reset();
    this.router.navigateByUrl('/categories');
  }
  getCateUpdate(): void {
    const idString = this.activeRouter.snapshot.paramMap.get('id');
    // tslint:disable-next-line: radix
    const idNumber = parseInt(idString);
    // tslint:disable-next-line: no-shadowed-variable
    const updateCate: Category = this.categories.find(
      (item) => item.id === idNumber
    );
    this.categoryForm.setValue(updateCate);
    this.flag = true;
  }
  updateCate(): void {
    try {
      const findUpdateItem: Category = this.categoryForm.value;
      for (const item in this.categories) {
        if (this.categories[item].id === findUpdateItem.id) {
          this.categories[item] = findUpdateItem;
        }
      }
      localStorage.setItem('categories', JSON.stringify(this.categories));
    } catch (error) { }
  }
}
