import React, { useState } from "react";
import { Table, Space, Divider, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "./Todos";
import EditModal from "./Modal/EditModal";


export const TodosData = [ ];

const TableComponent = (props) => {
  const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.value);
    const [todoId, setTodoId] = useState("");


  const columns = [
    {
      title: "TODO",
      dataIndex: "todo",
      key: "todo",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "ACTION",
      dataIndex: "id",
      key: "id",
      fixed: "right",
      width: 100,
      render: (rows, record) => [
          <Space split={<Divider type="vertical" />} size="middle">
              <a>Done</a>
              <EditModal id={rows} todo={record.todo} />

              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => {
                  dispatch(deleteTodo({ id: rows }));
                }}
              >
                <a>Delete</a>
              </Popconfirm>
          </Space>
        ],
    },
  ];


    return (
      <div style={{ marginTop: 16 }}>
        <Table columns={columns} dataSource={todoList} />
      </div>
    );
};

export default TableComponent;
