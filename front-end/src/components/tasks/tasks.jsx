import React, { Component } from "react";
import axios from "axios";
import PageHeader from "../template/page-header"
import TaskForm from "../tasks/taskForm";
import TaskList from "../tasks/task-list";

const URL = "http://127.0.0.1:2002/api/todos";


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
        const description = this.state.description;
        axios.post(URL, { description }).then(resp => console.log("Funcionou"));
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