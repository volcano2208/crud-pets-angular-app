import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
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
export class PetsComponent implements AfterViewInit, OnInit {
  // tslint:disable-next-line: max-line-length
  constructor(public petService: PetService, private cd: ChangeDetectorRef) { }

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
  dataSource = new MatTableDataSource<Pet>();
  pets: Pet[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
    this.cd.detectChanges();
    // this.refresh();
  }
  ngOnInit(): void {
    this.getPets();
    this.refresh();
  }
  // tslint:disable-next-line: typedef
  getPets(): void {
    this.petService.getAll().subscribe((response) => {
      this.pets = response;
      this.dataSource = new MatTableDataSource<Pet>(this.pets);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // tslint:disable-next-line: no-shadowed-variable
    }, (error) => {
      console.log(error);
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
      // tslint:disable-next-line: no-shadowed-variable
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
