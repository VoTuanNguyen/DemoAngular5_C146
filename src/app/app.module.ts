import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { heroSwitchComponents } from './model/hero-switch';
import { HighlightDirective } from './directives/highlight.directive';

//import routing 
import { routing } from './app.routing';
import { BindingComponent } from './components/binding/binding.component';
import { InfoComponent } from './components/info/info.component';

import { MyServiceService } from './services/my-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    heroSwitchComponents,
    HighlightDirective,
    BindingComponent,
    InfoComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
