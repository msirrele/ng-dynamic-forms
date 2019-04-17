import { Component, OnInit, Input } from '@angular/core';
import { FormBase } from '../form-base';
import { ActivatedRoute } from '@angular/router';
import { DynamicFormService } from '../dynamic-form.service';
import { Location } from '@angular/common';

@Component({
	selector: 'app-dynamic-form-detail',
	templateUrl: './dynamic-form-detail.component.html',
	styleUrls: ['./dynamic-form-detail.component.css']
})
export class DynamicFormDetailComponent implements OnInit {
	@Input() dynamicForm: FormBase;
	constructor(
		private route: ActivatedRoute,
		private dfs: DynamicFormService,
		private location: Location
	) { }

	ngOnInit(): void {
		this.getDynamicForm();
	}

	getDynamicForm() {
		const id = +this.route.snapshot.paramMap.get('_id');
		const _id = id.toString();
			this.dfs.getDynamicForm(_id)
				.subscribe(dynamicForm => this.dynamicForm = dynamicForm);
	}

	goBack(): void {
		this.location.back();
	}
}