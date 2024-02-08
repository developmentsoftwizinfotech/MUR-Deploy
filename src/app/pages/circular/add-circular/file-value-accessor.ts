import { Directive, ElementRef, HostListener, Renderer2, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';

@Directive({
  selector: 'p-fileUpload[formControlName],p-fileUpload[formControl]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileValueAccessorDirective),
      multi: true
    }
  ]
})
export class FileValueAccessorDirective implements ControlValueAccessor {
  private onChange: (value: any) => void;
  private onTouched: () => void;

  constructor(private el: ElementRef<FileUpload>, private renderer: Renderer2) { }

  @HostListener('onSelect', ['$event'])
  onSelect(files: File[]) {
    const file = files ? files[0] : null;
    this.onChange(file);
    this.renderer.setProperty(this.el.nativeElement, 'value', file);
  }

  writeValue(value: any): void {
    // Set the initial value of the file input
    this.renderer.setProperty(this.el.nativeElement, 'value', value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', isDisabled);
  }
}
