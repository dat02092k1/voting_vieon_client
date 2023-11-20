import React from "react";

import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { UsersState } from "../../../../types/interface";
import { useUsers } from "../../../../api/api";
import LoadingScreen from "../../../Loading/LoadingScreen";

interface DataType extends UsersState {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "STT",
    dataIndex: "_id",
    key: "name",
  },        
  {
    title: "Email",
    dataIndex: "email",
    key: "name",
  },
  {
    title: "isVIP",
    dataIndex: "isVIP",
    key: "isVIP",
    render: (text) => <a>isVIP</a>,
  },
  {
    title: "Vai trò",
    key: "lo",
    dataIndex: "role",
    render: (role) => (role === 'user') ? <a>User</a> : <a href="">admin</a>,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const dt: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

function TableUser() {
  const { isLoading, error, data } = useUsers();
  
  if (isLoading) return <LoadingScreen />;
  if (error) return <div>Cant get list users</div>;
  console.log(data[0]);
  if (data?.length > 0) {
    return (
      <Table columns={columns} dataSource={data} />
    );
  }
  // return <Table columns={columns} dataSource={data} />;
}

export default TableUser;
