import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-bike',
    template: `
    <nav class="cd-builder-main-nav disabled">
			<ul>
				<li class="active"><a href="#models">Models</a></li>
				<li><a href="#colors">Colors</a></li>
				<li><a href="#accessories">Accessories</a></li>
				<li><a href="#summary">Summary</a></li>
			</ul>
    </nav>
    <div class="row justify-content-md-center">
  <div class="">
  <div class="thumbnail">
  <div class="caption">
  <h3> Bike name </h3>
  </div>
  <img src="{{ bikeimg }}" style="height: 250px; width: 250px;"/>
  <p>Price: 5000$</p>
  <label><input type="radio" name="optradio">Option 1</label>
  </div>
  </div>
  </div>
  <footer class="cd-builder-footer disabled step-1">
  <div class="selected-product">
    <img src="assets/img/product01_col01.jpg" alt="Product preview" style="height: 91px;">

    <div class="tot-price">
      <span>Total</span>
      <span class="total">$<b>0</b></span>
    </div>
  </div>
  <nav class="cd-builder-secondary-nav">
    <ul>
      <li class="next nav-item">
        <ul>
          <li class="visible" (click)="myFunc()"><a href="#0">Colors</a></li>
          <li><a href="#0">Accessories</a></li>
          <li><a href="#0">Summary</a></li>
          <li class="buy"><a href="#0">Buy Now</a></li>
        </ul>
      </li>
      <li class="prev nav-item">
        <ul>
          <li class="visible"><a href="#0">Models</a></li>
          <li><a href="#0">Models</a></li>
          <li><a href="#0">Colors</a></li>
          <li><a href="#0">Accessories</a></li>
        </ul>
      </li>
    </ul>
  </nav>

  <span class="alert">Please, select a model first!</span>
</footer>
    `,
    styleUrls: ['./app.component.css']
})

export class BikeComponent {
  constructor(private _router: Router, private _route: ActivatedRoute) {
}


    bikeimg = 'assets/img/E8000_white_Race.jpg';
    myFunc() {
        console.log('function called');
      }
}
