import React, { Component } from "react";
import PageHeader from "../template/page-header"
import TaskForm from "../tasks/taskForm";
import TaskList from "../tasks/task-list";
export default class Tasks extends Component {
    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TaskForm />
                <TaskList />
            </div>
        );
    }
}