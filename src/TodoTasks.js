import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoTasks extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return (
            <div key={item.key} className={"card mt-4 " + (item.isComplete ? 'task-completed' : '')}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8">
                            <div className={"text-font-size " + (item.isComplete ? 'text-strikeout' : '')}>{item.text}</div>
                        </div>
                        <div className="col-md-4">
                            { !item.isComplete ? <i onClick={() => this.props.complete(item.key)} className="material-icons float-right icon-font-size color-green hover">done</i> : null }
                            { !item.isComplete ? <i onClick={() => this.props.delete(item.key)} className="material-icons float-right icon-font-size color-red hover">close</i> : null }
                            { !item.isComplete ? <i className="material-icons float-right icon-font-size mr-4">access_alarm</i> : null }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <div className="row">
                <div className="col-md-12">
                    <FlipMove duration={250} easing="ease-out">
                        {listItems}
                    </FlipMove>
                </div>
            </div>
        );
    }
}

export default TodoTasks;