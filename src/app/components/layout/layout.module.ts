import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NguiMapModule} from '@ngui/map';

import { LayoutRoutes } from './layout.routing';

import { BindingComponent } from '../binding/binding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { FormComponent } from '../form/form.component';
import { InfoComponent } from '../info/info.component';
import { heroSwitchComponents } from '../../model/hero-switch';
import { HighlightDirective } from '../../directives/highlight.directive';
import { LifecycleComponent } from '../../components/lifecycle/lifecycle.component';
import { ChildsComponent } from '../../components/childs/childs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule
  ],
  declarations: [
    BindingComponent,
    FormComponent,
    DirectivesComponent,
    InfoComponent,
    heroSwitchComponents,
    HighlightDirective,
    LifecycleComponent,
    ChildsComponent
  ]
})

export class LayoutModule {}
