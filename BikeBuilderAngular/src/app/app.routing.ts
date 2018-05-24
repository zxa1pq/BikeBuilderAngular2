import { RouterModule } from '@angular/router';
import { HomeComponent } from './Home.component';
import { BikeSelectorComponent } from './bike-selector.component';
import { BikeColorComponent } from './bikecolor.component';
import { BikeAccessoryComponent } from './bikeaccessory.component';
import { SummaryComponent } from './summary.component';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'models', component: BikeSelectorComponent },
    { path: 'colors', component: BikeColorComponent},
    { path: 'colors/:id', component: BikeColorComponent},
    { path: 'accessories', component: BikeAccessoryComponent},
    { path: 'accessories/:id', component: BikeAccessoryComponent},
    { path: 'summary', component: SummaryComponent}
]);
