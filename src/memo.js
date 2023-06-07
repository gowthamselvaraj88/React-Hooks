import { useState, useMemo } from "react";
import { Button,Card, Space } from "antd";

export default function Memo() {
    const [count, setCount] = useState(0);
  
   
    const doubledCount = useMemo(() => {
      return count * 2;
     
    }, [count]);
   
    console.log("useMemo worked")
    return (
      <div className="hook">
         <Card title="useMemo" size="small">
        <Space size="middle" >
        <ul>
          <li><p>useMemo hook in React is used to memoize a value</p></li>
          <li><p>The useMemo Hook only runs when one of its dependencies update.</p></li>
        </ul>
        </Space>
      </Card>
      <br></br>
        <br></br>
        <br></br>
        <Card title="useMemo">
          <Space>
        <p>Count: {count}</p>
        <p>Doubled Count: {doubledCount}</p>
        <Button type="primary" onClick={() => setCount(count + 1)}>Increment</Button>
        </Space>
        </Card>
      </div>
    );
  }