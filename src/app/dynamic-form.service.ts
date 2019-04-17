import { Injectable } from '@angular/core';
import { FormBase } from './form-base';
import { DYNAMICFORMS } from './mock-dynamic-forms';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DynamicFormService {
	private dynamicFormsUrl = 'http://localhost:3000/form-bases';
	constructor(private ms: MessageService, private http: HttpClient) { }

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			this.log(`${operation} failed: ${error.message}`);
			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

	getDynamicForms(): Observable<FormBase[]> {
		// TODO send the message after fetching the dynamic forms
		this.ms.add('DynamicFormService: fetched dynamic forms');
		// return of(DYNAMICFORMS);
		return this.http.get<FormBase[]>(this.dynamicFormsUrl)
			.pipe(
				tap(_ => this.log('fetched dynamic forms')),
				catchError(this.handleError<FormBase[]>('getDynamicForms', []))
		);
	}

	getDynamicForm(_id: string): Observable<FormBase> {
		const url = `${this.dynamicFormsUrl}/${_id}`;
		return this.http.get<FormBase>(url).pipe(
			tap(_ => this.log(`fetched dynamic form _id=${_id}`)),
			catchError(this.handleError<FormBase>())
		);
		// this.ms.add(`DynamicFormService: fetched dynamic form _id=${_id}`);
		// return of(DYNAMICFORMS.find(dynamicForm => dynamicForm._id == _id));
	}

	private log(message: string) {
		this.ms.add(`Dynamic Form Service: ${message}`);
	}
}
