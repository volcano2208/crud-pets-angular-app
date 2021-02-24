import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { Tag } from '../pets/pets.component';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.css'],
})
export class TagFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { }
  tagForm = this.formBuilder.group({
    id: null,
    name: new FormControl(null, Validators.required),
  });
  tags: Tag[] = JSON.parse(localStorage.getItem('tags') || '[]');
  flag = false;
  ngOnInit(): void {
    if (this.router.url.length > 14) {
      this.getTagUpdate();
    }
  }
  // tslint:disable-next-line: typedef
  addTag() {
    const lastTag: Tag = _.cloneDeep(this.tags).pop();
    this.tagForm.value.id = lastTag ? lastTag.id + 1 : 1;
    this.tags.push(this.tagForm.value);
    localStorage.setItem('tags', JSON.stringify(this.tags));
    this.tagForm.reset();
    this.router.navigateByUrl('/tags');
  }
  getTagUpdate(): void {
    const idString = this.activeRouter.snapshot.paramMap.get('id');
    // tslint:disable-next-line: radix
    const idNumber = parseInt(idString);
    const updateTag: Tag = this.tags.find((item) => item.id === idNumber);
    this.tagForm.setValue(updateTag);
    this.flag = true;
  }
  updateTag(): void {
    try {
      const findUpdateItem: Tag = this.tagForm.value;
      for (const item in this.tags) {
        if (this.tags[item].id === findUpdateItem.id) {
          this.tags[item] = findUpdateItem;
        }
      }
      localStorage.setItem('tags', JSON.stringify(this.tags));
    } catch (error) { }
  }
}
