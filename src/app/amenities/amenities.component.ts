import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.sass']
})
export class AmenitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
}
