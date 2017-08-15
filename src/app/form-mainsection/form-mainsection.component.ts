import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

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

  constructor(private fb: FormBuilder, private http: Http) {

    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'telephone' : [null,Validators.required],
      'mail' : [null, Validators.compose([ Validators.required, Validators.email ])],
      'availability' : [null, Validators.required]
    });

  }
//http://192.168.64.2/puntaaltaphp/response.php
  addPost(post) {

    this.http.post('http://192.168.64.2/backend/do_contact.php',post)
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