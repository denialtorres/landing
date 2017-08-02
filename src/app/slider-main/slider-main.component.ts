import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-main',
  templateUrl: './slider-main.component.html',
  styleUrls: ['./slider-main.component.sass']
})
export class SliderMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = ['slider1.jpg', 'slider2.jpg', 'slider3.jpg', 'slider4.jpg'];


}
