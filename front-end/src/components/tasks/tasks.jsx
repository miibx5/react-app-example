import React, { Component } from "react";
import PageHeader from "../template/page-header"
import TaskForm from "../tasks/taskForm";
import TaskList from "../tasks/task-list";
export default class Tasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: "", list: []
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleAdd() {
        console.log("add", this);
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            description: event.target.value
        })
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TaskForm handleAdd={this.handleAdd} description={this.state.description} handleChange={this.handleChange} />
                <TaskList />
            </div>
        );
    }
}