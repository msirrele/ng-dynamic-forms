import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DynamicFormDetailComponent } from './dynamic-form-detail/dynamic-form-detail.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full',
	},
	{
		path: 'home',
		component: HomeComponent,
  },
  {
    path: 'dynamic-forms',
    component: DynamicFormsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:_id',
    component: DynamicFormDetailComponent
  }
];
