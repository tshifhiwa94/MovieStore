import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select} from 'antd';
import {PlusOutlined,CloseOutlined ,SaveOutlined} from '@ant-design/icons';
import { IMovie } from '../../../providers/movies/context';
import { useMovie } from '../../../providers/movies';

const { Option } = Select;

const AddMovie = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [form] = Form.useForm(); // Add form instance
  const { createMovie} = useMovie();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onFinish = (values: IMovie) => {
 
    if (createMovie) {
      createMovie(values);
    }
    form.resetFields(); 
    handleOk();
  };



  return (
    <div className='AddMovie'>
      <Button type="primary" onClick={showModal} style={{ marginRight: 10  }}>
      <PlusOutlined />Add 
      </Button>
      <Modal
        title="Add New Movie"
        open={open} 
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel} className="cancel-form-button">
           <CloseOutlined />
          </Button>,
          <Button key="submit" htmlType="submit" type="primary" form="myForm" >
            <SaveOutlined />
          </Button>
        ]}

        
      >
        <Form form={form} name="control-ref" onFinish={onFinish} style={{ minWidth: 400 }} id="myForm" >
          <Form.Item name="title" rules={[{ required: true }]} style={{ marginRight:10 }} >
            <Input allowClear placeholder='Title'/>
          </Form.Item>

          <Form.Item name="starring"  rules={[{ required: true }]}>
            <Input allowClear  placeholder='Starring'/>
          </Form.Item>

          <Form.Item name="duration"  rules={[{ required: true }]}>
            <Input allowClear placeholder='Duration' />
          </Form.Item>

          <Form.Item name="category"  rules={[{ required: true }]}>
            <Select placeholder="Select a Movie type">
              <Option value="action">Action</Option>
              <Option value="comedy">Comedy</Option>
              <Option value="horror">Horror</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddMovie;