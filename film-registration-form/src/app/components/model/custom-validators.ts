import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    public static match( formControlName: string) : ValidatorFn {
        return ( control: AbstractControl) : ValidationErrors | null => {
            const matchControl = control.root.get(formControlName);
            return control.value === matchControl?.value ? null : {macth: { field: formControlName}};4
        }
    }

    public static Date() : ValidatorFn {
        return ( c: AbstractControl) : ValidationErrors | null => {
            let day = c.value.substring(0, 2);
            let month = c.value.substring(2, 4);
            let year = c.value.substring(4, 8);
            day = Number(day);
            month = Number(month);
            year = Number(year);
            let errorDay = (day < 1 || day > 31) ? "Valores validos para dia é 1 a 31,": '';
            let errorMonth = (month < 1 || month > 12) ? "Valores validos para mês é 1 a 12,": '';
            let errorYear = (year === 0) ? "Ano no pode ser zero" : '';
            let isValid: Boolean = (errorDay.length == 0 && errorMonth.length == 0 && errorYear.length == 0 )? true: false ;
            return isValid && c.value.length == 8? null : { Date: { field:  `${errorDay} ${errorMonth} ${errorYear} Preencha a data coretamente!`}};

        }
    }
}

