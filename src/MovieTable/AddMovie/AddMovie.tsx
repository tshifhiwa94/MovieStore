// import React, { useState } from 'react';
// import { Button, Modal, Form, Input, Select } from 'antd';
// const { Option } = Select;


// export  interface ITableData{
//   title:string,
//   starring:string,
//   duration:(string|number),
//   category:string

// }

// const AddMovie = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   const showModal = () => {
//     setOpen(true);
//   };

//   const handleOk = () => {
//     setOpen(false);
//   };

//   const handleCancel = () => {
//     setOpen(false);
//   };




//   const addMovie = async (data:ITableData) => 
//   {
//     console.log('addmovie');
//     const response = await fetch(
//       "https://localhost:44311/api/services/app/Movie/Create",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );

//     if (response.ok) {
//       const data = await response.json();
//       console.log(data);
//       alert("Movie posted successfully!");
      
//     } else {
//       alert("An error occurred. Please try again later.");
//     }
//   };

//   const onFinish = (values:ITableData) => {
//     console.log(values);
//     addMovie(values);

//     handleOk();
//   };

//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Add Movie
//       </Button>
//       <Modal
//         title="Add New Movie"
//         visible ={open}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         footer={[
//           <Button key="cancel" onClick={handleCancel} className="cancel-form-button">
//             Cancel
//           </Button>,
//           <Button key="submit" htmlType="submit" type="primary" form="myForm">
//             Save
//           </Button>
//         ]}
//       >
//         <Form name="control-ref" onFinish={onFinish} style={{ maxWidth: 600 }} id="myForm">
//           <Form.Item name="title" label="Title" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>

//           <Form.Item name="starring" label="Starring" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>

//           <Form.Item name="duration" label="Duration" rules={[{ required: true }]}>
//             <Input  />
//           </Form.Item>

//           <Form.Item name="category" label="Category" rules={[{ required: true }]}>
//             <Select placeholder="Select a Movie type" >
//               <Option value="action">Action</Option>
//               <Option value="comedy">Comedy</Option>
//               <Option value="horror">Horror</Option>
//               <Option value="other">other</Option>
//             </Select>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </>
//   );
// };

// export default AddMovie;

