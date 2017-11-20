package com.szabodev.todoapp.service;

import com.szabodev.todoapp.domain.Task;

import java.util.Optional;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);

    void delete(Task task);

    Optional<Task> findOne(Long id);

}
