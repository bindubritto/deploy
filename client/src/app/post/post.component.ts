import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  orderForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.createOrderForm();
  }

  createOrderForm() {
    this.orderForm = this.formBuilder.group({
      name: [null, Validators.required],
    });
  }

  createOrder() {
    console.log('submitted clicked');

    const formData = this.orderForm.value;
    console.log(formData);

    this.apiService.createUser(formData).subscribe(data => {
      this.route.navigate(['/get']);
    }, err => {
      console.log(err.message);
    })

  }

}
