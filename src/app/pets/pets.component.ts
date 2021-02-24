import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from '../categories/categories.component';
import { PetService } from '../pet.service';

export interface Pet {
  category: Category;
  id: number;
  name: string;
  status: {
    id: number,
    name: string,
  };
  // tslint:disable-next-line: ban-types
  tags: [Tag];
  photoUrls: [string];
}
export interface Tag {
  id: number;
  name: string;
}
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements AfterViewInit {
  constructor(private petService: PetService) { }
  displayedColumns: string[] = [
    'id',
    'name',
    'category',
    'tags',
    'status',
    'photoUrls',
    'edit',
    'delete',
  ];
  dataSource: any;
  hide = false;
  pets: Pet[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
    this.getPets();
    this.refresh();
  }
  // tslint:disable-next-line: typedef
  getPets(): void {
    this.petService.getAll().subscribe((response) => {
      this.hide = true;
      this.pets = response;
      this.dataSource = new MatTableDataSource<Pet>(this.pets);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  refresh(): void {
    this.getPets();
  }
  deletePet(id: number): void {
    this.petService.delete(id).subscribe(
      (response) => {
        console.log(response);
        this.refresh();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // tslint:disable-next-line: typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
