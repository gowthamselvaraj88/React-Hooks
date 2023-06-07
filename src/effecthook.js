import React from "react";
import { useState, useEffect } from "react";
import { Button, Card, Space } from 'antd';
import './hook.css'

export default function Effect(){

   
        const[count1,setCount1] = useState(0)
        const[count2,setCount2] = useState(0) 


        useEffect(()=>{
            console.log("useEffect worked")
        });
    return(
        <div className="hook">
        <Space size="middle" >
        <Card title="useEffect" size="small">
        <ul>
          <li><p>useEffect Runs on every Render</p></li>
          <li><p>Allows you to perform side effectin component</p></li>
        </ul>
     
      </Card>
      </Space>
        <br></br>
        <br></br>
        <br></br>
        <Card size="small"  title="useEffect">
        <Space size="middle" >
        
        
      <p>count1: {count1}</p>
      <p>count2: {count2}</p>
      
    
      <Button type="primary" onClick={()=> setCount1(count1+1)}>count1 +1</Button>
      <Button type="primary"  onClick={()=> setCount2(count2+1)}>count2 +1</Button>
     
      </Space>
      </Card>
    </div>
    )
}