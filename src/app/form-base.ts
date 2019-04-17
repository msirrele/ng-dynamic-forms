export class FormBase {
	_id: string;
	title: string;
	displayTitle: string;
	description: string;
	_formCategory: string;
	required: boolean;
	isCopyFromLast: boolean;
	deleted: boolean;
	created: string;
	updated: string;

	constructor(options: {
		_id?: string;
		title?: string;
		displayTitle?: string;
		description?: string;
		_formCategory?: string;
		required?: boolean;
		isCopyFromLast?: boolean;
		deleted?: boolean;
		created?: string;
		updated?: string;
	} = {}) {
		this._id = options._id;
		this.title = options.title || '';
		this.displayTitle = options.displayTitle || '';
		this.description = options.description || '';
		this._formCategory = options._formCategory;
		this.required = options.required || false;
		this.isCopyFromLast = options.isCopyFromLast || false;
		this.deleted = options.deleted || false;
		this.created = options.created;
		this.updated = options.updated;
	}
}
