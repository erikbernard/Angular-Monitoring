import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    public static match( formControlName: string) : ValidatorFn {
        return ( control: AbstractControl) : ValidationErrors | null => {
            const matchControl = control.root.get(formControlName);
            return control.value === matchControl?.value ? null : {macth: { field: formControlName}};4
        }
    }
}