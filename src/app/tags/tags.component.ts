import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';

export interface Tag {
  id: number;
  name: string;
}
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private router: Router) {
    this.router.events.subscribe((addCate) => {
      if (addCate instanceof NavigationEnd) {
        const TAGS: Tag[] = JSON.parse(localStorage.getItem('tags') || '[]');
        this.dataSource = new MatTableDataSource<Tag>(TAGS);
      }
    });
  }
  displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  tags: Tag[];
  dataSource: any;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  // tslint:disable-next-line: typedef
  delete(id: number) {
    this.tags = JSON.parse(localStorage.getItem('tags'));
    this.tags = this.tags.filter((cate) => cate.id !== id);
    localStorage.setItem('tags', JSON.stringify(this.tags));
    this.dataSource = new MatTableDataSource<Tag>(this.tags);
  }
  // tslint:disable-next-line: typedef
  getTagUpdate(id: number) {
    this.router.navigate(['/Tag-Form', id]);
  }
}
