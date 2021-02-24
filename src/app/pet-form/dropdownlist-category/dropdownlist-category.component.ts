import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Category } from 'src/app/category-form/category-form.component';

@Component({
  selector: 'app-dropdownlist-category',
  templateUrl: './dropdownlist-category.component.html',
  styleUrls: ['./dropdownlist-category.component.css']
})
export class DropdownlistCategoryComponent implements OnInit {
  @Output() sendCategory = new EventEmitter();
  @Input() receive: string;
  constructor() { }
  listCategory: Category[] = JSON.parse(localStorage.getItem('categories'));
  choiceCategory: Category;

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  changeCategory(event) {
    if (this.receive === '') {
      this.sendCategory.emit(event.value);
    }
  }
  // tslint:disable-next-line: typedef
  changeReceive() {
    this.choiceCategory = JSON.parse(this.receive);
  }
}
