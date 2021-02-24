import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownlistCategoryComponent } from './dropdownlist-category.component';

describe('DropdownlistCategoryComponent', () => {
  let component: DropdownlistCategoryComponent;
  let fixture: ComponentFixture<DropdownlistCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownlistCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownlistCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
