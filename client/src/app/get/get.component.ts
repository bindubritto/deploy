import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {

  user: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(data => {
      console.log('data', data);
      this.user = data;
    }, (err: Error) => {
      console.log(err.message);
    })
  }

}
