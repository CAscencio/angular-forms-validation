import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

// import Validation from './utils/validation';
import { checkFormControlCss } from './utils/formUtils';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userForm: any;
  checkFormControlCss = checkFormControlCss;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      typeDocument: ['', [Validators.required]],
      documentNumber: ['', [Validators.required]],
      address: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('9[0-9]{8}')]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      date: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.userForm.valid) {
      this.toastr.success('Formulario Valido', 'Todos los datos son correctos');
      console.log('Form data:', this.userForm.value);
    } else {
      this.toastr.error('Formulario Incorrecto', 'Los datos no son correctos');
      console.error('Form data:', this.userForm.value);
    }
  }
  
  imprimir(event: any) {
    console.log('Date: ', this.date.value);
    
  }

  selectionChanged(event: any) {
    const value = event.target.value;
    console.log('Valor seleccionado: ', value);
    
    this.userForm.controls['documentNumber'].clearValidators();

    if (value === 'DNI') {      
      this.userForm.controls['documentNumber'].setValidators([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
      ]);
    }

    if (value === 'CE') {
      this.userForm.controls['documentNumber'].setValidators([
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(15)
      ]);
    }

    this.documentNumber.updateValueAndValidity();
  }

  get name(): AbstractControl {
    return this.userForm.get('name');
  }

  get email(): AbstractControl {
    return this.userForm.get('email');
  }

  get typeDocument(): AbstractControl {
    return this.userForm.get('typeDocument');
  }

  get documentNumber(): AbstractControl {
    return this.userForm.get('documentNumber');
  }

  get address(): AbstractControl {
    return this.userForm.get('address');
  }

  get mobile(): AbstractControl {
    return this.userForm.get('mobile');
  }

  get age(): AbstractControl {
    return this.userForm.get('age');
  }

  get date(): AbstractControl {
    return this.userForm.get('date');
  }

  get gender(): AbstractControl {
    return this.userForm.get('gender');
  }
}
