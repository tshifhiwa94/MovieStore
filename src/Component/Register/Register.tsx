import React, { useState,useEffect } from 'react';
import { LockOutlined, UserOutlined,PhoneOutlined,MailOutlined,GlobalOutlined} from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import {IUser} from '../../providers/users/context';
import { useUser } from '../../providers/users/index';
import './Register.css';






const Register = () => {

const {createUser} = useUser();
const [showLogin, setShowLogin] = useState<boolean>(false);



  const onFinish = (values: IUser) => {
    console.log('Received values of form: ', values);
    if(createUser){
        createUser(values)

  }};

  if(showLogin){
    window.location.href='/Login'
  }


  return (
    <>
        <div className="register-page">
        {/* <nav>
            <h1 className='title'><GlobalOutlined /> <span></span></h1>
           
        </nav> */}
       
        <Form
          name="register-form"
          className="register-form"
          onFinish={onFinish}
        >
          <h1 className='titleRegister'>REGISTER</h1>
        <hr/>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your FirstName!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Firstname" />
          </Form.Item>

          <Form.Item
            name="surname"
            rules={[{ required: true, message: 'Please input your LastName!' }]}
          >
            <Input prefix={<UserOutlined  className="site-form-item-icon" />} placeholder="Lastname" />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'Please input your Phone number!' }]}
          >
            <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Phone number" />
          </Form.Item>

          <Form.Item
            name="idNumber"
            rules={[{ required: true, message: 'Please input your Id Number!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Id Number" />
          </Form.Item>

          <Form.Item
            name="address"
            rules={[{ required: true, message: 'Please input your Home Address!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Home Address" />
          </Form.Item>

          <Form.Item
            name="emailAddress"
            rules={[{ required: true, message: 'Please input your Email Address!' }]}
          >
            <Input prefix={<MailOutlined  className="site-form-item-icon" />} placeholder="Email Addresss" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <hr/>
          <Form.Item>
            <div className='reg'>
            <Button type="primary" htmlType="submit" className="register-form-button">
              Register
            </Button>
            <p className='para'>
            Already have an account?{' '}
            <a href="#" onClick={() => setShowLogin(true)}>
              Log in now!
            </a>
            </p>
              
            </div>
          </Form.Item>
          
        </Form>
        </div>
    </>
  );
};

export default Register;


