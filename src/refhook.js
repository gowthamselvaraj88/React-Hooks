import { useState,useRef } from "react"
import { Button, Space, Card } from 'antd';
import './hook.css';

export default function Ref(){
    const [count,setCount] = useState(0)
    const countRef = useRef(0)

    
  
    const handleChange = () => {
      setCount(count+1)
    }
  
    const handleAdd = () => {
      countRef.current++
    }
  
    console.log("useRef worked")
  
    return(
      <div className="hook">
         <Space size="middle" >
        <Card title="useRef" size="small">
        <ul>
          <li><p>useRef save the data without re-render.Mutable value</p></li>
          <li><p>This hook used to access a DOM element directly.</p></li>
        </ul>
     
      </Card>
      </Space>
      <br></br>
        <br></br>
        <br></br>
        <Card title="useRef" size="small">
      <Space  className="hook">
      
      <h4>Counter {count}</h4>
      <h4>Ref count {countRef.current}</h4>
      <br></br>
   
      <Button type="primary" onClick={handleChange}>Count +</Button>
     
   
      <Button type="primary"  onClick={handleAdd}>Ref + </Button>
      </Space>
      </Card>
      
      </div>
    )
  }