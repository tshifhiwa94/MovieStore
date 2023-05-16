// import React, { FC,useState } from 'react';
// import { Button, Modal, Form, Input } from 'antd';

// type Props = {
//   id: number;
//   title: string;
//   starring: string;
//   duration: string;
//   category: string;
// };
// const ViewModel: FC<Props> = ({ id, title, starring, duration,category }) => {
//   const [visible, setVisible] = useState(false);
//   const [confirmLoading, setConfirmLoading] = useState(false);
//   const [edit, setEdit] = useState(false);
//   const showModal = () => {
//     setVisible(true);
//   };
//   const validateMessages = {
//     required: '${label} is required!',
//   };
//   const handleOk = () => {
//     setConfirmLoading(true);
//     setTimeout(() => {
//       setVisible(false);
//       setConfirmLoading(false);
//     }, 2000);
//     const data = {
//       title: title,
//       starring: starring,
//       duration: duration,
//       category:category
//     };
//     fetch(`https://localhost:44311/api/services/app/Movies/Update/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Success:', data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };
//   const handleCancel = () => {
//     console.log('Clicked cancel button');
//     setVisible(false);
//   };
//   const handleEdit = () => {
//     setEdit(true);
//   };
//   const layout = {
//     labelCol: { span: 8 },
//     wrapperCol: { span: 16 },
//   };
//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         View
//       </Button>
//       <Modal
//         title={`Details of ${title}`}
//         visible={visible}
//         onOk={handleOk}
//         confirmLoading={confirmLoading}
//         onCancel={handleCancel}
//       >
//         <Button onClick={handleEdit} type="primary">
//           Edit
//         </Button>
//         <Form
//           {...layout}
//           name="nest-messages"
//           style={{ maxWidth: 600 }}
//           validateMessages={validateMessages}
//         >
//           <Form.Item name={['user', 'title']} label="Title" rules={[{ required: true }]}>
//             <Input defaultValue={title} disabled={!edit} />
//           </Form.Item>
         
//           <Form.Item name={['user', 'starring']} label="Starring" rules={[{ required: true }]}>
//             <Input defaultValue={starring} disabled={!edit} />
//           </Form.Item>
//           <Form.Item name={['user', 'duration']} label="Duration" rules={[{ required: true }]}>
//             <Input defaultValue={duration} disabled={!edit} />
//           </Form.Item>
//           <Form.Item name={['user', 'category']} label="Category" rules={[{ required: true }]}>
//             <Input defaultValue={category} disabled={!edit} />
//           </Form.Item>
//         </Form>
//       </Modal>
//     </>
//   );
// };
// export default ViewModel;
