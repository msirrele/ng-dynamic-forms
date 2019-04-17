import { Component, OnInit } from '@angular/core';
import { FormBase } from '../form-base';
import { DYNAMICFORMS } from '../mock-dynamic-forms';
import { DynamicFormService } from '../dynamic-form.service';
import { DynamicFormBuilderStore } from '../dynamic-form-builder.store';

@Component({
	selector: 'app-dynamic-forms',
	templateUrl: './dynamic-forms.component.html',
	styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {
	dynamicForms: FormBase[];
	selectedDynamicForm: FormBase;
	constructor(
		private dfs: DynamicFormService,
		private dfbStore: DynamicFormBuilderStore
	) { }

	ngOnInit() {
		this.getDynamicForms();
		this.dfbStore.state$.subscribe(state => {
			// logic to execute on state update
		});
	}

	getDynamicForms(): void {
		this.dfs.getDynamicForms()
			.subscribe(dynamicForms => this.dynamicForms = dynamicForms);
	}
}
