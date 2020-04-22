import {Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Injectable} from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-feature',
  styleUrls: ['./feature-component.component.css'],
  templateUrl:'./feature-component.component.html'
})


@Injectable({ providedIn: 'root' })

export class  FeatureComponent implements OnInit{
     public username: string;
     public password:string;
     model:any = {};
 
    contactForm: FormGroup;
    submitted = false;
    
 
    constructor(private formBuilder: FormBuilder) { 
        this.username = "";
        this.password = "";
    }

 
 
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            username: ['', Validators.required],
            //lastName: ['', Validators.required],
            //email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
 
    // convenience getter for easy access to form fields
    get f() { return this.contactForm.controls; }
 
    onSubmit(f: NgForm) {
        this.submitted = true;
 
        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }
 
        alert('SUCCESS!! :-)');
         
    }

   
    

}


