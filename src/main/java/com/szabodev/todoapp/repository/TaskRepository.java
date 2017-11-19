package com.szabodev.todoapp.repository;

import com.szabodev.todoapp.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {
}
