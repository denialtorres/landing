import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    var prev = 200
    var $window = $(window)
    var nav = $('.navbar-fixed-top')
    nav.hide()

    $window.on('scroll', function(){
        var scrollTop = $window.scrollTop()
        if(scrollTop > prev)
          nav.fadeIn('slow')
        else
          nav.fadeOut('slow')
    })

  }

}
