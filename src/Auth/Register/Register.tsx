
// import React, { useState } from 'react';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { Button, Form, Input } from 'antd';
// import Login  from '../Login/Login';
// import   './Register.css';



// interface ICreateUser{
//   username:string,
//   name:string,
//   surname:string,
//   phone:string,
//   idNumber:string,
//   address:string,
//   emailAddress:string,
//   password:(string|number)

// }



// const Register = () => {
//   const [showLogin, setShowLogin] = useState<boolean>(false);

//   const createPerson = async (obj: ICreateUser) => {
//     console.log(obj);
//     const response = await fetch(
//       "https://localhost:44311/api/services/app/Person/Create",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(obj),
//       }
//     );

//     if (response.ok) {
//       const data = await response.json();
//       console.log(data);
//       alert("data posted successfully!");
//       setShowLogin(true);
//     } else {
//       alert("An error occurred. Please try again later.");
//     }
//   };

//   const onFinish = (values: ICreateUser) => {
//     console.log('Received values of form: ', values);
//     createPerson(values);
//   };

//   return (
//     <>
//       {showLogin && <Login />}
//       {!showLogin && (
//         <div className="register-page">
        
//         <Form
//           name="normal_login"
//           className="login-form"
//           initialValues={{ remember: true }}
//           onFinish={onFinish}
//         ><h1>Register Here</h1>
//           <Form.Item
//             name="username"
//             rules={[{ required: true, message: 'Please input your Username!' }]}
//           >
//             <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
//           </Form.Item>

//           <Form.Item
//             name="name"
//             rules={[{ required: true, message: 'Please input your FirstName!' }]}
//           >
//             <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Firstname" />
//           </Form.Item>

//           <Form.Item
//             name="surname"
//             rules={[{ required: true, message: 'Please input your LastName!' }]}
//           >
//             <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Lastname" />
//           </Form.Item>

//           <Form.Item
//             name="phone"
//             rules={[{ required: true, message: 'Please input your Phone number!' }]}
//           >
//             <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Phone number" />
//           </Form.Item>

//           <Form.Item
//             name="idNumber"
//             rules={[{ required: true, message: 'Please input your Id Number!' }]}
//           >
//             <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Id Number" />
//           </Form.Item>

//           <Form.Item
//             name="address"
//             rules={[{ required: true, message: 'Please input your Home Address!' }]}
//           >
//             <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="address" />
//           </Form.Item>

//           <Form.Item
//             name="emailAddress"
//             rules={[{ required: true, message: 'Please input your Email Address!' }]}
//           >
//             <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email Addresss" />
//           </Form.Item>

//           <Form.Item
//             name="password"
//             rules={[{ required: true, message: 'Please input your Password!' }]}
//           >
//             <Input
//               prefix={<LockOutlined className="site-form-item-icon" />}
//               type="password"
//               placeholder="Password"
//             />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit" className="register-form-button">
//               Register
//             </Button>
//             Already have an account?{' '}
//             <a href="#" onClick={() => setShowLogin(true)}>
//               Log in now!
//             </a>
//           </Form.Item>
          
//         </Form>
//         </div>
//       )}
//     </>
//   );
// };

// export default Register;
