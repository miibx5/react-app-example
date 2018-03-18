import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";

import React from "react";
import Tasks from "../components/tasks/tasks"
import About from "../components/tasks/about";
import Menu from "../components/template/menu";

export default props => (
    <div className="container">
        <Menu />
        <Tasks />
        <About />

    </div>
);