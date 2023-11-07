import { AbstractControl } from "@angular/forms";

const isInvalid = (formControl: AbstractControl): boolean => {
    return formControl.invalid && (formControl.dirty || formControl.touched);
};

const isValid = (formControl: AbstractControl): boolean => {
    return formControl.valid && (formControl.dirty || formControl.touched);
};

const checkFormControlCss = (formControl: AbstractControl) => {
    return {
        'is-valid': isValid(formControl),
        'is-invalid': isInvalid(formControl),
    };
};

export { checkFormControlCss };