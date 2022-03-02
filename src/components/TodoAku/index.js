import React from "react";
import TableComponent from "./TableComponent";
import ModalCreate from "./Modal/ModalCreate";
import { Card } from 'antd';


const TodoAku = () => {

    return (
        <div>
            <Card title="Todo App" style={{ marginTop:64 }}>
                <ModalCreate />
                <TableComponent />
            </Card>
        </div>
    );
};

export default TodoAku;
