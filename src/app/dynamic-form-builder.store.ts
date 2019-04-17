import { Injectable } from '@angular/core';
import { Store } from './store';
import { DynamicFormBuilderState } from './dynamic-form-builder-state';

@Injectable()
export class DynamicFormBuilderStore extends Store<DynamicFormBuilderState> {
	constructor() {
		super(new DynamicFormBuilderState());
	}

	addDynamicForm(title: string): void {
		this.setState({
			...this.state,
			dynamicForms: [...this.state.dynamicForms, { title: title }]
		});
	}
}
