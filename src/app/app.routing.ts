import { RouterModule, Routes } from "@angular/router";
import { DirectivesComponent } from "./components/directives/directives.component";
import { BindingComponent } from './components/binding/binding.component';
import { InfoComponent } from './components/info/info.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: "full",
		redirectTo: "binding"
	},
	{
		path: "binding",
		component: BindingComponent
	},
	{
		path: "directives",
		component: DirectivesComponent
	},
	{
		path: "service",
		component: InfoComponent
	},
	{
		path: "form",
		component: FormComponent
	}	
]

export const routing = RouterModule.forRoot(routes);