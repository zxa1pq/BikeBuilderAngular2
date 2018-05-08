import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container"  style="text-align:center; padding-top:3%;">
  <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customize your new Stseps e8000 ebullitt bike';
}
