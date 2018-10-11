import { RouterModule, Routes } from "@angular/router";
import { DirectivesComponent } from "./components/directives/directives.component";

const routes: Routes = [
	{
		path: '',
		pathMatch: "full",
		redirectTo: "home"
	},
	{
		path: "home",
        component: DirectivesComponent
    }

]

export const routing = RouterModule.forRoot(routes);