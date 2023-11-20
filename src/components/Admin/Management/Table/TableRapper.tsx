import React from 'react'
import { Space, Table, Tag } from "antd";
import { useAppDispatch, useAppSelector } from '../../../../store/hook';
import { getRappers } from '../../../../store/features/api/apiRequest';
import type { ColumnsType } from "antd/es/table";

interface DataType extends Rapper {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
    votes: [];
  }

const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "candicateId",
      key: "candicateId",
    },        
    {
      title: "Rapper",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Team",
      dataIndex: "description",
      key: "description",
      render: (description) => <a>{description}</a>,
    },
    {
      title: "Lượt vote",
      key: "lo",
      dataIndex: "votes",
      render: (votes) => <a>{votes.length}</a>,
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

function TableRapper() {
    const dispatch = useAppDispatch();
    const listRappers = useAppSelector((state) => state.rappers.rappers);
    
    React.useEffect(() => {
        dispatch(getRappers());    
        console.log(listRappers) 
    }, []); 

  return (
    <Table columns={columns} dataSource={listRappers} />
  )
}

export default TableRapper