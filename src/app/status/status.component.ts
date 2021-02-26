import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, Validator, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StatusComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => StatusComponent),
      multi: true,
    }
  ],
})
export class StatusComponent implements ControlValueAccessor, Validator {
  statusList: string[] = ['available', 'pending', 'sold'];
  private statusData: string;
  onChange: (statusData: any) => void;
  onTouched: () => void;
  isDisabled: boolean;
  isSelect(statusString: string): boolean {
    const res = !this.statusData ? false : (statusString === this.statusData);
    return res;
  }
  writeValue(obj: any): void {
    this.statusData = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  validate(c: FormControl): ValidationErrors | null {
    if (this.statusData === 'pending') {
      return null;
    } else {
      return { invalidForm: { valid: false } };
    }
  }
  // tslint:disable-next-line: typedef
  handleOnStatusChange(event) {
    // tslint:disable-next-line: radix
    const statusString: string = event.target.value;
    const statusSelect = this.statusList.find(status => status === statusString);
    this.writeValue(statusSelect);
    this.onChange(statusSelect);
  }
}
