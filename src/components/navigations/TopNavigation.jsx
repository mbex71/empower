import React,{useState} from 'react'
import {Row, Col, Menu} from 'antd'
import {Link} from 'react-router-dom'

const leftItems = [
    {
      label:  <Link to="/">Home</Link>,
      key: 'home',
      style:{
        color:'#fca311'
      }
      
    },
   
   
  ];

const rightItems = [
    {
      label:  <Link to="/auth/login">Login</Link>,
      key: 'login',
      style:{
        color:'#fca311'
      }
      
    },
    {
        label:  <Link to="/auth/register">Register</Link>,
        key: 'register',
        style:{
          color:'#fca311'
        }
        
      },
   
   
  ];


  const TopNavigation = ()=>{

    const [current, setCurrent] = useState('mail');

    const onClick= (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    return(
        <Row style={{width:'100%'}}>
            <Col span={16} >
                <Menu style={{ backgroundColor:'#14213d', display:'flex', justifyContent:'start'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={leftItems} />
            </Col>
            <Col flex='auto'>
                <Menu style={{ backgroundColor:'#14213d', display:'flex', justifyContent:'end'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={rightItems} />
            </Col>
        </Row>
    )
  }

  export default TopNavigation