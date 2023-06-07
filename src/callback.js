import { useCallback,useState } from "react";
import { Button, Space, Card } from 'antd';
import './hook.css';

export default function Callback() {
    const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount+ 1);
    console.log("render1")
  }, []);

  const handleChange = useCallback(() => {
    setCount(prevCount => prevCount - 1);
    console.log("render2")
  }, []);

  console.log("useCallback worked")

  return (
    <div className="hook">
       
        <Card title="useCallback" size="small">
        <Space size="middle" >
        <ul>
          <li><p>useCallback hook in React is used to memoize a function</p></li>
          <li><p>only changes if one of the dependencies has changed.</p></li>
        </ul>
        </Space>
      </Card>
      
      <br></br>
        <br></br>
        <br></br>
      <Card className="card"  title="useCallback">
      <p>Count: {count}</p>
      <Space>
      <Button type="primary" onClick={handleClick}>Increment</Button>
      <Button type="primary" onClick={handleChange}>Decrement</Button>
      </Space>
      </Card>
    </div>
  );
}