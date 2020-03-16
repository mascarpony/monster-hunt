import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  tasks = [{task: 'finish this tasks', priority: 'high'}];
  priorities = ['high', 'very high', 'very very high', 'die but do it'];

  taskModel = {
    task: '',
    priority: null
  };

  onAddTask(form) {
    this.tasks.push({ task: this.taskModel.task, priority: this.taskModel.priority});
    form.resetForm();
  }
}
