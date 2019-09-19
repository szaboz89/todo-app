import {EventEmitter, Injectable} from '@angular/core';
import {Task} from './task.model';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

export const TASK_API = environment.apiUrl + '/tasks';

@Injectable()
export class TaskService {

  onTaskAdded = new EventEmitter<Task>();

  constructor(private http: HttpClient) {

  }

  getTasks() {
    return this.http.get(TASK_API);
  }

  saveTask(task: Task, checked: boolean) {
    task.completed = checked;
    return this.http.post(TASK_API + '/save', task);
  }

  addTask(task: Task) {
    return this.http.post(TASK_API + '/save', task);
  }

  deleteTask(task: Task) {
    return this.http.delete(TASK_API + '/' + task.id);
  }

}
