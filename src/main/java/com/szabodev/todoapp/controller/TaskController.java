package com.szabodev.todoapp.controller;

import com.szabodev.todoapp.domain.Task;
import com.szabodev.todoapp.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "http://localhost:4200")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Task> list() {
        return this.taskService.list();
    }

    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task) {
        return this.taskService.save(task);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        Optional<Task> task = taskService.findOne(id);
        task.ifPresent(taskService::delete);
    }
}
