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
      address: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
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

  get name(): AbstractControl {
    return this.userForm.get('name');
  }

  get email(): AbstractControl {
    return this.userForm.get('email');
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

  get gender(): AbstractControl {
    return this.userForm.get('gender');
  }
}
