import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function isRequiredValidator(id: string, title: string): ValidatorFn{
    return(control: AbstractControl): ValidationErrors | null =>
    {
        const value1 = control.get(id)?.value;
        const value2 = control.get(title)?.value;

            if (value1 !== ""  || value2 !=="") {
                return null;
            } else {
                return {"isRequired": {actual: value1, expected: value2}}
            }
    }

}