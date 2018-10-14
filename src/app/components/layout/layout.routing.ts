import { Routes } from '@angular/router';

import { BindingComponent } from '../binding/binding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { FormComponent } from '../form/form.component';
import { InfoComponent } from '../info/info.component';
import { LifecycleComponent } from '../../components/lifecycle/lifecycle.component';

export const LayoutRoutes: Routes = [
    { path: 'binding', component: BindingComponent },
    { path: 'directive', component: DirectivesComponent },
    { path: 'service', component: InfoComponent },
    { path: 'form', component: FormComponent },
    { path: 'lifecycle', component: LifecycleComponent }
];
