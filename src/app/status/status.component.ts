import { Component, forwardRef, Input } from '@angular/core';
import * as forms from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers: [
    {
      provide: forms.NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StatusComponent),
      multi: true,
    },
    {
      provide: forms.NG_VALIDATORS,
      useExisting: forwardRef(() => StatusComponent),
      multi: true,
    }
  ],
})
export class StatusComponent implements forms.ControlValueAccessor, forms.Validator {
  statusList: string[] = ['available', 'pending', 'sold'];
  public form = new FormGroup({
    statusData: new FormControl('', Validators.required)
  });
  onTouched: () => void;
  isDisabled: boolean;
  writeValue(obj: any): void {
    this.form.controls.statusData.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.form.controls.statusData.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {

  }
  validate(c: forms.AbstractControl): forms.ValidationErrors | null {
    return this.form.controls.statusData.valid ? null : { invalidForm: { valid: false } };
  }
}
