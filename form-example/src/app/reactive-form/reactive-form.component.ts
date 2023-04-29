import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  forbiddenUserName:Array<string> = ['chris' ,'lol']

  constructor() {
    
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username' :  new FormControl(null, [Validators.required , this.forBiddenNames.bind(this)]) ,
        'email' : new FormControl(null , [Validators.email, Validators.required], this.forbiddenEmails)
      }),
      'gender' : new FormControl('male'),
      'hobbies' : new FormArray([])
    });
    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value)
    })

    this.signupForm.setValue({
      'userData' : {
        'username' :  'max' ,
        'email' : 'max@gmail.com'
      },
      'gender' :'male',
      'hobbies' : []
    })

    this.signupForm.patchValue({
      'userData' : {
        'username' :  'Anna' ,
      },
    })
  }

  onSubmit() {
    console.log(this.signupForm)
    this.signupForm.reset()
  }

  addHobby() {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbies') as FormArray).push(control)
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forBiddenNames(control: FormControl) : {[s:string] : boolean} | null {
    if(this.forbiddenUserName.indexOf(control.value) !== -1) {
        return {'forbiddenUserName' : true}                
    }
    return null;
  }

  forbiddenEmails(control: AbstractControl) : Promise<any|null> | Observable<any|null> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'arjunan-udayan@socialtalentagency.com') {
          resolve({'emailIsForbidden' : true})
        } else {
          resolve(null)
        }
      }, 1500)
    })

    return promise;
  }
}
