import React, { Component } from "react";
import TodoList from "./TodoList";
import Nav from "./Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

class TodoOverview extends Component {
    render() {
        return (
            <div className="full-width">
                <Nav />
                <div className="container">
                    <TodoList />
                </div>
            </div>
        )
    }
}

export default TodoOverview;