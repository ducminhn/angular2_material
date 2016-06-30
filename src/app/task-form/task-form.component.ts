import { Component, OnInit } from '@angular/core';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ControlGroup, Control, FormBuilder, Validators } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'task-form',
  templateUrl: 'task-form.component.html',
  styleUrls: ['task-form.component.css'],
  directives: [    
    MD_CARD_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_CHECKBOX_DIRECTIVES,    
    MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES,    
    MD_ICON_DIRECTIVES,
    MD_TABS_DIRECTIVES,
  ],
})
export class TaskFormComponent implements OnInit {

  taskForm;
  items;

  constructor(fb: FormBuilder, af: AngularFire) {
    this.taskForm = fb.group({
      task: ['', Validators.required]
    })
    this.items = af.database.list('items');
  }

  ngOnInit() {}

  addTask($event){
    console.log(this.taskForm.controls);
    this.items.push({ 
      name: this.taskForm.value.task,
      isDone: false
    });
    this.taskForm.controls.task.updateValue('');
    
  }

}
