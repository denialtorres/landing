import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-section',
  templateUrl: './design-section.component.html',
  styleUrls: ['./design-section.component.sass']
})
export class DesignSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
}
