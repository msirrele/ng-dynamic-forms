import { Component, OnInit } from '@angular/core';
import { DynamicFormService } from '../dynamic-form.service';
import { FormBase } from '../form-base';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dynamicForms: FormBase[] = [];

  constructor(private dfs: DynamicFormService) { }

  ngOnInit() {
    this.getDynamicForms();
  }

  getDynamicForms(): void {
    this.dfs.getDynamicForms()
      .subscribe(dynamicForms => {
        return this.dynamicForms = dynamicForms;
      });
  }
}
