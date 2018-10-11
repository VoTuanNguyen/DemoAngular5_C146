import { RouterModule, Routes } from "@angular/router";
import { DirectivesComponent } from "./components/directives/directives.component";
import { BindingComponent } from './components/binding/binding.component';

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
	}
		

]

export const routing = RouterModule.forRoot(routes);