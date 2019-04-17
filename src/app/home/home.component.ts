import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [QuestionService]
})
export class HomeComponent implements OnInit {
	title = 'dynamic-forms';

	questions: any[];

	constructor(service: QuestionService) {
		this.questions = service.getQuestions();
	}
	ngOnInit() {
	}
}
