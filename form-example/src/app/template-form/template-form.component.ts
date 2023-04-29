import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  @ViewChild('f') signUpForm: NgForm | undefined;
  defaultPet = 'pet';
  answer = '';
  genders = ['male' , 'female'];
  user = {
    username : "" ,
    email : "",
    secretQuestion : "" ,
    answer : "",
    gender : ""
  }
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm?.setValue({
    //   userData : {
    //     username : suggestedName,
    //     email : '',
    //   },
    //   secret : 'pet',
    //   questionAnswer: '',
    //   gender : 'male'
    // })

    this.signUpForm?.form.patchValue({
      userData : {
        username : suggestedName
      }
    })
  }

  // OnSubmit(element: NgForm) {
  //   console.log(element)
  // }

  OnSubmit() {
    // console.log(this.signUpForm)
    this.submitted = true;
    this.user.username = this.signUpForm?.value.userData.username 
    this.user.email = this.signUpForm?.value.userData.email 
    this.user.secretQuestion = this.signUpForm?.value.secret 
    this.user.answer = this.signUpForm?.value.questionAnswer
    this.user.gender = this.signUpForm?.value.gender 

    this.signUpForm?.reset()
  }
}
