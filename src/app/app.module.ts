import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { heroSwitchComponents } from './model/hero-switch';
import { HighlightDirective } from './directives/highlight.directive';

//import routing 
import { routing } from './app.routing'
@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    heroSwitchComponents,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
