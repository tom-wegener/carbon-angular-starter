import { Routes } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DocsComponent } from './pages/docs/docs.component';
import { SupportComponent } from './pages/support/support.component';
import { Link1Component } from './pages/link1/link1.component';
//import { ChartComponent } from './pages/charts/charts.component';
import { StarterHomeComponent } from './starter-home/starter-home/starter-home.component';

export const routes: Routes = [
	{
		path: '',
		component: StarterHomeComponent
	},
	{
		path: 'catalog',
		component: CatalogComponent
	},
	{
		path: 'docs',
		component: DocsComponent
	},
	{
		path: 'support',
		component: SupportComponent
	},
	{
		path: 'link1',
		component: Link1Component
	}
];
