import React, { Component } from "react";
import PageHeader from "../template/page-header"
import TaskForm from "../tasks/taskForm";
import TaskList from "../tasks/task-list";
export default class Tasks extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd() {
        console.log("add", this);
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TaskForm handleAdd={this.handleAdd} />
                <TaskList />
            </div>
        );
    }
}