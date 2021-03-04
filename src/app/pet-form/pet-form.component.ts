import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../category-form/category-form.component';
import { PetService } from '../pet.service';
import { Pet, Tag } from '../pets/pets.component';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css'],
})
export class PetFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public petService: PetService,
    private activeRoute: ActivatedRoute
  ) { }
  categories: Category[] = JSON.parse(localStorage.getItem('categories'));
  tags: Tag[] = JSON.parse(localStorage.getItem('tags'));
  petForm = this.formBuilder.group({
    id: null,
    name: new FormControl(null, [nameRangeValidator]),
    category: new FormControl(null, [Validators.required]),
    status: new FormControl(''),
    tags: new FormControl([]),
    photoUrls: [],
  });
  id: number;
  flag = false;
  isLoading = false;
  ngOnInit(): void {
    if (this.router.url.length > 14) {
      // tslint:disable-next-line: no-string-literal
      this.id = this.activeRoute.snapshot.params['id'];
      this.getUpdatePetById(this.id);
      this.flag = true;
    }
  }
  // tslint:disable-next-line: typedef
  toggleLoading(pet: Pet) {
    this.isLoading = true;
    setTimeout(() => {
      pet.id = Math.floor(Math.random() * 100 + 1); // set id identity và tăng dần
      pet.photoUrls = [''];
      this.petForm.reset();
      this.router.navigateByUrl('/pets');
      this.petService.create(pet).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
      this.isLoading = false;
    }, 3000);
  }
  // tslint:disable-next-line: typedef
  getUpdatePetById(id: number) {
    this.petService.get(id).subscribe(
      (pet: Pet) => {
        this.petForm.controls.name.setValue(pet.name);
        if (!this.categories.find(x => x.id === pet.category.id)) {
          this.categories.push(pet.category);
        }
        localStorage.setItem('categories', JSON.stringify(this.categories));
        const categoryX = this.categories.find(x => x.id === pet.category.id);
        this.petForm.controls.category.setValue(categoryX);
        this.petForm.controls.status.setValue(pet.status);
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < pet.tags.length; index++) {
          const element = pet.tags[index];
          if (!this.tags.find(x => x.id === element.id)) {
            this.tags.push(element);
          } else {
            this.tags = pet.tags;
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // tslint:disable-next-line: typedef
  updatePet() {
    this.petService.update(this.id, this.petForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getControl(key: string): AbstractControl {
    return this.petForm.get(key);
  }
}
function nameRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value === 'cat') {
    console.log('validate error');
    return { nameRange: true };
  }
  return null;
}
