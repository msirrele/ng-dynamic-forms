import { Component, OnInit } from '@angular/core';
import { FormBase } from '../form-base';
import { DYNAMICFORMS } from '../mock-dynamic-forms';
import { DynamicFormService } from '../dynamic-form.service';

@Component({
	selector: 'app-dynamic-forms',
	templateUrl: './dynamic-forms.component.html',
	styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {
	dynamicForms: FormBase[];
	selectedDynamicForm: FormBase;
	constructor(private dfs: DynamicFormService) { }

	ngOnInit() {
		this.getDynamicForms();
	}

	getDynamicForms(): void {
		this.dfs.getDynamicForms()
			.subscribe(dynamicForms => this.dynamicForms = dynamicForms);
	}
}
