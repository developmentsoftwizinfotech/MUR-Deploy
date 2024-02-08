import { AbstractControl, FormControl, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn } from '@angular/forms';
// import { ErrorStateMatcher } from "@angular/material/core";

export class CustomStateError {

  // isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
  //     const isSubmitted = form && form.submitted;
  //     return control?.dirty&& control.errors?.['required'];
  //     // return !!(control && control.invalid);class="btn-sm"
  // }

  public WhitespacesInvalid(): ValidatorFn {
    //debugger
    return (control: AbstractControl): ValidationErrors | null => {
      const isWhitespace = (control.value || '').trim().length === 0;

      const isValid = !isWhitespace;
      if (isValid) {
        return isValid ? null : { 'whitespaceInvalid': true };

      } else {
        return null
      }
    }

  }



  trimFormValues(nbform: any) {
    const formValues = nbform.value;
    Object.keys(formValues).forEach(key => {
      const controlValue = formValues[key];
      if (typeof controlValue === 'string') {
        formValues[key] = controlValue.trim();
      }
    }
    );
  }
  duplicateValidator(Data: any[], name: string, initialVal: string): ValidatorFn {
    debugger
    return (control: AbstractControl): ValidationErrors | null => {
      //debugger
      console.log(Data, "valuse")
      if (Data !== undefined || initialVal !== null) {
        debugger

        const value = control.value?.toLowerCase().trim();
        if (value !== initialVal?.toLowerCase().trim() && value !== null) {
          debugger
          const isDuplicate = Data.some(list => list[name]?.toLowerCase().trim() == value?.toLowerCase().trim());

          return isDuplicate ? { 'duplicateValue': true } : null;
        }
      }
      else {
        return null;
      }
    };
  }
  dateRangeValidator(startedDate, endedDate): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      //debugger
      const startDate: Date = new Date(control.get(startedDate).value);
      const endDate: Date = new Date(control.get(endedDate).value);
      if (!endDate) {
        control.get(endedDate).setErrors({ invalidDateRange: false, required: true });
        return { required: true }
      }
      if (startDate && endDate && startDate >= endDate) {
        control.get(endedDate).setErrors({ invalidDateRange: true, required: false });
        return { invalidDateRange: true };
      }
      control.get(endedDate).setErrors(null);
      return null

    }

  }


  duplicateValidatorNumber(Data: any[], name: string, initialVal: number): ValidatorFn {
    //debugger
    return (control: AbstractControl): ValidationErrors | null => {
      console.log(Data, "valuse")
      if (Data !== undefined) {

        const value = control.value;
        if (value !== initialVal && value !== null) {
          const isDuplicate = Data.some(list => list[name] == value);

          return isDuplicate ? { 'duplicateValue': true } : null;
        }
      }
      else {
        return null;
      }
    };
  }
  filterDateRangeList(event, listArr,filterBy) {
    const startDate = new Date(event.start);
    const timeZoneOffset = startDate.getTimezoneOffset();
    startDate.setMinutes(startDate.getMinutes() - timeZoneOffset);
    const splitValue = startDate.toISOString().split('T');
    const dataPickVoyageCommenceStartDate = splitValue[0] + 'T00:00:00';

    const endDate = new Date(event.end);
    const timeZoneOffsets = endDate.getTimezoneOffset();
    endDate.setMinutes(endDate.getMinutes() - timeZoneOffsets);
    const splitValueend = endDate.toISOString().split('T');
    const dataPickVoyageCommenceEndDate = splitValueend[0] + 'T00:00:00';

    if (startDate && endDate) {
      listArr = listArr.filter(item => {
        return item[filterBy].toString() >= dataPickVoyageCommenceStartDate && item[filterBy].toString() <= dataPickVoyageCommenceEndDate;
      });
      return listArr
    }
  }


  changeDateTimeZone(changeDate) {
    const selectedDate: Date = new Date(changeDate);
    const timeZoneOffset = selectedDate.getTimezoneOffset();
    selectedDate.setMinutes(selectedDate.getMinutes() - timeZoneOffset);
    const updatedDate = selectedDate.toISOString().split('T')[0];
    return updatedDate
  }
}
