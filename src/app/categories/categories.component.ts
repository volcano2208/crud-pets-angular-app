import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';
export interface Category {
  id: number;
  name: string;
}
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  dataSource: any;
  listCate: Category[] = [];
  constructor(private router: Router) {
    this.router.events.subscribe((addCate) => {
      if (addCate instanceof NavigationEnd) {
        const CATEGORIES: Category[] = JSON.parse(
          localStorage.getItem('categories') || '[]'
        );
        this.dataSource = new MatTableDataSource<Category>(CATEGORIES);
      }
    });
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  // tslint:disable-next-line: typedef
  delete(id: number) {
    this.listCate = JSON.parse(localStorage.getItem('categories'));
    this.listCate = this.listCate.filter((cate) => cate.id !== id);
    localStorage.setItem('categories', JSON.stringify(this.listCate));
    this.dataSource = new MatTableDataSource<Category>(this.listCate);
  }
  // tslint:disable-next-line: typedef
  getCategoryUpdate(id: number) {
    this.router.navigate(['category-form', id]);
  }
}
