import { RouterModule, Routes } from "@angular/router";
import { DirectivesComponent } from "./components/directives/directives.component";
import { BindingComponent } from './components/binding/binding.component';
import { InfoComponent } from './components/info/info.component';

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
		path: "services",
		component: InfoComponent
	}
		

]

export const routing = RouterModule.forRoot(routes);