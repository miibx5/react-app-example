import React from "react";

export default props => (
    <div role="from" className="todoForm">
        <div className="col-xl-12 col-sm-9 col-md-10">
            <input id="description" className="form-control" placeholder="Adcione uma tarefa" />
        </div>
        <div className="col-xl-12 col-sm-3 col-md-2">
            <button className="btn btn-primary">
                <i className="fa fa-plus" />
            </button>
        </div>
    </div>
);