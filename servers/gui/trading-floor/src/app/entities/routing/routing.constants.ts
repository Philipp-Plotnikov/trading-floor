import {Routes} from '@angular/router';
import {ERouting} from '@entities/routing/routing.enums';

export const HOME_ROUTE = ERouting.Pages.Main;

export const REDIRECT_ROUTES: Routes = [
	{
		path: '**',
		redirectTo: HOME_ROUTE,
	},
];
