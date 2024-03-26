import React,{useState, useEffect} from 'react';
import { Button, Table} from 'antd';
import {_get} from "../httpCliet";


export  const AntTable=()=>{
  const [uselIst, setUserList] = useState([ ]);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'firstName',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    }
];

    useEffect(async()=>{
        let resp= await _get("/users");
        console.log(resp.data.users);
        setUserList(resp.data.users);
        resp.data.users = resp.data.users.map((item)=>{ return {...item, key:item.id} });
        },[]);
    
    
    
    
        return  (<> 
        <Table data-testid="loading" columns={columns} dataSource={uselIst} /></>)

}