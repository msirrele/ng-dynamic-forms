import { Component, NgZone } from '@angular/core';
import { QuestionService } from './question.service';
import * as Geolocation from 'nativescript-geolocation';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [QuestionService]
})
export class AppComponent {
	questions: any[];

	constructor(
		service: QuestionService,
		private zone: NgZone
	) {
		this.questions = service.getQuestions();
	}
}
