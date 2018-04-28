import {Http} from "@angular/http";
import {EventEmitter, Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Task} from "./task.model";
import {environment} from "../../environments/environment";

export const TASK_API = environment.apiUrl + '/tasks';

@Injectable()
export class TaskService {

    onTaskAdded = new EventEmitter<Task>();

    constructor(private http: Http) {

    }

    getTasks() {
        return this.http.get(TASK_API).map(response => response.json());
    }

    saveTask(task: Task, checked: boolean) {
        task.completed = checked;
        return this.http.post(TASK_API + '/save', task).map(response => response.json());
    }

    addTask(task: Task) {
        return this.http.post(TASK_API + '/save', task).map(response => response.json());
    }

    deleteTask(task: Task) {
        return this.http.delete(TASK_API + '/' + task.id).map(response => response);
    }

}
