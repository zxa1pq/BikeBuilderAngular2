import { RouterModule } from '@angular/router';
import { FrontpageComponent } from './frontpage.component';
import { BikeComponent } from './bike.component';
import { BlankComponent } from './blank.component';

export const routing = RouterModule.forRoot([
    { path: '', component: FrontpageComponent },
    { path: 'builder', component: BlankComponent, pathMatch: 'full'},
    { path: 'blank', component: BlankComponent}
]);
