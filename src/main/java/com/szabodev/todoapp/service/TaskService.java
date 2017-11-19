package com.szabodev.todoapp.service;

import com.szabodev.todoapp.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);
}
