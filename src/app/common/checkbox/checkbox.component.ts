import { Component, OnInit, Input, EventEmitter, Output, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CheckboxComponent implements ControlValueAccessor {

  constructor() { }



  @Input() label: string = '';
  @Input() isChecked = false;
  @Input() disabled = false;
  @Output() getChange = new EventEmitter();
  @Input() className: string = '';

  // get accessor
  get value(): any {
    return this.isChecked;
  }

  // set accessor including call the onchange callback
  set value(value: any) {
    this.isChecked = value;
  }

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;


  writeValue(value: any): void {
    if (value !== this.isChecked) {
      this.isChecked = value;
    }
  }

  onChange(isChecked:any): any {
    this.value = isChecked;
    this.getChange.emit(this.isChecked);
    this.onChangeCallback(this.value);
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {

  }

}
