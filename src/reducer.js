import { useReducer } from "react";
import { Button, Card, Space } from 'antd';

const myReducer = (prevState, action) => {
    switch(action.type){
      case 'ADD':
        return prevState +1;
      case 'MINUS':
        return prevState -1;
      case 'CLEAR':
        return 0;
      default:
        break;
    }
  }
  
  function Reducer(){
    const [count,reducer] = useReducer(myReducer,0);
  
    const add = () =>{
      reducer({type:'ADD'})
    }
  
    const minus = () =>{
      reducer({type:'MINUS'})
    }
  
    const reset = () =>{
      reducer({type:'CLEAR'})
    }

    console.log("useReducer worked")
    return(
      <div className="hook">
        <Card title="useReducer" size="small">
        <Space size="middle" >
        <ul>
          <li><p>useReducer is an alternative version of useState for more complex state changes.</p></li>
          <li><p>The useReducer Hook is state management hook that allows you to manage complex state </p></li>
        </ul>
        </Space>
      </Card>
      <br></br>
        <br></br>
        <br></br> 
      <h2>useReducer</h2>
      <h3>reducer count:{count}</h3>
      <br></br>
      <Card>
      <Space>
      <Button type="dashed" onClick={add}>Add</Button>
      <Button type="dashed" onClick={minus}>Minus</Button>
      <Button type="primary" onClick={reset}>Reset</Button>
      </Space>
      </Card>
      </div>
    )
  } 

  export default Reducer;