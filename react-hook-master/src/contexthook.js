import React from "react";
import { useContext , useState, createContext} from "react";
import {  Card, Space } from 'antd';
import './hook.css'

const UserContext = createContext();

export default function Context() {
    const [user,setUser] = useState("Sasi")

    console.log("useContext worked")
  
    return(
     <div className="hook">
       <Space size="middle" >
        <Card title="useContext" size="small">
        <ul>
          <li><p>useContext Manage state globally</p></li>
          <li><p>This hook used to accessing global Data, to avoid props drilling</p></li>
        </ul>
     
      </Card>
      </Space>
      <UserContext.Provider value={user}>
        <h3>useContext</h3>
        <p>Hi {user}</p>
        <Component2 />
      </UserContext.Provider>
     </div>
    )
  }
  
  function Component2() {
    return(
      <>
      
        <p> component2</p>
        <Component3 />
      </>
    )
  
    function Component3() {
      const user= useContext(UserContext);
  
      return(
        <>
        <p>Component3</p>
        <p>{user}</p>
        </>
      )
    }
  } 
