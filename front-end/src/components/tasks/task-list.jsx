import React from "react";
import IconButton from "../template/iconButton";

export default props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(task => (
            <tr key={task._id}>
                <td>{task.description}</td>
                <td>
                    <IconButton style="danger" icon="trash-o" onClick={() => props.handleRemove(task)} />
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
};