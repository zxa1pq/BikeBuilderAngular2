import { RouterModule } from '@angular/router';
import { BikeComponent } from './bike.component';
import { HomeComponent } from './Home.component';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'start', component: BikeComponent }
]);
