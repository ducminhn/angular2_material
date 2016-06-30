import { Component } from '@angular/core';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {TaskFormComponent} from './task-form/task-form.component'

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [
		MD_CARD_DIRECTIVES,
		MD_TOOLBAR_DIRECTIVES,
		MD_BUTTON_DIRECTIVES,
		MD_CHECKBOX_DIRECTIVES,
		MD_INPUT_DIRECTIVES,
		MD_LIST_DIRECTIVES,
		MD_ICON_DIRECTIVES,
		MD_TABS_DIRECTIVES,
		TaskFormComponent,
	],
	providers: [MdIconRegistry],
})
export class AppComponent {
	title: string;
	totalItems = 0; 
	remainingItems = 0;
	items: FirebaseListObservable<any[]>;
	constructor(af: AngularFire) {
		this.title = "Welcome to Angular 2 with Material";
		af.database.list('items').subscribe(items => {
			this.totalItems = items.length;
			this.remainingItems = items.filter(item => item.isDone == false).length;
		});
		this.items = af.database.list('items');
	}

	toggleTask(item){
		this.items.update(item.$key,{ isDone: !item.isDone});
	}

	deleteTask(item){
		this.items.remove(item);
	}

}
