import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-mainsection',
  templateUrl: './form-mainsection.component.html',
  styleUrls: ['./form-mainsection.component.sass']
})
export class FormMainsectionComponent implements OnInit {


  emailSend = false;
  sendfalse = false;

  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  name:string = '';
  telephone:string = '';
  mail:string = '';
  availability:string = '';
  titleAlert:string = 'El campo es requerido';
  mailAlert:string ="El formato de correo es incorrecto";

  constructor(private fb: FormBuilder, private http: Http, private router: Router) {

    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'telephone' : [null,Validators.required],
      'mail' : [null, Validators.compose([ Validators.required, Validators.email ])],
      'availability' : [null, Validators.required]
    });

  }
//http://192.168.64.2/puntaaltaphp/response.php
  addPost(post) {

    //HERE IS WHERE YOU SEND TO THE THANK YOU PAGE
    //AFTER CONTIDION TRUE
    console.log('das click')
    
    this.router.navigate(['./success']);

    this.http.post('do_contact.php',post)
        .subscribe(
            data => {
              let body = data.text()
                if(body== "true"){
                  console.log(body)
                  this.emailSend = true
                  this.sendfalse = false
                }else{
                  console.log(body)
                  this.emailSend = true
                  this.sendfalse = true
                }

            },
            err => {
              console.log("ERROR!: ", err);
              this.sendfalse = true
            }
        )
  }
  reSend(){
    this.sendfalse = false
    this.emailSend = false;
  }
  ngOnInit() {
  }


}
