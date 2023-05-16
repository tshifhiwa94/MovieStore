
// import React, { useState } from 'react';
// import { Button, Form, Input } from 'antd';
// import MovieTable from '../../MovieTable/Table/MovieTable';
// import Register from '../Register/Register';
// import  './Login.css';


// interface IUserData{
//   userNameOrEmailAddress :string,
//   password:(string|number)
// }

// function Login(){
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const [registerMode, setRegisterMode] = useState<boolean>(false);

  



//   const personLogin = async (data:IUserData) => {
//     try {
//       const response = await fetch("https://localhost:44311/api/TokenAuth/Authenticate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//       });
//       console.log(response)
  
//       if (response.ok) {
//         const data = await response.json();
//         // Set the user token or session
//         console.log(data)
//         // localStorage.setItem('token', data.result.accessToken);
  
//         setIsLoggedIn(true);
//         alert('Successfully Loggedin');
//       } else {
//         setIsLoggedIn(false);
//         alert('Invalid username or password');
//       }
//     } catch (error) {
//       console.log(error);
//       alert('Login failed');
//     }
//   };
  

  

//   const handleLogout = () => {
//     // localStorage.removeItem('token', data.token);
//     setIsLoggedIn(false);
//   };


//   const onFinish = (values:IUserData)=> {
//     console.log('Success:', values);

//     personLogin(values)
//   };
  


//   return (
//     <div>
//     <div>
//       {(registerMode) && <Register />}
//       {isLoggedIn && (
//         <div>
//           <div className="overview-container">
//             <h1>OverView</h1>
//             <button className="logout-button" onClick={handleLogout}>Logout</button>
//           </div>
//           <MovieTable />
//         </div>
//       )}
//       {(!isLoggedIn && !registerMode) && (
//          <div className='loginForm'>
          

//           <Form

//               name="basic"
//               labelCol={{ span: 8 }}
//               wrapperCol={{ span: 16 }}
//               style={{ maxWidth: 600 }}
//               onFinish={onFinish}
//               className='login-form'
//             >
//               <h2  className='titleMovie'>Login Here</h2>
//               <Form.Item
                
//                 name="userNameOrEmailAddress"
//                 rules={[{ required: true, message: 'Please input your username!' }]}
//               >
//                 <Input  placeholder="Username"/>
//               </Form.Item>

//               <Form.Item
           
//                 name="password"
//                 rules={[{ required: true, message: 'Please input your password!' }]}
//                 className='inputPass'
//               >
//                 <Input.Password placeholder="Password"/>
//               </Form.Item>

//               <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//                 <Button type="primary" htmlType="submit" className='buttonLogin'>
//                   Login
//                 </Button>
//               </Form.Item> 
//               If don't have an account?{' '}
//             <a href="#" onClick={() => setRegisterMode(true)}>
//               Register now!
//             </a>  
//             </Form>

            

//         </div>
//       )}
//     </div>

//     </div>
//   );
// }

// export default Login;



