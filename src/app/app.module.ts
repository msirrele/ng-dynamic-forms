import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule, MatMenuModule } from '@angular/material';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { DynamicFormDetailComponent } from './dynamic-form-detail/dynamic-form-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		DynamicFormComponent,
		DynamicFormQuestionComponent,
		DynamicFormsComponent,
		DynamicFormDetailComponent,
		MessagesComponent,
		DashboardComponent
	],
	imports: [
		HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
    MatButtonModule,
    MatCheckboxModule,
		MatCardModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		MatIconModule,
		MatMenuModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
