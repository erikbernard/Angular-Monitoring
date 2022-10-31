import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  taskTitle: string = ""
  taskList: string[] = [];

  @Input() initialTaskList: string[] = [];
  @Output() onAddedTask = new EventEmitter();

  ngOnInit(): void {
    this.taskList = this.initialTaskList;
    this.onAddedTask.emit({current: this.taskList.length, addedNew: 0})
  }
  setTaskTitle(event: any): void {
    this.taskTitle = event.target.value;
  }
  addTask(): void {
    if(this.taskList.length < 10 && this.taskTitle.length > 0) {
      this.taskList.push(this.taskTitle);
      this.onAddedTask.emit({current: this.taskList.length, addedNew: 1});
    }
    if(this.taskList.length >= 10) {
      this.onAddedTask.emit({current: this.taskList.length, addedNew: 0})
    }
    this.taskTitle = "";
  }
  removeTask(task: string): void {
    this.taskList = (this.taskList.filter(item => item !== task));
  }
}
