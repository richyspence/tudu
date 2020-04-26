import React, { Component } from "react";
import TodoTasks from "./TodoTasks";
import 'bootstrap/dist/css/bootstrap.min.css';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);

    }

    addTask(e) {
        if (this._inputElement.value !== "") {
            var newTask = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newTask)
                };
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
    }

    deleteTask(key) {
        var filteredTasks = this.state.items.filter(function (task) {
            return (task.key !== key);
        });

        this.setState({
            items: filteredTasks
        });
    }

    completeTask = (key) => {

        for(var i = 0; i < this.state.items.length; i++)
        {
            var item = this.state.items[i];

            if (item.key === key)
            {
                item.isComplete = true;
                break;
            }
        }

        this.setState({
            items: this.state.items
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={this.addTask}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="input-group">
                                        <input className="form-control" placeholder="Enter a task..." ref={(a) => this._inputElement = a}></input>
                                        <button className="btn btn-primary ml-4" type="submit"><i className="material-icons add-btn">add</i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <TodoTasks entries={this.state.items}
                                    delete={this.deleteTask}
                                    complete={this.completeTask} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;